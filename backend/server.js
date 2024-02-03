import server from './app.js';
import { ConnectDB } from './config/db.js';

server.listen(3000, () => {
  console.log('Server is listening on the port 3000');
  ConnectDB;
});
