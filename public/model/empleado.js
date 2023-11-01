class Empleado extends Usuario {
  constructor(_id) {
    super(_id);
    this._rol = rol.Empleado;
  }
  set rol(rol) {
    this._rol = rol.Empleado;
  }

  get rol() {
    return this._rol;
  }
}
