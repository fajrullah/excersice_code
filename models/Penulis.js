const Sequelize = require('sequelize')
const db = require('../database/db.js')


const Penulis = db.sequelize.define(
  'penulis',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
)
module.exports = Penulis
Penulis.sync()
  .then(() => console.log('Penulis'))
  .catch(err => console.log('‘BTW, did you enter wrong database credentials?’'));

  