'use strict'

const app = require('koa')()
const router = require('koa-router')()
const request = require('request-promise')

router.get('/root', function* (next) {
  const serviceAResponse = yield request.get(process.env.MICROSERVICEA_ENDPOINT + '/service-a')
  const serviceDResponse = yield request.get(process.env.MICROSERVICED_ENDPOINT + '/service-d')
  this.body = '(' + ['local-service-d', serviceAResponse, serviceDResponse].join(',') + ')'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)

console.log('microserviceRoot listening on 3000')
