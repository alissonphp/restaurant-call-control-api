'use strict'

const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.integer('restaurants_id').unsigned()
      table.foreign('restaurants_id').references('id').inTable('restaurants')
      table.string('event').notNullable()
      table.text('description').nullable()
      table.string('cover').nullable()
      table.datetime('datetime').notNullable()
      table.boolean('ticket').notNullable()
      table.float('price').nullable()
      table.boolean('active').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
