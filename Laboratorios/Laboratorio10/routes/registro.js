var express = require('express')
var router = express.Router()
var registroController = require('../controllers/registro')

router.get('/', registroController.getAll)
router.get('/:id', registroController.getOneById)
router.post('/', registroController.insert)
router.delete('/:id', registroController.erase)
router.put('/', registroController.update)




module.exports = router;