export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

export const DEFAULT_FETCH_OPTIONS: RequestInit = {
  credentials: 'include', // 🔑 VERY IMPORTANT
  headers: {
    'Content-Type': 'application/json',
  },
};
