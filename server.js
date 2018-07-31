'use strict'

const cluster = require('cluster')

if (cluster.isMaster) {
  for (let i=0; i < 4; i ++) {
    cluster.fork()
  }
  require('@adonisjs/websocket/clusterPubSub')()
  return
}

const { Ignitor } = require('@adonisjs/ignitor')

new Ignitor(require('@adonisjs/fold'))
  .appRoot(__dirname)
  .wsServer()
  .fireHttpServer()
  .catch(console.error)
