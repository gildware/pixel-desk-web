import { apiClient } from './apiClient';

export const getBillingOverview = () => {
  return apiClient('/billing/overview');
};

export const getInvoices = () => {
  return apiClient('/billing/invoices');
};
