'use strict'

class ACL {
  async handle({ request, response, auth }, next, role) {
    const user = await auth.getUser()
    if (user.role != role)
      return response
        .status(401)
        .send({
          error: 'access denied to this content',
          role: user.role
        })
    await next()
  }
}

module.exports = ACL
