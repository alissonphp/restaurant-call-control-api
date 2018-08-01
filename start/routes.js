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
    Route.resource('users', 'UserController').apiOnly()
    Route.post('restaurants/tables', 'RestaurantController.addTable').as('restaurants.table.add')
    Route.delete('restaurants/tables/:id', 'RestaurantController.deleteTable').as('restaurants.table.delete')
    Route.resource('restaurants', 'RestaurantController').apiOnly()
    Route.resource('categories', 'MenuCategoryController').apiOnly()
    Route.resource('items', 'MenuItemController').apiOnly()
    Route.resource('events', 'EventController').apiOnly()
    Route.resource('points', 'UserPointController').apiOnly()
  })
  .prefix('api/v1')
  .namespace('Api/v1')
  .middleware(['auth', 'acl:admin'])

Route.group(
  () => {
    Route.get('restaurants/tables/qrcode/:id', 'RestaurantController.qrcode').as('restaurants.table.qrcode')
  })
  .prefix('drive')
  .namespace('Api/v1')