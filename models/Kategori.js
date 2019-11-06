const Sequelize = require('sequelize')
const db = require('../database/db.js')

const Kategori = db.sequelize.define(
  'kategori',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    kategori_name: {
      type: Sequelize.STRING
    },
    kategori_desc: {
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

module.exports = Kategori
Kategori.sync()
  .then(() => console.log('Kategori'))
  .catch(err => console.log('‘BTW, did you enter wrong database credentials?’'));

  