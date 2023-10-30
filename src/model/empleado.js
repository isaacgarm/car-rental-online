const Usuario = require("./usuario");
const rol = require("./rol");

class Empleado extends Usuario{
    constructor(_id) {
        super(_id);
        this._rol = rol.Empleado;
    }

}
module.exports = Empleado;