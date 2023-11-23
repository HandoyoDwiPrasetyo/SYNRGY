const Router = require('express').Router;
const db = require('../../../config/database');

// /api/books
function ApiRouterBook() {
  const router = Router(); // instance dari function Router

  // List
  router.get('/', async (req, res) => {
    const data = await db.select('*').from('books');
    res.status(200).json({
      data,
    });
  });

  // Single
  router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const data = await db.select('*').from('books').where('books_id', '=', id);
    res.status(200).json({
      data: data[0],
    });
  });

  // Create
  router.post('/', (req, res) => {
    const data = req.body;

    res.status(201).json({
      message: 'Create success!',
      data,
    });
  });

  return router;
}

module.exports = ApiRouterBook;
