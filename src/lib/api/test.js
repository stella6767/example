import client from './client';

export const connectTest = () =>
  client.get('/test');
