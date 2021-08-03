const express = require('express');
const User = require('../models/user.model');
const router = express.Router();

/*Functions*/
  router.post('/', async (req, res) => {
    try {
      const user = new User(req.body);
      const users = await User.find({ 'username': user.username });
      if (users.length > 0) {
        res.status(409).send('Username already exists!');  
      } else {
        user.id = (await User.find({})).length + 1;
        await user.save(); 
        res.send(user);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
  router.post('/login', async (req, res) => {
    try {
      const user = new User(req.body);
      const existingUser = await User.findOne({ 'username': user.username });
      if (existingUser) {
          if (existingUser.password === user.password) {
            res.send(existingUser);
          } else {
            res.status(401).send('Invalid credentials!');
          }
      } else {
        res.status(409).send('User does not exist!');
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });
/*Functions*/

module.exports = router;