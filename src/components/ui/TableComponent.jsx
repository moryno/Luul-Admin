import { StyledTable } from "./index.styled";

const TableComponent = ({ dataSource = [], columns = [], loading = false }) => {
  return (
    <StyledTable
      dataSource={dataSource}
      columns={columns}
      bordered
      rowKey={(record) => record?.id}
      loading={loading}
      size="small"
    />
  );
};

export default TableComponent;
