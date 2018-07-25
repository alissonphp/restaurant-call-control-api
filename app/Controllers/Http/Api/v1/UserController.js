'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

/**
 * Rules to validate User data
 */
const rules = {
  username: 'required',
  email: 'required|email|unique:users,email',
  password: 'required',
  cpf: 'required|unique:users,cpf',
  role: 'required|in:admin,client,customer_service,manager'
}

/**
 * Validation error messages
 */
const messages = {
  'username.required': 'Informe um nome de usuário',
  'email.required': 'Informe um e-mail',
  'email.email': 'Informe um e-mail válido',
  'email.unique': 'E-mail informado já em uso',
  'password.required': 'Informe uma senha.',
  'cpf.required': 'Informe um CPF',
  'cpf.unique': 'CPF informado já em uso',
  'role.required': 'Informe a regra de acesso do usuário',
  'role.in': 'Informe uma regra permitida',
}

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   */
  async index() {
    return await User.all()
  }

  /**
   * Create/save a new user.
   * POST users
   */
  async store({ request, response }) {
    const data = request.only(
      [
        "username",
        "email",
        "password",
        "cpf",
        "role"
      ]
    )
    const validation = await validate(data, rules, messages)

    if (validation.fails()) {
      return response
        .send(validation.messages())
    }

    const user = await User.create(data)
    return user
  }

  /**
   * Display a single user.
   * GET users/:id
   */
  async show({ params, request, response, view }) {

    const user = await User.findOrFail(params.id)
    return user
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   */
  async update({ params, request, response }) {
    const user = await User.findOrFail(params.id)
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   */
  async destroy({ params, request, response }) {

    const user = await User.findOrFail(params.id)
    await user.delete()

    return response.send({ message: 'success' })
  }
}

module.exports = UserController
