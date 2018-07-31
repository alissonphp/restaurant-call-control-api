'use strict'

class CallController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = CallController
