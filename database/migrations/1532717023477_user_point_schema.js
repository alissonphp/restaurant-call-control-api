'use strict'

const Schema = use('Schema')

class UserPointSchema extends Schema {
  up () {
    this.create('user_points', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.enu('operation', ['input', 'output']).notNullable()
      table.decimal('points').notNullable()
      table.float('consumption').nullable()
      table.text('obs').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_points')
  }
}

module.exports = UserPointSchema
