'use strict'

const Route = use('Route')

Route.post('restaurants/tables', 'Restaurant/RestaurantController.addTable').as('restaurants.table.store')
Route.delete('restaurants/:id/tables', 'Restaurant/RestaurantController.deleteTable').as('restaurants.table.delete')
Route.get('restaurants/:id/categories', 'Restaurant/CategoryController.list').as('restaurants.category.list')
Route.post('restaurants/:id/categories', 'Restaurant/CategoryController.store').as('restaurants.category.store')
Route.get('restaurants/:id/events', 'EventController.index').as('restaurants.events.list')
Route.resource('restaurants', 'Restaurant/RestaurantController').apiOnly()