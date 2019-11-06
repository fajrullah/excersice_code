'use strict'
const Penulis = require('../models/Penulis')

class handlerPenulis {
    constructor(obj){
        this.req = obj
    }
    setPenulis = async (obj) => {
        this.req = obj
      };
    getAllPenulis = async () => {
        return await Penulis.findAll();
      };
    createPenulis = async () => { 
        return await Penulis.create(this.req.body);
    };
    updatePenulis  = async (obj) => {
        const { id, ...rest } = this.req.body
        return await Penulis.update({...rest},
                         { returning: true, plain: true, where: {id: id } })
                        .then(update => update)
                        .catch(error => error)
    };
    deletePenulis = async (obj) => {
        const { id, ...rest } = this.req.body
        return await Penulis.destroy({where: {id : id}})
            .then(affectedRow => affectedRow)
            .catch(error => console.log(error))
    };

}


module.exports = handlerPenulis