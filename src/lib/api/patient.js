import client from './client';

export const register = (data) =>
  client.get(`/user/`);
