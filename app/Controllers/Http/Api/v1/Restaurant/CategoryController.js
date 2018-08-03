'use strict'

const Category = use('App/Models/MenuCategory')
const Item = use('App/Models/MenuItem')

class CategoryController {

    async store({ request, response }) {
        await Category.create(request.all())
        return response.send({
            message: 'success'
        })
    }

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

    async update({ request, response, params }) {
        const category = await Category.find(params.id)
        category.category = request.input('category')
        await category.save()
        return response.send({
            message: 'success'
        })
    }

    async status({ request, response, params }) {
        const category = await Category.find(params.id)
        category.active = request.input('active')
        await category.save()
        return response.send({
            message: 'success'
        })
    }

    async delete({ params, response }) {
        const category = await Category.find(params.id)
        await category.delete()
        return response.send({
            message: 'success'
        })
    }

}

module.exports = CategoryController