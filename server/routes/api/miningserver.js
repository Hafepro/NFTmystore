const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const MiningServer = require('../../models/MiningServer');


// @route    POST api/miningserver
// @desc     Create a sub
// @access   Private
router.post(
  '/',
  check('wallet', 'Wallet is required').notEmpty(),
  check('email', 'Email is required').notEmpty(),
  check('coinId', 'coinId is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log("req.body", req.body)

      const newMiningServer = new MiningServer({
        wallet: req.body.wallet,
        email: req.body.email,
        coinId: req.body.coinId,
        xcbAddress: req.body.xcbAddress,
        serverType: req.body.serverType
      });

      const miningServer = await newMiningServer.save();
      res.json(miningServer);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/miningserver
// @desc     Get all miningserver
// @access   Private
router.get('/', async (req, res) => {
  try {
    const miningServers = await MiningServer.find().sort({ date: -1 });
    res.json(miningServers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/miningserver/:id
// @desc     Get sub by ID
// @access   Private
// router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
//   try {
//     const miningServers = await MiningServer.findById(req.params.id);

//     if (!miningServers) {
//       return res.status(404).json({ msg: 'Not found' });
//     }

//     res.json(miningServers);
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send('Server Error');
//   }
// });

// // @route    DELETE api/miningserver/:id
// // @desc     Delete a sub
// // @access   Private
// router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
//   try {
//     const miningServers = await MiningServer.findById(req.params.id);

//     if (!miningServers) {
//       return res.status(404).json({ msg: 'Not found' });
//     }

//     // Check user
//     if (miningServers.email.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'User not authorized' });
//     }

//     await miningServers.remove();

//     res.json({ msg: 'Removed' });
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
