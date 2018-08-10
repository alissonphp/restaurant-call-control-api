'use strict'

const Route = use('Route')

Route.resource('users', 'UserController').apiOnly()