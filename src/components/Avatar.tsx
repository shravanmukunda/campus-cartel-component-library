import React from 'react';
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd';

export interface AvatarProps extends AntAvatarProps {}

const AvatarWrapper: React.FC<AvatarProps> = (props) => {
  return <AntAvatar {...props} />;
};

export const Avatar = Object.assign(AvatarWrapper, {
  Group: AntAvatar.Group,
});

export default Avatar;
