'use strict'

const Item = use('App/Models/MenuItem')
/**
 * Resourceful controller for interacting with menuitems
 */
class MenuItemController {
  /**
   * Show a list of all menuitems.
   * GET menuitems
   */
  async index () {
  }


  /**
   * Create/save a new menuitem.
   * POST menuitems
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single menuitem.
   * GET menuitems/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update menuitem details.
   * PUT or PATCH menuitems/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a menuitem with id.
   * DELETE menuitems/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MenuItemController
