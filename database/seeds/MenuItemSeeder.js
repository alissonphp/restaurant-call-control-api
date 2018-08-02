'use strict'

const Factory = use('Factory')

class MenuItemSeeder {
  async run() {

    const category = Factory
      .model('App/Models/MenuCategory')
      .create()

    const item = await Factory
      .model('App/Models/MenuItem')
      .make()

    await category.items().save(item)

    console.log('menu_items table seeder successfully')
  }
}

module.exports = MenuItemSeeder
