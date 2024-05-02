export interface MenuItemI {
    key: string;
    label: string;
}

export interface TableFilterI {
    label: string
    items: MenuItemI[];
    onChange: (checkedItems: string[]) => void;
}