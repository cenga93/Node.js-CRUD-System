import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './app/routes/router.js';
import api from './app/routes/api.js';
import connection from './app/database/connection.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// *************************************************
const views_path = path.join(__dirname, 'views');

// *****  | DOTENV CONFIG | ************************
dotenv.config({ path: 'config.env' });

// *****  | APP | **********************************
const app = express();
const PORT = process.env.PORT || 3000;

// *****  | DATABASE CONNECTION | ******************
connection();

// *****  | APP CONFIG | ***************************
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// *****  | VIEW ENGINE CONFIG | *******************
app.set('view engine', 'ejs');
app.set('views', views_path);

// *****  | LOAD ASSETS | ******************************************
app.use('/css', express.static(path.join(__dirname, 'assets/css')));
app.use('/img', express.static(path.join(__dirname, 'assets/img')));
app.use('/js', express.static(path.join(__dirname, 'assets/js')));

// *****  | LOAD ROUTES | *****
app.use(router);
app.use(api);

// *****  | START SERVER | ********************************************************
app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`));
