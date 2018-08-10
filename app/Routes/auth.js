'use strict'

const Route = use('Route')


Route.group(
    () => {
        Route.post('login', 'AuthController.login')
    })
    .prefix('api/v1/auth')
    .namespace('Api/v1/Auth')