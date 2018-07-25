'use strict'

const { trait, test } = use('Test/Suite')('User')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')

test('create new user (authenticated)', async ({ client }) => {
  const user = await User.create({
    username: 'newuseradmin',
    password: 'test',
    email: 'newuseradmin@test.com',
    role: 'admin',
    cpf: '12345678111'
  })
  const response = await client
    .post('api/v1/users')
    .send({
      username: 'newusertest',
      email: 'newusertest@test.com',
      password: 'test',
      role: 'client',
      cpf: '12345678912'
    })
    .loginVia(user, 'jwt')
    .end()

  response.assertStatus(200)
})

test('list of users (authenticated)', async ({ client }) => {
  const user = await User.create({
    username: 'newuseradmin1',
    password: 'test',
    email: 'newuseradmin1@test.com',
    role: 'admin',
    cpf: '12345678112'
  })
  const response = await client
    .get('api/v1/users')
    .loginVia(user)
    .end()

  response.assertStatus(200)
})

test('list of users (access denied)', async ({ client }) => {
  const user = await User.create({
    username: 'client',
    password: 'client',
    email: 'client@test.com',
    role: 'client',
    cpf: '12345678114'
  })
  const response = await client
    .get('api/v1/users')
    .loginVia(user)
    .end()

  response.assertStatus(401)
  response.assertError({
    error: 'access denied to this content',
    role: 'client'
  })
})
