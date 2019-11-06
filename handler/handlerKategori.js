'use strict'
const Kategori = require('../models/Kategori')

class handlerKategori {
    constructor(obj){
        this.req = obj
    }
    setKategori = async (obj) => {
        this.req = obj
      };
    getAllKategori = async () => {
        return await Kategori.findAll();
      };
    createKategori = async () => { 
        return await Kategori.create(this.req.body);
    };
    updateKategori  = async (obj) => {
        const { id, ...rest } = this.req.body
        return await Kategori.update({...rest},
                         { returning: true, plain: true, where: {id: id } })
                        .then(update => update)
                        .catch(error => error)
    };
    deleteKategori = async (obj) => {
        const { id, ...rest } = this.req.body
        return await Kategori.destroy({where: {id : id}})
            .then(affectedRow => affectedRow)
            .catch(error => console.log(error))
    };

}


module.exports = handlerKategori