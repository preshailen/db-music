const mongoose = require('mongoose');
const socialSchema = new mongoose.Schema({
    service: { type: String, required: true, trim: true, lowercase: true },
    handle: { type: String, required: true, trim: true },
    icon: { type: String, required: true, trim: true, lowercase: true }
});
const Social = mongoose.model('Social', socialSchema);
module.exports = Social;
