import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dayjs from 'dayjs';

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
