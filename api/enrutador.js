

import { Router } from 'express';


import { renderAllbooks } from './renderAllbooks.js';
import { createBook } from './createBook.js';
import { cutBook } from './cutBook.js';


const router = Router();

router.delete(`/api/cutBook/:id`, cutBook);
router.get(`/api/renderAllbooks`, renderAllbooks);
router.post(`/api/createBook`, createBook);



export default router;