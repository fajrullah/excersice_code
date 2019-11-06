'use strict'
const Buku = require('../models/Buku')

class handlerBuku {
    constructor(obj){
        this.req = obj
    }
    setBuku = async (obj) => {
        this.req = obj
      };
    getAllBuku = async () => {
        return await Buku.findAll();
      };
    createBuku = async () => { 
        return await Buku.create(this.req.body);
    };
    updateBuku  = async (obj) => {
        const { id, ...rest } = this.req.body
        return await Buku.update({...rest},
                         { returning: true, plain: true, where: {id: id } })
                        .then(update => update)
                        .catch(error => error)
    };
    deleteBuku = async (obj) => {
        const { id, ...rest } = this.req.body
        return await Buku.destroy({where: {id : id}})
            .then(affectedRow => affectedRow)
            .catch(error => console.log(error))
    };

}


module.exports = handlerBuku