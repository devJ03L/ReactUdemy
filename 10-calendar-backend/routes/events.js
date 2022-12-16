/*
    Event Routes
    /api/events
*/
const { Router } = require("express")
const router = Router()
const { check } = require('express-validator')

const { validarJWT } = require('../middlewares/validar-jwt')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')
const { validarCampos } = require('../middlewares/validar-campos')
const { isDate } = require("../helpers/isDate")

//Todas deben pasar por la validacion del JWT
router.use(validarJWT)

router.get('/', getEventos)

//Crear evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de fin es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEvento)

router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom(isDate),
        check('end', 'Fecha de fin es obligatoria').custom(isDate),
        validarCampos
    ],
    actualizarEvento)

router.delete('/:id', eliminarEvento)

module.exports = router
