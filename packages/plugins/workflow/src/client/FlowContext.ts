import React, { useContext } from "react";


export const FlowContext = React.createContext(null);

export function useFlowContext() {
  return useContext(FlowContext);
}
