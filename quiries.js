const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

const createUser = (req, res) => {
  const { name, email, password } = req.body;

  pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`User added with ID: ${result.insertId}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
