export interface TableDataI {
    key: React.Key;
    name: string;
    avtarURL: string
    gender: 'Male' | 'Female'
    dob: string
    martialStatus: 'Single' | 'Married' | 'Divorced'
    employment: 'Employed' | 'Unemployed'
}