import { makeGasket } from '@gasket/core';
import pluginLogger from '@gasket/plugin-logger';
import pluginMetadata from '@gasket/plugin-metadata';
import pluginCommand from '@gasket/plugin-command';
import pluginDocs from '@gasket/plugin-docs';
import pluginDocusaurus from '@gasket/plugin-docusaurus';
import pluginData from '@gasket/plugin-data';
import pluginSwagger from '@gasket/plugin-swagger';
import pluginWinston from '@gasket/plugin-winston';
import gasketData from './gasket.data';
import pluginHono from './plugin-hono';
import { routes } from './routes';
import { type GasketConfigDefinition } from '@gasket/core';

export default makeGasket({
  plugins: [
    pluginData,
    pluginSwagger,
    pluginWinston,
		pluginLogger,
		pluginMetadata,
		pluginCommand,
		pluginDocs,
		pluginDocusaurus,
    pluginHono
  ],
  filename: import.meta.filename,
  data: gasketData,
  routes: routes
} as GasketConfigDefinition);
