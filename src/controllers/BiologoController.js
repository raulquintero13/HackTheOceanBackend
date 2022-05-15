const BiologoModel = require("../models/BiologoModel");
const FormatService = require("../services/FormatService");

class BiologoController {
    static getList(){
        return BiologoModel.getAlll().then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }
    static getById(id){
        return BiologoModel.getById(id).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }
    static create(data){
        const biologo ={
            nombre :data.nombre,
            organizacion : data.organizacion,
            especialidad  : data.especialidad,
            pais : data.pais,
        };
        return BiologoModel.create(biologo).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );

    }
    static update(id, data){
        const biologo = {
            id: parseInt(id),
            nombre :data.nombre,
            organizacion : data.organizacion,
            especialidad  : data.especialidad,
            pais :data.pais,
        };
        return BiologoModel.update(biologo).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }
    static delete(id){
        return BiologoModel.delete(id).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }
}

module.exports = BiologoController;