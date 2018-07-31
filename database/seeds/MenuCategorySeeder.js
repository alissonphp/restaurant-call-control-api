'use strict'

const Factory = use('Factory')

class MenuCategorySeeder {
  async run () {
    await Factory
      .model('App/Models/MenuCategory')
      .createMany('6')

      console.log('menu_categories table seeder successfully')
  }
}

module.exports = MenuCategorySeeder
