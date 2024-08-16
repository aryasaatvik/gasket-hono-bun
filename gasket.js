import { makeGasket } from '@gasket/core';
import pluginLogger from '@gasket/plugin-logger';
import pluginMetadata from '@gasket/plugin-metadata';
import pluginCommand from '@gasket/plugin-command';
import pluginDocs from '@gasket/plugin-docs';
import pluginDocusaurus from '@gasket/plugin-docusaurus';

export default makeGasket({
  plugins: [
		pluginLogger,
		pluginMetadata,
		pluginCommand,
		pluginDocs,
		pluginDocusaurus
  ],
  filename: import.meta.filename,
});
