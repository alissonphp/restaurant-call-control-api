'use strict'

const Route = use('Route')

Route.resource('items', 'MenuItemController').apiOnly()