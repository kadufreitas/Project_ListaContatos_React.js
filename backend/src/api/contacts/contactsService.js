const Contact = require('./contacts')

Contact.methods(['get','post','put','delete'])
Contact.updateOptions({new:true,runValidators:true})

module.exports = Contact