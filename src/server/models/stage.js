var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var stageSchema = new Schema({
  sujet: String,
  semestre: String,
  site_id: {
    type: Schema.Types.ObjectId,
    ref: 'Site'
  },
  etudiant_id: {
    type: Schema.Types.ObjectId,
    ref: 'Etudiant'
  },
  type_stage: String,
  commentaire_recommendation: String,
  integration_cdt_travail: Number,
  remuneration_aventages: Number,
  dirigeants: Number,
  opportunites_carriere: Number,
  structure_organisation: Number,
  rapport: String,
  soutenance: String,
  remuneration: Number,
  avantages[{
    type: String,
    detail: String
  }],
  emploi: {
    proposition: Boolean,
    type_proposition: String,
    acceptation: Boolean,
    raison: String,
    Salaire: Number,
    avantages[{
      type: String,
      detail: String
    }]
  }
});

module.exports = mongoose.model('Stage', stageSchema);
