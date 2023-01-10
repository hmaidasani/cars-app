const { Router } = require("express");
const {
  basicGetCar,
  basicGetBrand,
  basicGetCompany
} = require("../controllers/basic.controller");
const {
  createCar,
  getCar,
  getAllCars
} = require("../controllers/cars.controller");
const {
  createBrand,
  getBrand,
  getAllBrands
} = require("../controllers/brands.controller");
const {
  createCompany,
  getCompany,
  getAllCompanies
} = require("../controllers/companies.controller");

const router = Router();

// basic endpoints to return data from js object
router.get("/cars/:id", basicGetCar);
router.get("/brands/:id", basicGetBrand);
router.get("/companies/:id", basicGetCompany);


// Endpoints using database
// cars
router.post("/cars_db", createCar);
router.get("/cars_db", getAllCars);
router.get("/cars_db/:id", getCar);

// brands
router.post("/brands_db", createBrand);
router.get("/brands_db", getAllBrands);
router.get("/brands_db/:id", getBrand);

// companies
router.post("/companies_db", createCompany);
router.get("/companies_db", getAllCompanies);
router.get("/companies_db/:id", getCompany);

module.exports = router;