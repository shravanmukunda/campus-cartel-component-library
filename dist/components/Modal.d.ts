import { default as React } from 'react';
import { ModalProps as AntModalProps } from 'antd';
export interface ModalProps extends AntModalProps {
    children: React.ReactNode;
}
export declare const Modal: React.FC<ModalProps>;
export default Modal;
