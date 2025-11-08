
import { Table as AntTable, TableProps as AntTableProps } from 'antd';

export interface TableProps<T> extends AntTableProps<T> {}

const TableWrapper = <T extends object>(props: TableProps<T>) => {
  return <AntTable {...props} />;
};

export const Table = Object.assign(TableWrapper, {
  Column: AntTable.Column,
  ColumnGroup: AntTable.ColumnGroup,
  Summary: AntTable.Summary,
  SELECTION_ALL: AntTable.SELECTION_ALL,
  SELECTION_INVERT: AntTable.SELECTION_INVERT,
  SELECTION_NONE: AntTable.SELECTION_NONE,
});

export default Table;
