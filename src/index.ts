import 'dotenv/config'
import express, { Router } from 'express';

import { getFilteredResponses } from './fillout';

const PORT = process.env.PORT;

const app = express();
const router = Router();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
router.get('/:formId/filteredResponses', getFilteredResponses);

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
