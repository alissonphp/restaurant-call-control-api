'use strict'

const Factory = use('Factory')

class UserSeeder {
  async run() {
    const users = await Factory
      .model('App/Models/User')
      .createMany(8)
      console.log('users table seeder successfully')
  }
}

module.exports = UserSeeder
