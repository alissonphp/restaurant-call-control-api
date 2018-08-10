'use strict'

const Item = use('App/Models/MenuItem')
const base64 = use('base64-img')
const Helpers = use('Helpers')
const path = use('path')

/**
 * Resourceful controller for interacting with menuitems
 */
class MenuItemController {
  /**
   * Show a list of all menuitems.
   * GET menuitems
   */
  async index() {
  }


  /**
   * Create/save a new menuitem.
   * POST menuitems
   */
  async store({ request, response }) {
    const item = await new Item()
    const fileName = Date.now()

    item.menu_categories_id = request.input('menu_categories_id')
    item.title = request.input('title')
    item.description = request.input('description')
    item.price = request.input('price')
    item.serves = request.input('serves')
    item.chili = request.input('chili')
    item.chili_level = request.input('chili_level')
    item.shrimp = request.input('shrimp')
    item.active = request.input('active')

    const image = await base64.imgSync(request.input('file'), Helpers.tmpPath('items'), fileName)
    const file = await path.parse(image)

    item.photo = fileName + file.ext

    await item.save()
    return response.send(item)
  }

  async upload(data) {
    const fileName = Date.now()
    const image = await base64.imgSync(data, Helpers.tmpPath('items'), fileName)
    const file = await path.parse(image)

    return fileName + file.ext

  }

  /**
   * Display a single menuitem.
   * GET menuitems/:id
   */
  async show({ params }) {
    return await Item.find(params.id)
  }

  /**
   * Update menuitem details.
   * PUT or PATCH menuitems/:id
   */
  async update({ params, request, response }) {

    const item = await Item.findOrFail(params.id)
    item.title = request.input('title')
    item.description = request.input('description')
    item.price = request.input('price')
    item.serves = request.input('serves')
    item.chili = request.input('chili')
    item.chili_level = request.input('chili_level')
    item.shrimp = request.input('shrimp')
    item.active = request.input('active')

    if(request.input('file') !== '') { 
      item.photo = await this.upload(request.input('file'))
    }

    await item.save()

    return response.send(item)
  }

  /**
   * Delete a menuitem with id.
   * DELETE menuitems/:id
   */
  async destroy({ params, request, response }) {
    const item = await Item.findOrFail(params.id)
    await item.delete()

    return response.send({ message: 'success' })
  }

  async image({ params, request, response }) {
    const item = await Item.findOrFail(params.id)
    await response.download(Helpers.tmpPath('items/' + item.photo))
  }
}

module.exports = MenuItemController
