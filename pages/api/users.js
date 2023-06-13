import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// This is a dummy data store. Replace this with your own database logic.
const users = [];

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'POST':
      // Handle registration
      if (body.action === 'register') {
        const { name, email, phone, password } = body;

        // Validate input data
        if (!name || !email || !phone || !password) {
          return res.status(400).json({ error: 'All fields are required' });
        }

        // Check if the email already exists
        const existingUser = users.find((user) => user.email === email);
        if (existingUser) {
          return res.status(409).json({ error: 'Email already exists' });
        }

        // Encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Add the user to the dummy data store (replace with your database logic)
        const newUser = { id: Date.now(), name, email, phone, password: hashedPassword };
        users.push(newUser);

        // Create the JWT token
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return the token
        return res.status(201).json({ token });
      }
      // Handle login
      else if (body.action === 'login') {
        const { email, password } = body;

        // Validate input data
        if (!email || !password) {
          return res.status(400).json({ error: 'Email and password are required' });
        }

        // Find the user (replace with your database logic)
        const user = users.find((user) => user.email === email);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }

        // Check the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid password' });
        }

        // Create the JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return the token
        return res.status(200).json({ token });
      } else {
        return res.status(400).json({ error: 'Invalid action' });
      }
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}