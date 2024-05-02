import { Table } from "antd"
import { useState } from "react";
import { TableDataI } from "./model/type";
import { columns } from "./model/TableMockData";

interface ClientTableProps {
    filteredData: TableDataI[];
}

const ClientTable = ({
    filteredData
}: ClientTableProps) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={filteredData}
            pagination={{
                pageSize: 5,
                total: filteredData.length
            }} />
    )
}

export default ClientTable