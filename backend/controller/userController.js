import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Auth user & get token
// @route   POST /api/user/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: null,
    });
  } else {
    console.log('Error');
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

export { authUser };
