import jsonServer from 'json-server';  // Import json-server
import cors from 'cors';  // Import the cors package

const server = jsonServer.create();  // Create a new server instance
const router = jsonServer.router('db.json');  // Connect to the db.json file
const middlewares = jsonServer.defaults();  // Use default middlewares (logger, static files)

server.use(cors());  // Enable CORS to allow requests from different domains
server.use(middlewares);  // Use default middlewares

server.use(router);  // Use the router for the db.json data

server.listen(3000, () => {
  console.log('JSON Server is running on http://0.0.0.0:3000');
});

