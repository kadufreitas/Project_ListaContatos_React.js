const express = require('express')

module.exports = function (server) {
    
    //API Routes
    const router = express.Router()
    server.use('/api',router)

    //Client routes
    const contactsService = require('../api/contacts/contactsService')
    //const Contacts = require('../api/contacts/contacts')
    contactsService.register(router,'/contacts')

    // router.get('/geral',async (req,res) =>{
    //     try {
    //         const client = await Contacts.find();
    //         return res.send({ client });

    //     } catch (error) {
    //         return res.status(400).send({error: 'Error loading clients'})
    //     }
    // })
}