export interface IUser {
    role_id?: number;
    username?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    email?: string;
    phone_number?: string;
    is_active: boolean;
    is_superadmin?: boolean;
    user_id: string;
    user_role?: string;
}