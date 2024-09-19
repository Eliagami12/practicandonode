const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async (req, res) => {
    try {
        const arrayMascotasDB = await Mascota.find();
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
            /*arrayMascotas: [
                {id: "1",nombre: "rex", descripcion: "travieso", edad: 2}, 
                {id: "2",nombre: "leo", descripcion: "travieso", edad: 9}, 
                {id: "3",nombre: "mudy", descripcion: "travieso", edad: 5}, 
            ]*/
        })

    } catch (error) {
        console.log(error)
    }
 
})


module.exports = router;