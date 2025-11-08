import React from 'react';
import { Tabs as AntTabs, TabsProps as AntTabsProps } from 'antd';

export interface TabsProps extends AntTabsProps {}

export const Tabs: React.FC<TabsProps> = (props) => {
  return <AntTabs {...props} />;
};

export default Tabs;
