import fastify from 'fastify'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as path from 'path'
import serveStatic from 'serve-static'
import { Provider } from 'react-redux'
import store from '../app/store'
import Counter from '../app/counter'
import { Html } from './Html'

const PORT = 3000
const server: fastify.FastifyInstance = fastify()

server.use('/assets', serveStatic(path.join(__dirname, '../public')))

server.get('*', async (_, reply) => {

  const body: string = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Counter />
    </Provider>
  )

  const html: string = ReactDOMServer.renderToString(
    <Html title="counter">
      {body}
    </Html>
  )

  reply
  .header('Content-Type', ['text/html', 'charset=utf-8'])
  .send(`<!doctype html>${html}`);
})

server.listen(PORT, (err) => {
  if (err) {
    console.log('server error: ', err)
  } else {
    console.log(`server listening on ${PORT}`)
  }
})
