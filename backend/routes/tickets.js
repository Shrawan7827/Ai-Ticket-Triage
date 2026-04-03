const db = require('../db/db');
const express = require('express');
const router = express.Router();
const analyzeTicket = require('../analyzer/ticketAnalyzer');


router.post('/analyze', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message required" });
  }

  const result = analyzeTicket(message);

  const ticket = {
    id: Date.now(),
    message,
    ...result
  };

  db.run(
    `INSERT INTO tickets (id, message, category, priority, confidence)
     VALUES (?, ?, ?, ?, ?)`,
    [ticket.id, ticket.message, ticket.category, ticket.priority, ticket.confidence],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(ticket);
    }
  );
});

router.get('/', (req, res) => {
  db.all(`SELECT * FROM tickets ORDER BY id DESC`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});
module.exports = router;