'use strict'

const UserPoint = use('App/Models/UserPoint')

/**
 * Resourceful controller for interacting with userpoints
 */
class UserPointController {
  /**
   * Show a list of all userpoints.
   * GET userpoints
   */
  async index () {
    return UserPoint.all()
  }

  /**
   * Create/save a new userpoint.
   * POST userpoints
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single userpoint.
   * GET userpoints/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update userpoint details.
   * PUT or PATCH userpoints/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a userpoint with id.
   * DELETE userpoints/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserPointController
