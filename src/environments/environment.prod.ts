import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'cdvMikolaj',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44384',
    redirectUri: baseUrl,
    clientId: 'cdvMikolaj_App',
    responseType: 'code',
    scope: 'offline_access cdvMikolaj',
  },
  apis: {
    default: {
      url: 'https://localhost:44384',
      rootNamespace: 'cdvMikolaj',
    },
  },
} as Environment;
