'use strict'

var app = require('koa')()
var router = require('koa-router')()

router.get('/root', function* (next) {
  this.body = 'mock-serviceroot-response'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)
