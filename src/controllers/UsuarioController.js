const UsuarioModel = require("../models/UsuarioModels");
const FormatService = require("../services/FormatService");

class UsuarioController {
    static getById(id){
        return UsuarioModel.getById(id).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }
    static create(data){
        const usuario ={
            biologoId :data.biologoId,
            password : data.password,
        };
        return UsuarioModel.create(usuario).then(
            result => {
                return FormatService.toApiResponse(result);
            }
        );
    }
}

module.exports = UsuarioController;