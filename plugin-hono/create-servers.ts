import type { Gasket } from "@gasket/core";

async function createServers(gasket: Gasket, serverOpts: any) {
  console.log('Hono plugin createServers');
  const { Hono } = require('hono');
  const { config } = gasket;
  const app = new Hono();
  await gasket.exec('hono', app);
  const { routes } = config;
  for (const route of routes) {
    await route(app);
  }
  return {
    ...serverOpts,
    handler: app
  }
}

export default createServers;