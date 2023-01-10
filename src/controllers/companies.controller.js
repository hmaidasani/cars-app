const pool = require("../db");

const createCompany = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCompany = await pool.query(
      "INSERT INTO company(id, name) VALUES(DEFAULT, $1) RETURNING *",
      [name]
    );

    res.json(newCompany.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getAllCompanies = async (req, res, next) => {
    try {
      const allCompanies = await pool.query("SELECT * FROM company");
      res.json(allCompanies.rows);
    } catch (error) {
      next(error);
    }
  };
  
const getCompany = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await pool.query("SELECT * FROM company WHERE id = $1", [id]);
  
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Company not found" });
  
      res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
};

module.exports = {
  createCompany,
  getAllCompanies,
  getCompany
};