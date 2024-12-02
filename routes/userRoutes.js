const express = require('express');
const router = express.Router();
// Sample GET route for fetching all users
router.get('/', (req, res) => {
 res.send('List of users');
});
// Sample POST route for creating a user
router.post('/', (req, res) => {
 const { name, email } = req.body;
 // In a real-world scenario, you would save this data to the database
 res.send(`User created with name: ${name} and email: ${email}`);
});
// Sample GET route for fetching a specific user
router.get('/:id', (req, res) => {
 const { id } = req.params;
 res.send(`Fetching user with ID: ${id}`);
});
module.exports = router;