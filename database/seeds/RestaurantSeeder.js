'use strict'

const Factory = use('Factory')

class RestaurantSeeder {
  async run() {
    const restaurant = await Factory
      .model('App/Models/Restaurant')
      .create()

    const table = await Factory
      .model('App/Models/RestaurantTables')
      .make()

    await restaurant.tables().save(table)
    console.log('restaurants table seeder and add table to item successfully')
  }
}

module.exports = RestaurantSeeder
