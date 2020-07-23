'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} User */
const User = use('App/Models/User')

class UserController {
    /**
     * @param {object} ctx
     * @param {AuthSession} ctx.auth
     * @param {Request} ctx.request
     * @param {View} ctx.view
     */
    async signup({auth, request, view}) {
        const {email, password} = request.only(['email', 'password']);
        const newUser = await User.create({email, password});

        const token = await auth.generate(newUser);
        return token

    }

    /**
     * @param {object} ctx
     * @param {AuthSession} ctx.auth
     * @param {Request} ctx.request
     * @param {View} ctx.view
     */
    async login({auth, request, view, response}) {
        const {email, password} = request.only(['email', 'password']);
        console.log({email, password})
        try {
            const user = await auth.validate(email, password, true);
            return auth.generate(user)
        } catch (error) {
            return response.status(401).send('Invalid credentials')
        }

    }

    async me({auth}) {
        const user = await auth.getUser()
        return user;
    }
}
module.exports = UserController
