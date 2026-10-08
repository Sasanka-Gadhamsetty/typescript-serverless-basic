export interface UserContext {
  id: string;
  roles: string[];
}

export function authorize(
  user: UserContext,
  requiredRole: string
): boolean {
  return user.roles.includes(requiredRole);
}
