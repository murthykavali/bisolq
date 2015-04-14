var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('home', {title: ''});
});

router.get('/home', function (req, res, next) {
    res.render('home', {title: ''});
});

/* Frameworks */
router.get('/frameworks', function (req, res, next) {
    res.render('index', {title: 'Frameworks'});
});

/* SMAC */
router.get('/smac', function (req, res, next) {
    res.render('index', {title: 'SMAC'});
});

/* Domains */
router.get('/domains', function (req, res, next) {
    res.render('index', {title: 'Domains'});
});

/* Team */
router.get('/team', function (req, res, next) {
    res.render('index', {title: 'Team'});
});

/* Contact Us */
router.get('/contactus', function (req, res, next) {
    res.render('index', {title: 'Contact Us'});
});

/* Carriers */
router.get('/careers', function (req, res, next) {
    res.render('index', {title: 'Careers'});
});

/* Services */
router.get('/services', function (req, res, next) {
    res.render('index', {title: 'Services'});
});

router.get('/services/test-and-quality', function (req, res, next) {
    res.render('test-and-quality', {title: 'Test and Quality Engineering'});
});

router.get('/services/packaged-applications', function (req, res, next) {
    res.render('packaged-applications', {title: 'Packaged Applications'});
});

router.get('/services/onsite-or-offshore', function (req, res, next) {
    res.render('onsite-or-offshore', {title: 'Onsite or Offshore Trainings'});
});

module.exports = router;
