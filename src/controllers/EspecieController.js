const EspecieModel = require("../models/EspecieModel");
const FormatService = require("../services/FormatService");

class EspecieController{

    static getList(){
        return EspecieModel.getAll().then(
            result => {
                return FormatService.toApiResponse(result);
            });
    }

    static getById(id){
        return EspecieModel.getById(id).then(
            result => {
                return FormatService.toApiResponse(result);
            });
    }

    static create(data){
        const especie = {
            especie: data.especie,
            nombreCientifico: data.nombreCientifico,
            familia: data.familia,
            biologoId: data.biologoId,
        };
        return EspecieModel.create(especie).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }

    static update(id,data){
        const especie = {
            id: parseInt(id),
            especie: data.especie,
            nombreCientifico: data.nombreCientifico,
            familia: data.familia,
            biologoId: data.biologoId,
        };
        return EspecieModel.update(especie).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
        
    }

    static delete(id){
        return EspecieModel.delete(id).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }

}

module.exports = EspecieController;