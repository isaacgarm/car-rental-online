class Cliente extends Usuario {
  constructor(_id) {
    super(_id);
    this._rol = rol.Cliente;
  }
  set rol(rol) {
    this._rol = rol.Cliente;
  }

  get rol() {
    return this._rol;
  }
}
