import { Avatar, Table, TableColumnsType } from "antd"
import { useState } from "react";
import { TableDataI } from "../../../model/types";

interface ClientTableProps {
    filteredData: TableDataI[];
    filteredValue: string
    loading: boolean
}

const ClientTable = ({
    filteredData,
    filteredValue,
    loading
}: ClientTableProps) => {
    const columns: TableColumnsType<TableDataI> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="flex items-center gap-3">
                    <Avatar src={record.avatarURL} alt={`${text} avatar`} />
                    <p className="font-semibold">{text}</p>
                </div>
            ),
            filteredValue: [filteredValue],
            onFilter: (value, record) => {
                return String(record.name).toLowerCase().includes(String(value).toLowerCase());
            }
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender'
        },
        {
            title: 'DOB',
            dataIndex: 'dob',
            key: 'dob'
        },
        {
            title: 'Martial Status',
            dataIndex: 'martialStatus',
            key: 'martialStatus',
        },
        {
            title: 'Employment',
            dataIndex: 'employment',
            key: 'employment'
        }
    ]

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
            loading={loading}
            dataSource={filteredData}
            scroll={{ x: "max-content" }}
            pagination={{
                pageSize: 5,
                total: filteredData.length
            }} />
    )
}

export default ClientTable