var mongoose= require('mongoose');

var Schema = mongoose.Schema;
var entrepriseSchema = new Schema({
  nom: {type: String, unique: true, required : true},
  tel: Number,
  logo: String,
  annee_fondation: Number,
  site_web: String,
  chiffre_d_affaires: Number,
  domaine: String,
  sites: [
    {site_id: {type: Schema.Types.ObjectId, ref: 'Site'}}
  ]

});

module.exports = mongoose.model('Entreprise', entrepriseSchema);
