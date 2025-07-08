export interface IUser {
    username?: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    isActive: boolean;
    isSuperadmin?: boolean;
    userId: string;
    userRole: string;
    roleIds: number[];
    dateOfBirth: string;
}