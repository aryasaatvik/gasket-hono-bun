import create from './create';
import createServers from './create-servers';

/** @type {import('@gasket/core').Plugin} */
const plugin = {
  name: '@gasket/plugin-hono',
  version: '7.0.0-next.53',
  description: 'Hono plugin for Gasket',
  hooks: {
    create,
    createServers,
    actions(gasket) {
      return {
        async startServers() {
          const servers = await gasket.execWaterfall('createServers');
          return servers;
        },
        async stopServers() {
          console.log('Hono plugin stopServers');
        }
      }
    }
  },
}

export default plugin;