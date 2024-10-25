import { createServer } from 'http';
import { Server } from 'socket.io';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server running on http://localhost:3000');
  });
});