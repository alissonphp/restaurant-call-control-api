'use strict'

const Schema = use('Schema')

class RestaurantSchema extends Schema {
  up () {
    this.create('restaurants', (table) => {
      table.increments()
      table.string('name', 150).notNullable().unique()
      table.text('address').nullable()
      table.string('logo').nullable()
      table.string('telephone').nullable()
      table.string('email').nullable()
      table.boolean('active').default(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('restaurants')
  }
}

module.exports = RestaurantSchema
