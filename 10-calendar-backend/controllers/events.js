const { response } = require('express')
const Evento = require('../models/Evento')

const getEventos = async (req, resp = response) => {
    const eventos = await Evento.find({})
        .populate('user', 'name')
    resp.json({
        ok: true,
        eventos
    })
}

const crearEvento = async (req, res = response) => {

    const evento = new Evento(req.body)

    try {
        evento.user = req.uid
        const eventoGuardado = await evento.save()
        res.json({
            ok: true,
            evento: eventoGuardado
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

const actualizarEvento = async (req, res = response) => {
    const eventoId = req.params.id
    const uid = req.uid

    try {
        const evento = await Evento.findById(eventoId)

        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'No existe el evento'
            })    
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar'
            })    
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, {new: true})

        res.json({
            ok: true,
            evento: eventoActualizado
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

const eliminarEvento = async (req, resp = response) => {
    const eventoId = req.params.id
    const uid = req.uid
    try {
        const evento = await Evento.findById(eventoId)
        
        if(!evento){
            return res.status(404).json({
                ok: false,
                msg: 'No existe el evento'
            })    
        }

        
        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar'
            })    
        }

        await Evento.findByIdAndDelete(eventoId)

        resp.json({
            ok: true,
            msg: 'Evento borrado'           
        })

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'Hable con el admin'
        })
    }
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}