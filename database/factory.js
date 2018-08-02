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

Factory.blueprint('App/Models/MenuCategory', async (faker) => {
  return {
    category: faker.word()
  }
})

Factory.blueprint('App/Models/MenuItem', async (faker, i, data) => {
  return {
    title: faker.sentence(),
    description: faker.paragraph(),
    photo: faker.avatar(),
    price: faker.floating({ min: 0, max: 160 }),
    serves: faker.natural({ min: 1, max: 5 }),
    shrimp: faker.bool(),
    chili: faker.bool(),
    chili_level: faker.natural({ min: 1, max: 3 }),
    active: faker.bool(),
  }
})

Factory.blueprint('App/Models/Event', async (faker, i, data) => {
  return {
    restaurants_id: data.restaurants_id,
    event: faker.sentence(),
    description: faker.paragraph(),
    cover: faker.avatar(),
    datetime: faker.date(),
    price: faker.floating({ min: 0, max: 80 }),
    ticket: faker.bool(),
    active: faker.bool()
  }
})

Factory.blueprint('App/Models/UserPoint', async (faker, i, data) => {
  return {
    user_id: data.user_id,
    operation: faker.pickone(
      [
        'input',
        'output'
      ]
    ),
    points: faker.floating({ min: -80, max: 80 }),
    consumption: faker.floating({ min: 30, max: 380 }),
    obs: faker.paragraph()
  }
})