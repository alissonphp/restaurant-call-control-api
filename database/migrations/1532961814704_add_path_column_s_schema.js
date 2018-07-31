'use strict'

const Schema = use('Schema')

class AddPathColumnSSchema extends Schema {
  up() {
    this.table('restaurant_tables', (table) => {
      table.string('qrcode_image')
    })
  }

  down() {
    this.table('restaurant_tables', (table) => {
      table.dropColumn('qrcode_image')
    })
  }
}

module.exports = AddPathColumnSSchema
