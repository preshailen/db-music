const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id: { type: Number },
    username: { type: String, required: true, trim: true, lowercase: true },
    password: { type: String, required: true, trim: true, lowercase: true, validate(value) {
      if (value === null) {
        throw new Error('Doesnt work');
      }}},
});
const User = mongoose.model('User', userSchema);
module.exports = User;