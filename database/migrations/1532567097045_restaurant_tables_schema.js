'use strict'

const Schema = use('Schema')

class RestaurantTablesSchema extends Schema {
  up () {
    this.create('restaurant_tables', (table) => {
      table.increments()
      table.integer('restaurants_id').unsigned()
      table.foreign('restaurants_id').references('id').inTable('restaurants')
      table.string('identifier', 30).notNullable()
      table.boolean('active').default(false)
      table.timestamps()
    })
  } 

  down () {
    this.drop('restaurant_tables')
  }
}

module.exports = RestaurantTablesSchema
