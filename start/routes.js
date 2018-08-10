'use strict'

const Route = use('Route')

require('../app/Routes/auth')
require('../app/Routes/drive')

Route.group(
  () => {
    require('../app/Routes/users')
    require('../app/Routes/restaurants')
    require('../app/Routes/categories')
    require('../app/Routes/events')
    require('../app/Routes/items')
    require('../app/Routes/points')
  })
  .prefix('api/v1')
  .namespace('Api/v1')
  .middleware(['auth', 'acl:admin'])