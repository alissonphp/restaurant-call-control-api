'use strict'

const Restaurant = use('App/Models/Restaurant')
const RestaurantTable = use('App/Models/RestaurantTables')
const { validate } = use('Validator')
const QRCode = use('qrcode')
const Helpers = use('Helpers')

/**
 * Rules to validate User data
 */
const rules = {
  name: 'required',
  email: 'email|unique:restaurants,email',
  active: 'required|boolean',
}

/**
 * Validation error messages
 */
const messages = {
  'name.required': 'Informe o nome do Restaurante',
  'email.email': 'Informe um e-mail válido',
  'email.unique': 'E-mail informado já em uso',
  'active.required': 'Indique o status do restaurante: ativo ou inativo',
  'active.boolean': 'Status do restaurante deve ser do tipo boolean: true|false',
}

/**
 * Resourceful controller for interacting with restaurants
 */
class RestaurantController {
  /**
   * Show a list of all restaurants.
   * GET restaurants
   */
  async index() {
    return await Restaurant.all()
  }

  /**
   * Create/save a new restaurant.
   * POST restaurants
   */
  async store({ request, response }) {
    const data = request.all()
    const validation = await validate(data, rules, messages)

    if (validation.fails()) {
      return response
        .status(400)
        .send(validation.messages())
    }

    const restaurant = await Restaurant.create(data)
    return restaurant
  }

  /**
   * Display a single restaurant.
   * GET restaurants/:id
   */
  async show({ params, request, response, view }) {
    const restaurant = await Restaurant.findOrFail(params.id)
    await restaurant.load('tables')

    return restaurant
  }

  /**
   * Update restaurant details.
   * PUT or PATCH restaurants/:id
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a restaurant with id.
   * DELETE restaurants/:id
   */
  async destroy({ params, request, response }) {
    const restaurant = await Restaurant.findOrFail(params.id)
    await restaurant.delete()

    return response.send({ message: 'success' })
  }

  /**
   * Add tables to restaurant
   * POST restaurants/tables
   */
  async addTable({ request, response }) {
    const restaurant = await Restaurant.findOrFail(request.input('restaurants_id'))
    const table = await restaurant
      .tables()
      .create(request.all())
    const imgname = Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8) + '.png'
    await QRCode.toFile(Helpers.tmpPath('qrs') + '/' + imgname, request.input('identifier'), {
      width: 2048,
      color: {
        light: '#0000'
      }
    }, (err) => {
      if (err) throw err
    })

    table.qrcode_image = imgname
    table.save()

    return table
  }

  /**
   * Download qrcode image/png 2048x2048 pixels
   * GET restaurants/table/qrcode/:id
   */

  async qrcode({ params, request, response }) {
    const table = await RestaurantTable.findOrFail(params.id)
    await response.download(Helpers.tmpPath('qrs/'+table.qrcode_image))
  }
}

module.exports = RestaurantController
