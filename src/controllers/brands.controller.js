const pool = require("../db");

const createBrand = async (req, res, next) => {
  try {
    const { name, companyId } = req.body;

    const newBrand = await pool.query(
      "INSERT INTO brand(id, name, companyId) VALUES(DEFAULT, $1, $2) RETURNING *",
      [name, companyId]
    );

    res.json(newBrand.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getAllBrands = async (req, res, next) => {
    try {
      const allBrands = await pool.query("SELECT * FROM brand");
      res.json(allBrands.rows);
    } catch (error) {
      next(error);
    }
};
  
const getBrand = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await pool.query("SELECT * FROM brand WHERE id = $1", [id]);
  
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Brand not found" });
  
      res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
};

module.exports = {
  createBrand,
  getAllBrands,
  getBrand
};