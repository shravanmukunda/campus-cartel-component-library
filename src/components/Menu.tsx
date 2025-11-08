import React from 'react';
import { Menu as AntMenu, MenuProps as AntMenuProps } from 'antd';

export interface MenuProps extends AntMenuProps {}

const MenuWrapper: React.FC<MenuProps> = (props) => {
  return <AntMenu {...props} />;
};

export const Menu = Object.assign(MenuWrapper, {
  Item: AntMenu.Item,
  SubMenu: AntMenu.SubMenu,
  ItemGroup: AntMenu.ItemGroup,
  Divider: AntMenu.Divider,
});

export default Menu;
