

class FormatService{

    static toApiResponse(result){
        let success =true;
        let code = 0;
        let msg = '';
        let data = result;
        if (result !== null && result.code !== undefined){
            success = false
            code = result.code;
            if (result.hasOwnProperty('meta')) {
                msg = result.meta.cause;
            } else {
                msg = 'DB. Something wrong!'
            }
            data = [];
        } 
        let response =  {
            success: success,
            code: code ,
            message: msg,
            payload: data,
        }
        return response
    }

  
}



module.exports = FormatService;