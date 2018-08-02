'use strict'

const Factory = use('Factory')

class MenuCategorySeeder {
  async run() {
    
    const restaurant = await Factory
      .model('App/Models/Restaurant')
      .create()

    const category = await Factory
      .model('App/Models/MenuCategory')
      .make()

    await restaurant.categories().save(category)

    console.log('menu_categories table seeder successfully')
  }
}

module.exports = MenuCategorySeeder
