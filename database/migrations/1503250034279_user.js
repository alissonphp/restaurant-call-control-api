'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('cpf', 15).notNullable().unique()
      table.string('profilePic', 254).nullable()
      table.enu('role', ['admin', 'manager', 'customerService', 'client'])
      table.string('provider', 30).nullable()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
