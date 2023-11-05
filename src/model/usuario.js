class Usuario {
  _id;
  _dni;
  _nombres;
  _apellidos;
  _direccion;
  _email;
  _password;
  _rol;
  _telefono;

  constructor(_id, nombres, apellidos, dni, direccion,email , password, rol, telefono) {
    this._id = _id;
    this._dni = dni;
    this._nombres = nombres ;
    this._apellidos = apellidos;
    this._direccion = direccion;
    this._email = email;
    this._password = password;
    this._rol = rol;
    this._telefono = telefono;

  }

  // Setters
  set dni(dni) {
    this._dni = dni;
  }

  set nombres(nombres) {
    this._nombres = nombres;
  }

  set apellidos(apellidos) {
    this._apellidos = apellidos;
  }

  set direccion(direccion) {
    this._direccion = direccion;
  }

  set email(email) {
    this._email = email;
  }

  set password(password) {
    this._password = password;
  }

  set rol(rol) {
    this._rol = rol;
  }

  set telefono(telefono) {
    this._telefono = telefono;
  }

  // Getters
  get dni() {
    return this._dni;
  }

  get nombres() {
    return this._nombres;
  }

  get apellidos() {
    return this._apellidos;
  }

  get direccion() {
    return this._direccion;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get rol() {
    return this._rol;
  }

  get telefono() {
    return this._telefono;
  }
}
//exportar
module.exports = Usuario;
