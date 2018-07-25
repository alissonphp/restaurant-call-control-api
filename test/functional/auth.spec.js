'use strict'

const { test, trait } = use('Test/Suite')('Auth')
const User = use('App/Models/User')
trait('Test/ApiClient')

test('user login with credentials', async ({ client }) => {
  await User.create({
    username: 'test',
    password: 'test',
    email: 'test@test.com',
    role: 'client',
    cpf: '123123123'
  })
  const response = await client
    .post('api/v1/auth/login')
    .send({
      email: 'test@test.com',
      password: 'test'
    })
    .end()

  response.assertStatus(200)
  response.assertJSONSubset({
    type: "bearer"
  })
})

test('user login with credentials (wrong password)', async ({ client }) => {
  await User.create({
    username: 'test1',
    password: 'test1',
    email: 'test1@test.com',
    role: 'client',
    cpf: '1231231231'
  })
  const response = await client
    .post('api/v1/auth/login')
    .send({
      email: 'test1@test.com',
      password: 'test'
    })
    .end()

  response.assertStatus(401)
  response.assertError([
    {
      field: 'password',
      message: 'Invalid user password'
    }
  ])
})

test('user login with credentials (email not found)', async ({ client }) => {
  await User.create({
    username: 'test2',
    password: 'test2',
    email: 'test2@test.com',
    role: 'client',
    cpf: '1231231232'
  })
  const response = await client
    .post('api/v1/auth/login')
    .send({
      email: 'testx@test.com',
      password: 'test2'
    })
    .end()

  response.assertStatus(401)
  response.assertError([
    {
      field: 'email',
      message: 'Cannot find user with provided email'
    }
  ])
})