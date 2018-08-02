'use strict'

const Factory = use('Factory')

class EventSeeder {
  async run() {

    const restaurant = await Factory
      .model('App/Models/Restaurant')
      .create()

    const event = await Factory
      .model('App/Models/Event')
      .make()

    await restaurant.events().save(event)

    console.log('events table seeder successfully')
  }
}

module.exports = EventSeeder
