class Empleado extends Usuario {
  constructor(_id, nombres, apellidos, dni, direccion,email , password, telefono) {
    super(_id, nombres, apellidos, dni, direccion,email , password, telefono);
    this._rol = Rol.Empleado;
    this.nombres=nombres;
    this.apellidos=apellidos;
    this.dni=dni;
    this.direccion=direccion;
    this.email=email;
    this.password=password;
    this.telefono=telefono;
  }

}
