var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var siteSchema = new Schema({
  nom: String,
  adresse: {type: String, unique: true, required : true},
  tel: Number,
  pays: String,
  region: String,
  ville: String,
  contacts[{
    nom: String,
    prenom: String,
    poste: String,
    tel: {type: Number, unique: true},
    email: {type: String, unique: true, required : true}
  }]
});

module.exports = mongoose.model('Site', siteSchema);
