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
    Route.post('restaurants/tables', 'Restaurant/RestaurantController.addTable').as('restaurants.table.add')
    Route.delete('restaurants/:id/tables', 'Restaurant/RestaurantController.deleteTable').as('restaurants.table.delete')
    Route.get('restaurants/:id/categories', 'Restaurant/CategoryController.list').as('restaurants.category.list')
    Route.resource('restaurants', 'Restaurant/RestaurantController').apiOnly()
    Route.get('categories/:id/items', 'Restaurant/CategoryController.items').as('restaurants.category.items')
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