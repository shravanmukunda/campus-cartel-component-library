import React from 'react';
import { Pagination as AntPagination, PaginationProps as AntPaginationProps } from 'antd';

export interface PaginationProps extends AntPaginationProps {}

export const Pagination: React.FC<PaginationProps> = (props) => {
  return <AntPagination {...props} />;
};

export default Pagination;
