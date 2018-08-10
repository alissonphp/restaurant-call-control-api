'use strict'

const Route = use('Route')

Route.get('categories/:id/items', 'Restaurant/CategoryController.items').as('restaurants.category.items')
Route.delete('categories/:id', 'Restaurant/CategoryController.delete').as('restaurants.category.delete')
Route.put('categories/:id', 'Restaurant/CategoryController.uenupdate').as('restaurants.category.update')
Route.post('categories/:id/status', 'Restaurant/CategoryController.status').as('restaurants.category.status')