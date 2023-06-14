import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from 'multer';

// Connection URL to your MongoDB instance
const MONGODB_URI = 'mongodb+srv://schoolapp:Themba12345678@cluster0.3rt5wsz.mongodb.net/happy_care?retryWrites=true&w=majority';
const DB_NAME = 'happy_care';

const upload = multer();

// JWT secret key
const JWT_SECRET = 'happy123';

// Password hashing salt rounds
const SALT_ROUNDS = 10;

// Function to establish a connection to MongoDB
const connectToDatabase = async () => {
  const client = await MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true });
  return client.db(DB_NAME);
};

// Register API endpoint
export const register = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('users');

    const { name, phone, idNumber, email, password } = req.body;
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    if (!name || !phone || !idNumber || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = {
      name,
      phone,
      idNumber,
      email,
      password: hashedPassword,
    };
    collection.insertOne(user).then(() => {
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '777h' });
    res.status(201).json({ message: 'User registered successfully', token });
    }).catch((error) => {
      res.status(500).json({ message: error.message });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login API endpoint
export const login = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('users');

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await collection.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'User Does Not Exist' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Password is incorrect' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '777h' });

    res.status(200).json({ message: 'Authentication successful', token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users API endpoint
export const getUsers = async (_req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection('users');

    const users = await collection.find().toArray();

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Define the API route handler
const handler = async (req, res) => {
  if (req.method === 'POST') {
    if (req.query.action === 'register') {
      upload.none()(req, res, () => register(req, res));
    } else if (req.query.action === 'login') {
      upload.none()(req, res, () => login(req, res));
    }
  } else if (req.method === 'GET') {
    await getUsers(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
