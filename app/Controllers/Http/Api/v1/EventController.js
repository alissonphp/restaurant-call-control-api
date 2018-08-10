'use strict'

const Event = use('App/Models/Event')
const base64 = use('base64-img')
const Helpers = use('Helpers')
const path = use('path')

/**
 * Resourceful controller for interacting with events
 */
class EventController {

  async upload(data) {
    const fileName = Date.now()
    const image = await base64.imgSync(data, Helpers.tmpPath('events'), fileName)
    const file = await path.parse(image)
    return fileName + file.ext
  }

  /**
   * Show a list of all events.
   * GET events
   */
  async index({ params }) {
    return await Event
      .query()
      .where('restaurants_id', params.id)
      .fetch()
  }

  /**
   * Create/save a new event.
   * POST events
   */
  async store({ request, response }) {
    const event = await new Event()
    event.restaurants_id = request.input('restaurants_id')
    event.event = request.input('event')
    event.description = request.input('description')
    event.datetime = request.input('datetime')
    event.ticket = request.input('ticket')
    event.price = request.input('price')
    event.active = request.input('active')
    if (request.input('file') !== '') {
      return request.input('file')
      event.cover = await this.upload(request.input('file'))
    }
    await event.save()
    return response.send({ message: 'success' })
  }

  /**
   * Display a single event.
   * GET events/:id
   */
  async show({ params }) {
    return await Event.findOrFail(params.id)
  }

  /**
   * Update event details.
   * PUT or PATCH events/:id
   */
  async update({ params, request, response }) {
    const event = await Event.findOrFail(params.id)
    event.event = request.input('event')
    event.description = request.input('description')
    event.datetime = request.input('datetime')
    event.ticket = request.input('ticket')
    event.price = request.input('price')
    event.active = request.input('active')
    if (request.input('file') !== '') {
      event.cover = await this.upload(request.input('file'))
    }
    await event.save()
    return response.send({message: 'success'})
  }

  /**
   * Delete a event with id.
   * DELETE events/:id
   */
  async destroy({ params, response }) {
    const event = await Event.findOrFail(params.id)
    await event.delete()

    return response.send({ message: 'success' })
  }

  async image({ params, response }) {
    const event = await Event.findOrFail(params.id)
    await response.download(Helpers.tmpPath('events/' + event.cover))
  }

}

module.exports = EventController
