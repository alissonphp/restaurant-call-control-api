'use strict'

const Model = use('Model')

class MenuItem extends Model {
    category() {
        return this.belongsTo('App/Models/MenuCategory', 'id', 'menu_categories_id')
    }
}

module.exports = MenuItem
