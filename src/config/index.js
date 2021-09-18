var express = require('express');
var router = express.Router();
const exercisesController = require('../controllers/ExercisesController');

// Obtiene ejercicios disponibles
router.get('/exercises', exercisesController.index);

router.post('/exercises', exercisesController.create);

router.get('/exercises/:id', exercisesController.read);

router.put('/exercises/update/:id', exercisesController.update);

router.delete('/exercises/:id', exercisesController.delete);

module.exports = router;