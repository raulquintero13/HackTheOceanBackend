const UbicacionModel = require("../models/UbicacionModel");
const FormatService = require("../services/FormatService");

class UbicacionController{

    static getList(){
        return UbicacionModel.getAll().then(
            result => {
                return FormatService.toApiResponse(result);
            });
    }

    static getById(id){
        return UbicacionModel.getById(id).then(
            result => {
                return FormatService.toApiResponse(result);
            });
    }

    static create(data){
        const ubicacion = {
            coordenadas: data.coordenadas,
            ph: data.ph,
            especieId: data.especieId,
            biologoId: data.biologoId,
        };
<<<<<<< HEAD
        console.log(ubicacion)
=======
        console.log(data)
>>>>>>> ab20749a6b52f94f120fde98dcc2d0644a34d2a1
        return UbicacionModel.create(ubicacion).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }
<<<<<<< HEAD
    
=======
>>>>>>> ab20749a6b52f94f120fde98dcc2d0644a34d2a1


    static update(id,data){
        const ubicacion = {
            id: parseInt(id),
            coordenadas: data.coordenadas,
            ph: data.ph,
<<<<<<< HEAD
            especieId: data.especieid,
            biologoId: data.biologoid,
        };
=======
            biologoId: data.biologoId,
            especieId: data.especieId,
        };
        console.log(id)
        console.log(data)
>>>>>>> ab20749a6b52f94f120fde98dcc2d0644a34d2a1
        return UbicacionModel.update(ubicacion).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
        
    }

    static delete(id){
        return UbicacionModel.delete(id).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }

}

module.exports = UbicacionController;