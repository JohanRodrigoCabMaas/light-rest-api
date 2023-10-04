import { RolesBuilder } from 'nest-access-control';

export enum AppRoles {
  ADMIN = 'ADMIN',
  USERS = 'USERS',
  CUSTOMERS = 'CUSTOMERS',
}

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(AppRoles.ADMIN)
  .createAny('user')
  .updateAny('user')
  .deleteAny('user')
  .readAny('user');
roles
  .grant(AppRoles.USERS)
  .createOwn('user')
  .updateOwn('user')
  .deleteOwn('user')
  .readAny('user');
roles.grant(AppRoles.CUSTOMERS).readAny('user');
