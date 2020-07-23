'use strict'





/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} User */
const User = use('App/Models/User');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} Todo */
const Todo = use('App/Models/TOdo');

class TodoController {

    /**
     * @param {object} ctx
     * @param {AuthSession} ctx.auth
     * @param {Request} ctx.request
     * @param {View} ctx.view
     */
    async get({auth}) {
        const user = await auth.getUser();
        const todos = await user.todos().fetch();
        return todos
    }

    /**
     * @param {object} ctx
     * @param {AuthSession} ctx.auth
     * @param {Request} ctx.request
     * @param {View} ctx.view
     */
    async create({request, auth}) {
        const {text} = request.only(['text'])
        const user = await auth.getUser();

        const todo = await user.todos().create({text});
        return todo
    }
    /**
     * @param {object} ctx
     * @param {AuthSession} ctx.auth
     * @param {Request} ctx.request
     * @param {View} ctx.view
     */
    async update({request, auth}) {
        const {id, completed} = request.only(['id', 'completed'])
        const user = await auth.getUser();
        return await user.todos().where('id', id).update({completed});
    }
    /**
     * @param {object} ctx
     * @param {AuthSession} ctx.auth
     * @param {Request} ctx.request
     * @param {View} ctx.view
     */
    async delete({params, auth}) {
        const {id} = params
        const user = await auth.getUser();
        const todo = await user.todos().where('id', id).delete();
        return todo
    }
}

module.exports = TodoController
