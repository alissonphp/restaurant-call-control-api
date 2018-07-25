'use strict'

const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    cpf: faker.cpf(),
    profilePic: faker.avatar(),
    role: faker.pickone(
      [
        'admin', 
        'manager', 
        'customerService', 
        'client'
      ]
    ),
    password: '123456',
    provider: faker.word()
  }
})
