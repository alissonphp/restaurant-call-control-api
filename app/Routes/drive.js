'use strict'

const Route = use('Route')

Route.group(
    () => {
        Route.get('restaurants/tables/qrcode/:id', 'Restaurant/RestaurantController.qrcode').as('restaurants.table.qrcode')
        Route.get('restaurants/menus/items/:id', 'MenuItemController.image').as('menus.item.image')
        Route.get('restaurants/events/cover/:id', 'EventController.image').as('events.cover.image')
    })
    .prefix('drive')
    .namespace('Api/v1')