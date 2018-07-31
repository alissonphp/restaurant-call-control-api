'use strict'

const Factory = use('Factory')
const User = use('App/Models/User')

class UserPointSeeder {
  async run() {
    const user = await User.first()
    await Factory
      .model('App/Models/UserPoint')
      .createMany(8, 
        {
          user_id: user.id
        }
      )

      console.log('user_points table seeder and add table to item successfully')
  }
}

module.exports = UserPointSeeder
