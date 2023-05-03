const express = require('express');
const router = express.Router();
const create = require('../controller/controller')

router.get('/get', create.createTables);
router.get('/find', create.findAll)

module.exports = router;