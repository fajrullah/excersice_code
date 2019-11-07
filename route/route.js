'use strict'
const handlerPenulis =  require('../handler/handlerPenulis')
const handlerKategori =  require('../handler/handlerKategori')
const handlerBuku =  require('../handler/handlerBuku')
const Penulis = new handlerPenulis() 
const Kategori = new handlerKategori()
const Buku = new handlerBuku()  
module.exports = function(app) {
    app.get('/',function(req, res) {
        res.json({
          status : 'SUCCESS',
          message : 'access client /client'
      })
    });
    /**
     * USER INTERFACE
     */

    /**
     * Data first_name, last_name
     */
    app
      .route('/spec')
      .post( (req, res) => {
        Buku.setBuku(req)
        Buku.detailBuku()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
    app
      .route('/penulis')
      .get((req, res) => {
        Penulis.getAllPenulis()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
      .post( (req, res) => {
        Penulis.setPenulis(req)
        Penulis.createPenulis()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
      .put( (req, res) => {
        Penulis.setPenulis(req)
        Penulis.updatePenulis()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
      .delete( (req, res) => {
        Penulis.setPenulis(req)
        Penulis.deletePenulis()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })

    app
      .route('/kategori')
      .get((req, res) => {
        Kategori.getAllKategori()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
      .post( (req, res) => {
        Kategori.setKategori(req)
        Kategori.createKategori()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
      .put( (req, res) => {
        Kategori.setKategori(req)
        Kategori.updateKategori()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
      .delete( (req, res) => {
        Kategori.setKategori(req)
        Kategori.deleteKategori()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })

    app
      .route('/buku')
      .get((req, res) => {
        Buku.getAllBuku()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
      .post( (req, res) => {
        Buku.setBuku(req)
        Buku.createBuku()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
      .put( (req, res) => {
        Buku.setBuku(req)
        Buku.updateBuku()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
      .delete( (req, res) => {
        Buku.setBuku(req)
        Buku.deleteBuku()
          .then(result => res.json(result))
          .catch(err => console.log(err))
      })
};

