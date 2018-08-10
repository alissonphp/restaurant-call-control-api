'use strict'

const Route = use('Route')

Route.resource('points', 'UserPointController').apiOnly()