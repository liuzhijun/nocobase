import React from 'react';
import { cx } from '@emotion/css';
import { Dropdown, Menu, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  useAPIClient,
  useCompile
} from '@nocobase/client';
import { useFlowContext } from './FlowContext';
import { Instruction, instructions, Node } from './nodes';
import { addButtonClass } from './style';


interface AddButtonProps {
  upstream;
  branchIndex?: number;
};

export function AddButton({ upstream, branchIndex = null }: AddButtonProps) {
  const compile = useCompile();
  const api = useAPIClient();
  const { workflow, onNodeAdded } = useFlowContext() ?? {};
  if (!workflow) {
    return null;
  }
  const resource = api.resource('workflows.nodes', workflow.id);

  async function onCreate({ keyPath }) {
    const type = keyPath.pop();
    const config = {};
    const [optionKey] = keyPath;
    if (optionKey) {
      const { value } = instructions.get(type).options.find(item => item.key === optionKey);
      Object.assign(config, value);
    }

    const { data: { data: node } } = await resource.create({
      values: {
        type,
        upstreamId: upstream?.id ?? null,
        branchIndex,
        config
      }
    });

    onNodeAdded(node);
  }

  const groups = [
    { value: 'control', name: '{{t("Control")}}' },
    { value: 'collection', name: '{{t("Collection operations")}}' },
  ];
  const instructionList = (Array.from(instructions.getValues()) as Instruction[]);

  return (
    <div className={cx(addButtonClass)}>
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu onClick={ev => onCreate(ev)}>
            {groups.map(group => (
              <Menu.ItemGroup key={group.value} title={compile(group.name)}>
                {instructionList.filter(item => item.group === group.value).map(item => item.options
                ? (
                  <Menu.SubMenu key={item.type} title={compile(item.title)}>
                    {item.options.map(option => (
                      <Menu.Item key={option.key}>{compile(option.label)}</Menu.Item>
                    ))}
                  </Menu.SubMenu>
                )
                : (
                  <Menu.Item key={item.type}>{compile(item.title)}</Menu.Item>
                ))}
              </Menu.ItemGroup>
            ))}
          </Menu>
        }
        disabled={workflow.executed}
      >
        <Button shape="circle" icon={<PlusOutlined />} />
      </Dropdown>
    </div>
  );
};
