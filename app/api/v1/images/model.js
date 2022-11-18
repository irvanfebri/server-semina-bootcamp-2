const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let imageSchema = Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

module.exports = model('Image', imageSchema);

//upload file folder image
// ? 'uploads/${req.file.filename}'
// kita gunakan cara init 