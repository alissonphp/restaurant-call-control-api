'use strict'

const Event = use('App/Models/Event')

/**
 * Resourceful controller for interacting with events
 */
class EventController {
  /**
   * Show a list of all events.
   * GET events
   */
  async index () {
    return await Event.all()
  }

  /**
   * Create/save a new event.
   * POST events
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single event.
   * GET events/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update event details.
   * PUT or PATCH events/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a event with id.
   * DELETE events/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = EventController
