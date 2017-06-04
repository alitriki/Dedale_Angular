var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var entretienSchema = new Schema({
  site_id: {
    type: Schema.Types.ObjectId,
    ref: 'Site'
  },
  etudiant_id: {
    type: Schema.Types.ObjectId,
    ref: 'Etudiant'
  },
  duree: Number,
  date: Date,
  condidature_spontanee : Boolean,
  cv : String;
  lettre_motivation : String,
  deroulement : String,
  difficultee: Number,
  appreciation: Number,
  nature_entretien: String,
  type_entretien: String,
  moyen_candidature: String,
  offre_de_stage: {
    proposition: Boolean,
    semestre: String,
    type_stage: String,
    acceptation: Boolean,
    raison: String,
    Salaire: Number,
    avantages[{
      type: String,
      detail: String
    }]
  }
});

module.exports = mongoose.model('Entretien', entretienSchema);
