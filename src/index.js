import express from 'express';
import router from './routes/routes.js';
import cors from 'cors'

const PORT = process.env.PORT || 5000;

const app = express();
app.use(router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
