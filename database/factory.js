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

Factory.blueprint('App/Models/Restaurant', async (faker) => {
  return {
    name: faker.word(),
    address: faker.address(),
    email: faker.email(),
    telephone: faker.phone(),
    logo: faker.avatar(),
    active: faker.bool()
  }
})

Factory.blueprint('App/Models/RestaurantTables', async (faker) => {
  return {
    identifier: faker.natural({ min: 1, max: 30 }),
    active: faker.bool()
  }
})
