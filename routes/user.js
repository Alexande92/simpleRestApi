const express = require('express');
const router = express.Router();

const { getAsync, setAsync } = require('../redis')
const { User } = require('../models/');


// @route GET user/:id
router.get('/:id', async (req,res) => {
  try {
    const userId = req.params.id;
    const cachedUser = getAsync(`user${userId}`)

    if (cachedUser) return res.json(cachedUser);

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(400).json({ errors: [{msg: `User not found`}]});
    }

    // Expiration date set in an hour
    setAsync(`user${userId}`, JSON.stringify(user), 'EX', 1800)

    res.json(user);
  } catch(err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST user/
router.post('/', async(req, res) => {
  try {
    const { fullName, dob, gender } = req.body;

    const user = User.build({
      fullName,
      dob,
      gender,
    });

    await user.save();

    res.status(200).send('User successfully created');
  } catch(err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
})

// @route PUT user/:id
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: `User not found` }] });
    }

    const { fullName, dob, gender } = req.body;

    const userFields = {};

    if (fullName) userFields.fullName = fullName;
    if (dob) userFields.dob = dob;
    if (gender) userFields.gender = gender;


    await user.update(userFields, { where: { id: req.params.id } });

    res.send(`User ${user.fullName} successfully updated`)

  } catch(err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router
