const pool = require("../db");

const createCar = async (req, res, next) => {
  try {
    const { model, brandId } = req.body;

    const newCar = await pool.query(
      "INSERT INTO car(id, model, brandId) VALUES(DEFAULT, $1, $2) RETURNING *",
      [model, brandId]
    );

    res.json(newCar.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getAllCars = async (req, res, next) => {
    try {
      // const allCars = await pool.query("SELECT * FROM car");
      const allCars = await pool.query(
      `
      SELECT car.id as car_id, car.model as car_model, brand.id as brand_id, brand.name as brand_name, company.id as company_id, company.name as company_name
      FROM car
      JOIN brand ON brand.id = car.brandId
      JOIN company ON company.id = brand.companyId`);
      
      res.json(allCars.rows);
    } catch (error) {
      next(error);
    }
};
  
const getCar = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await pool.query("SELECT * FROM car WHERE id = $1", [id]);
  
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Car not found" });
  
      res.json(result.rows[0]);
    } catch (error) {
      next(error);
    }
};


module.exports = {
    createCar,
    getAllCars,
    getCar
};