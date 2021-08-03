const mongoose = require('mongoose');
const albumSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, lowercase: true },
    releaseDate: { type: Date, required: true },
    clicks: { type: Number },
    logo: { type: String }
});
const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
