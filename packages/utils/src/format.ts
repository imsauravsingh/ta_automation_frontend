export const maskEmail = (email?: string) => {
  if (!email) return '';
  const [u, d] = email.split('@');
  return u.slice(0, 2) + '***@' + d;
};
export const maskPhone = (p?: string) => p ? p.replace(/\d(?=\d{2})/g, '*') : '';