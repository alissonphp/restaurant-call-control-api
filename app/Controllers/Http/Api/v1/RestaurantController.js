'use strict'

const Restaurant = use('App/Models/Restaurant')
const { validate } = use('Validator')

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
        .status(500)
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
    return table
  }
}

module.exports = RestaurantController
