var mongoose= require('mongoose');

var Schema = mongoose.Schema;
var etudiantSchema = new Schema({
  nom: String,
  prenom: String,
  date_naissance : Date,
  sexe: String,
  email: {type: String, unique: true, required : true},
  tel: Number,
  branche: String,
  filiere: String,

});

module.exports = mongoose.model('Etudiant', etudiantSchema);
