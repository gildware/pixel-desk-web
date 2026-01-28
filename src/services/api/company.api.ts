import { apiClient } from './apiClient';

export const selectCompany = (
  companyId: string,
  employeeType?: string,
) => {
  return apiClient('/auth/generate-token-with-company', {
    method: 'POST',
    body: { companyId, employeeType },
  });
};

export const getMyCompanies = () => {
  return apiClient('/companies/i-belong-to');
};

export const getCreatedCompanies = () => {
  return apiClient('/companies/created-by-me');
};
