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
        return UbicacionModel.create(ubicacion).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }
    


    static update(id,data){
        const ubicacion = {
            id: parseInt(id),
            coordenadas: data.coordenadas,
            ph: data.ph,
            biologoId: data.biologoId,
            especieId: data.especieId,
        };
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