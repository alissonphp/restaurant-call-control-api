'use strict'

const Schema = use('Schema')

class MenuItemSchema extends Schema {
  up () {
    this.create('menu_items', (table) => {
      table.increments()
      table.integer('menu_categories_id').unsigned()
      table.foreign('menu_categories_id').references('id').inTable('menu_categories').onDelete('CASCADE')
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.string('photo').nullable()
      table.float('price').notNullable()
      table.integer('serves').notNullable()
      table.boolean('shrimp').notNullable()
      table.boolean('chili').notNullable()
      table.enu('chili_level', [1,2,3]).nullable()
      table.boolean('active').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('menu_items')
  }
}

module.exports = MenuItemSchema
