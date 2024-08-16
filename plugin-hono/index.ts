import type { Plugin, Gasket } from '@gasket/core';
import create from './create';
import createServers from './create-servers';

const plugin: Plugin = {
  name: '@gasket/plugin-hono',
  version: '7.0.0-next.53',
  description: 'Hono plugin for Gasket',
  hooks: {
    create,
    createServers,
    actions(gasket: Gasket) {
      return {
        async startServers() {
          const servers = await gasket.execWaterfall('createServers');
          return servers;
        },
        async stopServers() {
          await gasket.execWaterfall('stopServers');
        }
      };
      
    }
  },
}

export default plugin;