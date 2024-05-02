import { SearchOutlined } from "@ant-design/icons"
import { Input } from "antd"
import ClientTable from "../ClientTable/ClientTable"
import { useRef, useState } from "react"
import TableFilterButton from "../TableFilterButton/TableFilterButton"
import { EmploymentFilter, GenderFilter, MartialFilter } from "../../../model/TableFilterOptions"
import { TableData } from "../../../model/TableMockData"


interface FilterState {
    gender: string[];
    martialStatus: string[];
    employment: string[];
}

const ClientTab = () => {

    const [filteredData, setFilteredData] = useState(TableData);
    
    const filtersRef = useRef<FilterState>({
        gender: [],
        martialStatus: [],
        employment: []
    });

    const filterData = () => {
        const filtered = TableData.filter(item => {
            return (
                (filtersRef.current.gender.length === 0 || filtersRef.current.gender.includes(item.gender)) &&
                (filtersRef.current.martialStatus.length === 0 || filtersRef.current.martialStatus.includes(item.martialStatus)) &&
                (filtersRef.current.employment.length === 0 || filtersRef.current.employment.includes(item.employment))
            );
        });
        setFilteredData(filtered);
    };

    const handleChange = (category: keyof FilterState) => (selectedItems: string[]) => {
        filtersRef.current[category] = selectedItems;
        filterData();
    };


    return (
        <div className="space-y-5">
            <div className="flex items-center gap-6">
                <Input
                    size="large"
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                    className="w-[40%]"
                />
                <div className="space-x-4">
                    <TableFilterButton items={GenderFilter} onChange={handleChange('gender')} label="Gender" />
                    <TableFilterButton items={MartialFilter} onChange={handleChange('martialStatus')} label="Martial Status" />
                    <TableFilterButton items={EmploymentFilter} onChange={handleChange('employment')} label="Employment" />
                </div>
            </div>
            <ClientTable filteredData={filteredData} />
        </div>
    )
}

export default ClientTab