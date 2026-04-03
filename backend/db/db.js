const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./tickets.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tickets (
      id INTEGER PRIMARY KEY,
      message TEXT,
      category TEXT,
      priority TEXT,
      confidence REAL
    )
  `);
});

module.exports = db;