export enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

export const All_Admins = [Role.ADMIN, Role.SUPER_ADMIN];
export const User_Only = [Role.USER];
export const Super_Admin_Only = [Role.SUPER_ADMIN];
