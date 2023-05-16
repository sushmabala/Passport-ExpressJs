const { Pool } = require('pg');

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    'postgresql://postgres:swethA@127.0.0.1:5432/passport_verification',
  ssl: process.env.DATABASE_URL ? true : false,
});

const getByCountryName = async (req, res) => {
  const country_name = req.params.country_name;
  const response = await pool.query(
    'SELECT * FROM passport_details WHERE country_name = $1',
    [country_name]
  );
  res.json(response.rows);
};

const createPassPortDetails = async (req, res) => {
  const {
    country_name,
    appointment_link,
    application_link,
    office_address,
    map,
  } = req.body;
  const response = await pool.query(
    'INSERT INTO passport_details(country_name, appointment_link,application_link,office_address,map) VALUES($1, $2,$3,$4,$5)',
    [country_name, appointment_link, application_link, office_address, map]
  );
  console.log(response);
  res.json({
    message: 'Passport Details Added Successfully',
    body: {
      user: {
        country_name,
        appointment_link,
        application_link,
        office_address,
        map,
      },
    },
  });
};

const deletePassport_details = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query(
    'DELETE FROM passport_details WHERE id = $1',
    [id]
  );
  console.log(response);
  res.json(`passport_details ${id} deleted successfully`);
};

const updatePassportDetails = async (req, res) => {
  const id = req.params.id;
  const {
    country_name,
    appointment_link,
    application_link,
    office_address,
    map,
  } = req.body;
  const response = await pool.query(
    'UPDATE passport_details SET country_name = $1, appointment_link = $2, application_link = $3, office_address = $4, map = $5 WHERE id = $6',
    [country_name, appointment_link, application_link, office_address, map, id]
  );
  console.log(response);
  res.json('Passport details updated successfully');
};

module.exports = {
  createPassPortDetails,
  getByCountryName,
  deletePassport_details,
  updatePassportDetails,
};
