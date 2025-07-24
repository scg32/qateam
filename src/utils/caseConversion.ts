import type { IDoctor } from "@/interfaces/IDoctor";
import type { IPatient } from "@/interfaces/IPatient";
import type { IUser } from "@/interfaces/IUser";
import type { IUserDB } from "@/interfaces/IUserDB";

export function toSnakeCase(obj: IUser ) {
    return {
        username: obj.username,
        first_name: obj.firstName,
        last_name: obj.lastName,
        email: obj.email,
        phone_number: obj.phoneNumber,
        is_active: obj.isActive,
        is_superadmin: obj.isSuperadmin,
        user_id: obj.userId,
        user_role: obj.userRole,
        role_ids: obj.roleIds,
        date_of_birth: obj.dateOfBirth
    }
}

export function toCammelCase(obj: IUserDB | any) {
    return {
        username: obj.username,
        firstName: obj.first_name,
        lastName: obj.last_name,
        email: obj.email,
        phoneNumber: obj.phone_number,
        isActive: obj.is_active,
        isSuperadmin: obj.is_superadmin,
        userId: obj.user_id,
        userRole: obj.user_role,
        roleIds: obj.role_ids,
        dateOfBirth: obj.date_of_birth
    }
}

