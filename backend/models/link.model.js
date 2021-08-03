const mongoose = require('mongoose');
const linkSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, lowercase: true },
    id: { type: String, required: true },
    dsp: { type: Number, required: true },
    url: { type: String, required: true },
});
const Link = mongoose.model('Link', linkSchema);
module.exports = Link;
