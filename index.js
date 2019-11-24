import express from 'express';
import morgan from 'morgan';
import multer from 'multer';

import { getHandler, postHandler } from './handlers/index.js';

const PORT = 3000;
const app = express();
const upload = multer({ dest: 'assets/' });

app.use(morgan('dev'));

app.get('/:name', getHandler);
app.post('/', upload.any(), postHandler);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
