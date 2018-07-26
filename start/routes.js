'use strict'

const Route = use('Route')

Route.group(
  () => {
    Route.post('login', 'AuthController.login')
  })
  .prefix('api/v1/auth')
  .namespace('Api/v1/Auth')

Route.group(
  () => {
    Route.resource('users', 'UserController')
    Route.resource('restaurants', 'RestaurantController')
  })
  .prefix('api/v1')
  .namespace('Api/v1')
  .middleware(['auth', 'acl:admin'])
