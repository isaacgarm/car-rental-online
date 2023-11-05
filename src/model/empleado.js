
  const Usuario = require("./usuario");
  const Rol = require("./rol");

  class Empleado extends Usuario {
    constructor(_id, nombres, apellidos, dni, direccion,email , password, rol, telefono) {
      super(_id, nombres, apellidos, dni, direccion,email , password, telefono);
      this._rol = Rol.Empleado;
    }
    set rol(rol) {
      this._rol = Rol.Empleado;
    }

    get rol() {
      return this._rol;
    }
  }

  module.exports = Empleado;
