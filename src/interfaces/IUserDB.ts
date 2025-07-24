export interface IUserDB {
    username?: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number?: string;
    is_active: boolean;
    is_superadmin?: boolean;
    user_id: string;
    user_role: string;
    role_ids: number[];
    date_of_birth: string;
}