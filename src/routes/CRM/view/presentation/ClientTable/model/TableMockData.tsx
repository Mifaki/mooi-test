import { Avatar, TableColumnsType } from "antd";
import { TableDataI } from "./type";

export const TableData: TableDataI[] = [
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Male',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
    {
        key: '1',
        name: 'Olivia Rhye',
        avtarURL: 'https://res.cloudinary.com/dduonada5/image/upload/v1711293984/b-cate/ncmikvw7adi0c4ds9im9.avif',
        gender: 'Female',
        dob: '20/10/2021',
        martialStatus: 'Married',
        employment: 'Employed'
    },
]

export const columns: TableColumnsType<TableDataI> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
            <div className="flex items-center gap-3">
                <Avatar src={record.avtarURL} alt={`${text} avatar`} />
                <p className="font-semibold">{text}</p>
            </div>
        )
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