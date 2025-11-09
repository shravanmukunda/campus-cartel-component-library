import { default as React } from 'react';
import { DrawerProps as AntDrawerProps } from 'antd';
export interface DrawerProps extends AntDrawerProps {
    children: React.ReactNode;
}
export declare const Drawer: React.FC<DrawerProps>;
export default Drawer;
