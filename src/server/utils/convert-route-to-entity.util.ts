const mapping: Record<string, string> = {
  businesses: 'business',
  documents: 'document',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
