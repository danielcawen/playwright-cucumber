const path = require('path');
const dotenv = require('dotenv');

// Determine the current environment. Default to 'local' if not specified.
const env = process.env.NODE_ENV || 'local';

// Load the environment file from the config directory
const envPath = path.resolve(__dirname, `../../config/.env.${env}`);
dotenv.config({ path: envPath });

