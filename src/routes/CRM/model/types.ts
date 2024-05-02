export interface MenuItemI {
    key: string;
    label: string;
}

export interface TableFilterI {
    label: string
    items: MenuItemI[];
    onChange: (checkedItems: string[]) => void;
}

export interface TableDataI {
    key: React.Key;
    name: string;
    avtarURL: string
    gender: 'Male' | 'Female'
    dob: string
    martialStatus: 'Single' | 'Married' | 'Divorced'
    employment: 'Employed' | 'Unemployed'
}