// import PatientController
const PatientController = require("../controllers/PatientController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient
router.get("/patients", PatientController.index);
router.post("/patients", PatientController.store);
router.put("/patients/:id", PatientController.update);
router.delete("/patients/:id", PatientController.destroy);
//Menambahkan route untuk get detail resource
router.get("/patients/:id", PatientController.show);
//Menambahkan route untuk search resource by name
router.get("/patients/search/:name", PatientController.search);
//Menambahkan route untuk get positive resource
router.get("/patients/status/:status", PatientController.positive);
//Menambahkan route untuk get negative resource
router.get("/patients/status/:status", PatientController.recovered);
//Menambahkan route untuk get dead resource
router.get("/patients/status/:status", PatientController.dead);
// export router
module.exports = router;