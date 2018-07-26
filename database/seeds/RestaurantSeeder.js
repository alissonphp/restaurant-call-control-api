'use strict'

/*
|--------------------------------------------------------------------------
| RestaurantSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

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
