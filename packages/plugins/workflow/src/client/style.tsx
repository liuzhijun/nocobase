import { css } from '@emotion/css';

export const workflowPageClass = css`
  height: 100%;
  width: 100%;
  overflow: auto;

  .workflow-toolbar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background: #fff;

    header{
      display: flex;
      align-items: center;

      > *:not(:last-child) {
        &:after{
          content: ">";
          margin: 0 .5em;
        }
      }
    }

    aside{
      display: flex;
      align-items: center;
      gap: .5em;
    }
  }

  .workflow-canvas{
    width: min-content;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
  }
`;

export const workflowVersionDropdownClass = css`
  .ant-dropdown-menu-item{

    strong{
      font-weight: normal;
    }

    &.enabled{
      strong{
        font-weight: bold;
      }
    }

    &.unexecuted{
      strong{
        font-style: italic;
      }
    }

    .ant-dropdown-menu-title-content{
      text-align: right;

      time{
        margin-left: 0.5rem;
        color: #999;
        font-size: 80%;
      }
    }
  }
`;

export const branchBlockClass = css`
  display: flex;
  position: relative;

  :before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% - .5px);
    width: 1px;
    background-color: #f0f2f5;
  }
`;

export const branchClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 2em;

  .workflow-node-list{
    flex-grow: 1;
    min-width: 20em;
  }

  .workflow-branch-lines{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #ddd;
  }

  :before,:after{
    content: "";
    position: absolute;
    height: 1px;
    background-color: #ddd;
  }

  :before{
    top: 0;
  }

  :after{
    bottom: 0;
  }

  :not(:first-child):not(:last-child){
    :before,:after{
      left: 0;
      width: 100%;
    }
  }

  :last-child:not(:first-child){
    :before,:after{
      right: 50%;
      width: 50%;
    }
  }

  :first-child:not(:last-child){
    :before,:after{
      left: 50%;
      width: 50%;
    }
  }
`;

export const nodeBlockClass = css`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const nodeClass = css`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const nodeCardClass = css`
  width: 20em;
  background: #fff;
  padding: 1em;
  box-shadow: 0 .25em .5em rgba(0, 0, 0, .1);

  .workflow-node-remove-button,
  .workflow-node-job-button{
    position: absolute;
    right: -.5em;
    top: -.5em;
  }

  .workflow-node-remove-button{
    color: #999;
    opacity: 0;
    transition: opacity .3s ease;

    &[disabled]{
      display: none;
    }

    &:hover {
      color: red;
    }
  }

  .workflow-node-job-button{
    display: flex;
    top: 0;
    right: 0;
    width: 1.25rem;
    height: 1.25rem;
    min-width: 1.25rem;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    color: #fff;

    &[type="button"]{
      border: none;
    }
  }

  &:hover{
    .workflow-node-remove-button{
      opacity: 1;
    }
  }
`;

export const nodeHeaderClass = css`
  position: relative;
`;

export const nodeMetaClass = css`
  margin-bottom: .5em;
`;

export const nodeTitleClass = css`
  display: flex;
  align-items: center;
  font-weight: normal;

  .workflow-node-id{
    color: #999;
  }
`;

export const nodeSubtreeClass = css`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const addButtonClass = css`
  flex-shrink: 0;
  padding: 2em 0;
`;
