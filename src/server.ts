import Fastify from 'fastify';
import cors from '@fastify/cors'
import { appRoutes } from './routes';

const app = Fastify();

app.register(cors)
app.register(appRoutes)

app.get('/', () => {
  return 'Hello world!';
})

app.listen({
  port: 3336,
}).then(() => {
  console.log('listening on port 3336')
})
