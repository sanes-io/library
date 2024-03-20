import express from 'express';
import {
  getAllItems,
  getItem,
  createNewItem,
  updateItem,
  deleteBook,
} from '../controllers/itemController.js';

const router = express.Router();

router.route('/:itemType').get(getAllItems).post(createNewItem);

router
  .route('/:itemType/:id')
  .get(getItem)
  .patch(updateItem)
  .delete(deleteBook);

export default router;
