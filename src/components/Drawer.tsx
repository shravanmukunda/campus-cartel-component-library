import React from 'react';
import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from 'antd';

export interface DrawerProps extends AntDrawerProps {
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ children, ...props }) => {
  return <AntDrawer {...props}>{children}</AntDrawer>;
};

export default Drawer;
