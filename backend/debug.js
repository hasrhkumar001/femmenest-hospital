const connectDB = require('./config/db');
const User = require('./models/User');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: __dirname + '/.env' });

async function check() {
    await connectDB();
    const users = await User.find({}).lean();
    console.log(JSON.stringify(users, null, 2));
    mongoose.connection.close();
}

check();
