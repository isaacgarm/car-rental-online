const Usuario = require("./usuario");
//require con la etiqueta y usarlo directamente
const Rol = require("./rol");

class Cliente extends Usuario {
  constructor(_id, nombres, apellidos, dni, direccion,email , password, telefono) {
    super(_id, nombres, apellidos, dni, direccion,email , password, telefono);
    this._rol = Rol.Cliente;
  }
  set rol(rol) {
    this._rol = Rol.Cliente;
  }

  get rol() {
    return this._rol;
  }
}
module.exports = Cliente;
