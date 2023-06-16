const mapping: Record<string, string> = {
  suppliers: 'supplier',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
