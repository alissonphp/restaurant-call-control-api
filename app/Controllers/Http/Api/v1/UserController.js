'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')
const Hash = use('Hash')

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

const rulesUpdate = {
  username: 'required',
  email: 'required|email',
  password: 'required',
  cpf: 'required',
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
        .status(500)
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

    const validation = await validate(request.all(), rulesUpdate, messages)

    if (validation.fails()) {
      return response
        .status(500)
        .send(validation.messages())
    }

    const user = await User.findOrFail(params.id)
    user.username = request.input('username')
    user.email = request.input('email')
    user.cpf = request.input('cpf')
    user.role = request.input('role')
    if (request.input('password') !== "") {
      user.password = await Hash.make(request.input('password'))
    }

    user.save()
    return user
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   */
  async destroy({ params, response }) {

    const user = await User.findOrFail(params.id)
    await user.delete()

    return response.send({ message: 'success' })
  }
}

module.exports = UserController
