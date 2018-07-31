'use strict'

const Factory = use('Factory')
const Restaurant = use('App/Models/Restaurant')

class EventSeeder {
  async run () {

    const restaurant = await Restaurant.first()

    await Factory
    .model('App/Models/Event')
    .createMany(8, 
      {
        restaurants_id: restaurant.id
      }
    )

    console.log('events table seeder successfully')
  }
}

module.exports = EventSeeder
