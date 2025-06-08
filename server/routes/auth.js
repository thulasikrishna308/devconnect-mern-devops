import express from 'express';
const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a user
// @access  Public
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Normally you'd create a user in MongoDB here
  return res.status(200).json({
    msg: 'User registered successfully',
    user: { name, email }
  });
});

export default router;
