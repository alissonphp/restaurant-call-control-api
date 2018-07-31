'use strict'

const Factory = use('Factory')
const Restaurant = use('App/Models/Restaurant')
const MenuCategory = use('App/Models/MenuCategory')

class MenuItemSeeder {
  async run() {
    const restaurant = await Restaurant.first()
    const category = await MenuCategory.first()

    await Factory
      .model('App/Models/MenuItem')
      .createMany(8, 
        {
          restaurants_id: restaurant.id,
          categories_id: category.id
        }
      )

    console.log('menu_items table seeder successfully')
  }
}

module.exports = MenuItemSeeder
