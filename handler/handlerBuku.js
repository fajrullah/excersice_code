'use strict'
const Buku = require('../models/Buku')
const Penulis = require('../models/Penulis')

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

    detailBuku = async () => {
        return await Buku.findAll({
                where: this.req.body,
                order: [ [ 'buku_name', 'ASC' ]]
            })
            .then(affectedRow => affectedRow)
            .catch(error => console.log(error))
    };

    allBukuByPenulis = async () => {
        return await Buku.findAll({
                include: 'penulis',
                order: [ [ 'buku_name', 'ASC' ]]
            })
            .then(affectedRow => affectedRow)
            .catch(error => console.log(error))
    };
    detailBukuByPenulis = async () => {
        return await Buku.findAll({
            include: [{ 
                model : Penulis,
                as: 'penulis',
                where : this.req.body
                 }],
                order: [ [ 'buku_name', 'ASC' ]]
            })
            .then(affectedRow => affectedRow)
            .catch(error => console.log(error))
    };
}


module.exports = handlerBuku