const { Router } = require('express');
const router = Router();

const {
  getByCountryName,
  createPassPortDetails,
  deletePassport_details,
  updatePassportDetails,
} = require('../controllers/index.controller');

// router.get('/users',getUsers);
router.get('/country/:country_name', getByCountryName);
router.post('/country_details', createPassPortDetails);
router.delete('/country/:id', deletePassport_details);
router.put('/country/:id', updatePassportDetails);

module.exports = router;
