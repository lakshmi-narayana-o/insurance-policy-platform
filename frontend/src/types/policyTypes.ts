export interface IPolicy {
  id: number;
  name: string;
  type: 'Term Life' | 'Health' | 'Vehicle';
  premium: number;
  coverage: number;
}

export interface IPolicyFilters {
  search?: string;
  minPremium?: number;
  maxPremium?: number;
  policyType?: IPolicy['type'];
  minCoverage?: number;
  sortBy?: keyof IPolicy;
  sortOrder?: 'asc' | 'desc';
}