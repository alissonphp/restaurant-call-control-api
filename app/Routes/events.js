'use strict'

const Route = use('Route')

Route.resource('events', 'EventController').apiOnly()