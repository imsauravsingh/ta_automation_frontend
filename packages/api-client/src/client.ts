import axios from 'axios';
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' }
});

// Attach consent token automatically
api.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const consent = localStorage.getItem('consent_token');
    if (consent) config.headers['x-consent-token'] = consent;
  }
  return config;
});