'use strict'

const Category = use('App/Models/MenuCategory')
const Item = use('App/Models/MenuItem')

class CategoryController {
    async list({ params }) {
        return await Category
            .query()
            .where('restaurants_id', params.id)
            .fetch()
    }

    async items({ params }) {
        return await Item
            .query()
            .where('menu_categories_id', params.id)
            .fetch()
    }
}

module.exports = CategoryController