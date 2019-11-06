const Sequelize = require('sequelize')
const Kategori = require('./Kategori')
const Penulis = require('./Penulis')
const db = require('../database/db.js')

const Buku = db.sequelize.define(
  'buku',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    buku_name: {
      type: Sequelize.STRING
    },
    buku_desc: {
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
Buku.belongsTo(Kategori, {as: 'kategori'}) 
Buku.belongsTo(Penulis, {as: 'penulis'}) 
module.exports = Buku
Buku.sync()
  .then(() => console.log('Buku'))
  .catch(err => console.log('‘BTW, did you enter wrong database credentials?’'));

  