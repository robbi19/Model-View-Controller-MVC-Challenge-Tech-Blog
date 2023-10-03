const router = require('express').Router();

// const apiRoutes = require('./api/')
const homeRoutes = require('./homeRoutes.js');
// const dashRoutes = require('./dashRoutes.js');

router.use('/', homeRoutes);
// router.use('/dash', dashRoutes);
// router.use('/api', apiRoutes);

module.exports = router;