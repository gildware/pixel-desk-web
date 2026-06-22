const RAW_API_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ?? '';

const USE_PROXY =
  typeof process !== 'undefined' &&
  process.env.NEXT_PUBLIC_USE_API_PROXY === 'true' &&
  RAW_API_URL.startsWith('http');

export const API_BASE_URL = USE_PROXY ? '/api/proxy' : RAW_API_URL || 'http://localhost:3002';

export const DEFAULT_FETCH_OPTIONS: RequestInit = {
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};
