const mongoose = require('mongoose');
const dspSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String, required: true, trim: true, lowercase: true },
    logo: { type: Buffer }
});
const DSP = mongoose.model('DSP', dspSchema);
module.exports = DSP;