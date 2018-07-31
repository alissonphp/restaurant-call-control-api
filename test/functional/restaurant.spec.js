'use strict'

const { test, trait } = use('Test/Suite')('Restaurant')

const Restaurant = use('App/Models/Restaurant')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')

test('create new restaurant (success)', async ({ client }) => {

  const data = {
    name: 'restaurant test',
    email: 'newusertest@test.com',
    address: 'test',
    active: true,
    telephone: '12345678912'
  }

  const user = await User.create({
    username: 'newuseradminrest',
    password: 'test',
    email: 'newuseradminrest@test.com',
    role: 'admin',
    cpf: '1234567811166'
  })

  const response = await client
    .post('api/v1/restaurants')
    .send(data)
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(200)
  response.assertJSONSubset(data)

})

test('create new restaurant (validation error)', async ({ client }) => {

  const data = {
    email: 'newusertest2@test.com',
    address: 'test',
    active: true,
    telephone: '12345678911'
  }

  const user = await User.create({
    username: 'newuseradminresterror',
    password: 'test',
    email: 'newuseradminresterror@test.com',
    role: 'admin',
    cpf: '1234567811168'
  })

  const response = await client
    .post('api/v1/restaurants')
    .send(data)
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(400)
  response.assertJSONSubset(
    [
      {
        "message": "Informe o nome do Restaurante",
        "field": "name",
        "validation": "required"
      }
    ]
  )

})