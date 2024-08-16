import gasket from "./gasket";

const servers = await gasket.actions.startServers();

export default servers.handler;