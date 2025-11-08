import React from 'react';
import { Layout as AntLayout, LayoutProps as AntLayoutProps } from 'antd';

export interface LayoutProps extends AntLayoutProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutProps> = ({ children, ...props }) => {
  return <AntLayout {...props}>{children}</AntLayout>;
};

export const Layout = Object.assign(LayoutWrapper, {
  Header: AntLayout.Header,
  Content: AntLayout.Content,
  Footer: AntLayout.Footer,
  Sider: AntLayout.Sider,
});

export default Layout;
