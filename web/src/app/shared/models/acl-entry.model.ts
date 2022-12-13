import { Role } from 'app/shared/models/role.model';

export class AclEntry {
  private static readonly MANAGER_ROLES = [Role.SURVEY_ORGANIZER, Role.OWNER];

  constructor(readonly email: string, readonly role: Role) {}

  public isManager(): boolean {
    return AclEntry.MANAGER_ROLES.includes(this.role);
  }
}
