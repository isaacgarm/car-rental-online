const Usuario = require("./usuario");
//require con la etiqueta y usarlo directamente
const rol = require("./rol");

class Cliente extends Usuario{
    constructor(_id) {
        super(_id);
        this._rol = rol.Cliente;
    }

}
module.exports = Cliente;