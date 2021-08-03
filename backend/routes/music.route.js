const express = require('express');
const Album = require('../models/album.model');
const DSP = require('../models/dsp.model');
const Link = require('../models/link.model');
const Social = require('../models/social.model');
const router = express.Router();

/*Functions*/
  /*Albums*/
    router.post('/add-album', async (req, res) => {
      try {
        const album = new Album(req.body);
        await album.save();
        res.send(album);
      } catch (err) {
        res.status(500).send(err);
      }
    });
    router.get('/get-albums', async (req, res) => {
      try {
        res.send(await Album.find().sort({ releaseDate: 1 }));
      } catch (err) {
        res.status(500).send(err);
      }
    });
    router.put('/edit-album', async (req, res) => {
      try {
        const existingAlbum = await Album.findById({ '_id': req.body._id});
        if (existingAlbum != null) {
          existingAlbum.title = req.body.title;
          existingAlbum.releaseDate = req.body.releaseDate;
          existingAlbum.clicks = req.body.clicks;
          existingAlbum.logo = req.body.logo;
          await existingAlbum.save();
          res.send(existingAlbum);
        } else {
          res.send(null);
        }
      } catch (err) {
        res.status(500).send(err);
      }
    });
    router.delete('/delete-album/:id', async (req, res) => {
      try {
        res.send(await Album.findByIdAndDelete({ '_id': req.params.id }));
      } catch (err) {
        res.status(500).send(err);
      }
    });
  /*Albums*/

  /*DSP's*/
    router.post('/add-dsp', async (req, res) => {
      try {
        const dsp = new DSP(req.body);
        await dsp.save();
        res.send(dsp);
      } catch(err) {
        res.status(500).send(err);
      }
    });
    router.get('/get-dsps', async (req, res) => {
      try {
        res.send(await DSP.find().sort({ id: 1 }));
      } catch (err) {
        res.status(500).send(err);
      }
    });
    router.put('/edit-dsp', async (req, res) => {
      try {
        const existingDSP = await DSP.findById({ '_id': req.body._id});
        if (existingDSP != null) {
          existingDSP.id = req.body.id;
          existingDSP.name = req.body.name;
          existingDSP.logo = req.body.logo;
          await existingDSP.save();
          res.send(existingDSP);
        } else {
          res.send(null);
        }
      } catch (err) {
        res.status(500).send(err);
      }
    });
    router.delete('/delete-dsp/:id', async (req, res) => {
      try {
        res.send(await DSP.findByIdAndDelete({ '_id': req.params.id }));
      } catch (err) {
        res.status(500).send(err);
      }
    });
  /*DSP's*/

  /*Socials*/
    router.post('/add-social', async (req, res) => {
      try {
        const social = new Social(req.body);
        await social.save();
        res.send(social);
      } catch(err) {
        res.status(500).send(err);
      }
    });
    router.get('/get-socials', async (req, res) => {
      try {
        res.send(await Social.find().sort({ service: 1 }));
      } catch (err) {
        res.status(500).send(err);
      }
    });
    router.put('/edit-social', async (req, res) => {
      try {
        const existingSocial = await Social.findById({ '_id': req.body._id});
        if (existingSocial != null) {
          existingSocial.service = req.body.service;
          existingSocial.handle = req.body.handle;
          existingSocial.logo = req.body.logo;
          await existingSocial.save();
          res.send(existingSocial);
        } else {
          res.send(null);
        }
      } catch (err) {
        res.status(500).send(err);
      }
    });
    router.delete('/delete-social/:id', async (req, res) => {
      try {
        res.send(await Social.findByIdAndDelete({ '_id': req.params.id }));
      } catch (err) {
        res.status(500).send(err);
      }
    });
  /*Socials*/

  /*Links*/
    router.post('/add-link', async (req, res) => {
      try {
        const link = new Link(req.body);
        await link.save();
        res.send(link);
      } catch(err) {
        res.status(500).send(err);
      }
    })
    router.get('/get-links/:id', async (req, res) => {
      try {
        res.send(await Link.find());
      } catch (err) {
        res.status(500).send(err);
      }
    });
  /*Links*/
/*Functions*/

module.exports = router;
