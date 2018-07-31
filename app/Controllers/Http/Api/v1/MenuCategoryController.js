'use strict'

/**
 * Resourceful controller for interacting with menucategories
 */
class MenuCategoryController {
  /**
   * Show a list of all menucategories.
   * GET menucategories
   */
  async index ({ request, response, view }) {
  }

  /**
   * Create/save a new menucategory.
   * POST menucategories
   */
  async store ({ request, response }) {
  }

    /**
   * Display a single menuitem.
   * GET menucategories/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update menucategory details.
   * PUT or PATCH menucategories/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a menucategory with id.
   * DELETE menucategories/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MenuCategoryController
