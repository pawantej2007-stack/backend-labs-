
const express = require('express');
const router = express.Router();
const db = require('../config/db');


// GET /books - Retrieve books with search, sorting and filters
router.get('/', (req, res) => {
    const {
        search_q = '',
        order_by = 'id',
        order = 'ASC',
        limit = '10',
        offset = '0',
        min_price,
        max_price
    } = req.query;

    // Validate sorting column
    const allowedColumns = ['id', 'title', 'author', 'price', 'pages'];

    if (!allowedColumns.includes(order_by)) {
        return res.status(400).json({
            message: 'Invalid order_by column'
        });
    }

    // Validate sorting order
    if (!['ASC', 'DESC'].includes(order.toUpperCase())) {
        return res.status(400).json({
            message: 'Order must be ASC or DESC'
        });
    }

    // Validate pagination
    if (!/^\d+$/.test(limit) || !/^\d+$/.test(offset)) {
        return res.status(400).json({
            message: 'Limit and offset must be non-negative integers'
        });
    }

    if (Number(limit) < 1) {
        return res.status(400).json({
            message: 'Limit must be greater than zero'
        });
    }

    // Build SQL query
    let sql = 'SELECT * FROM book WHERE 1=1';
    const params = [];

    // Search by partial title
    if (search_q.trim() !== '') {
        sql += ' AND title LIKE ?';
        params.push(`%${search_q}%`);
    }

    // Minimum price filter
    if (min_price !== undefined) {
        if (min_price.trim() === '' || !Number.isFinite(Number(min_price))) {
            return res.status(400).json({
                message: 'min_price must be a valid number'
            });
        }

        sql += ' AND price >= ?';
        params.push(Number(min_price));
    }

    // Maximum price filter
    if (max_price !== undefined) {
        if (max_price.trim() === '' || !Number.isFinite(Number(max_price))) {
            return res.status(400).json({
                message: 'max_price must be a valid number'
            });
        }

        sql += ' AND price <= ?';
        params.push(Number(max_price));
    }

    if (
        min_price !== undefined &&
        max_price !== undefined &&
        Number(min_price) > Number(max_price)
    ) {
        return res.status(400).json({
            message: 'min_price cannot be greater than max_price'
        });
    }

    // Sorting and pagination
    sql += ` ORDER BY ${order_by} ${order.toUpperCase()} LIMIT ? OFFSET ?`;

    params.push(Number(limit), Number(offset));

    db.all(sql, params, (err, rows) => {
        if (err) {
            return res.status(500).json({
                message: 'Failed to retrieve books'
            });
        }

        res.status(200).json(rows);
    });
});

// POST /books - Add a new book
router.post('/', (req, res) => {
    const { title, author, price, pages } = req.body;

    // Validate required fields
    if (
        typeof title !== 'string' || !title.trim() ||
        typeof author !== 'string' || !author.trim() ||
        price === undefined || price === null ||
        typeof price !== 'number' || !Number.isFinite(price)
    ) {
        return res.status(400).json({
            message: 'Title, author and a valid numeric price are required'
        });
    }

    if (
        pages !== undefined &&
        (!Number.isInteger(pages) || pages < 0)
    ) {
        return res.status(400).json({
            message: 'Pages must be a non-negative integer'
        });
    }

    const sql = `
        INSERT INTO book (title, author, price, pages)
        VALUES (?, ?, ?, ?)
    `;

    db.run(
        sql,
        [title.trim(), author.trim(), price, pages ?? null],
        function (err) {
            if (err) {
                return res.status(500).json({
                    message: 'Failed to add book'
                });
            }

            res.status(201).json({
                message: 'Book created successfully',
                id: this.lastID
            });
        }
    );
});

// PUT /books/:id - Update an existing book
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, price, pages } = req.body;

    if (
        typeof title !== 'string' || !title.trim() ||
        typeof author !== 'string' || !author.trim() ||
        typeof price !== 'number' || !Number.isFinite(price)
    ) {
        return res.status(400).json({
            message: 'Title, author and a valid numeric price are required'
        });
    }

    if (pages !== undefined && (!Number.isInteger(pages) || pages < 0)) {
        return res.status(400).json({
            message: 'Pages must be a non-negative integer'
        });
    }

    const sql = `
        UPDATE book
        SET title = ?, author = ?, price = ?, pages = ?
        WHERE id = ?
    `;

    db.run(sql, [
        title.trim(),
        author.trim(),
        price,
        pages ?? null,
        id
    ], function (err) {
        if (err) {
            return res.status(500).json({ message: 'Failed to update book' });
        }

        if (this.changes === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book updated successfully' });
    });
});
// DELETE /books/:id - Delete a book
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM book WHERE id = ?';

    db.run(sql, [id], function (err) {
        if (err) {
            return res.status(500).json({
                message: 'Failed to delete book'
            });
        }

        if (this.changes === 0) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }

        res.status(200).json({
            message: 'Book deleted successfully'
        });
    });
});
module.exports = router;

