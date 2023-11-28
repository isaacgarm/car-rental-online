class ClienteHomePageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new ClienteHomePageController();
  }
  get rolUsuario() {
    return this.view.rolUsuarioSelectValue;
  }

  get usuarioDni() {
    return this.view.usuarioDniInputValue;
  }

  get nombre() {
    return this.view.nombreInputValue;
  }

  get apellido() {
    return this.view.apellidoInputValue;
  }

  get email() {
    return this.view.emailInputValue;
  }

  get telefono() {
    return this.view.telefonoInputValue;
  }

  get direccion() {
    return this.view.direccionInputValue;
  }

  get contrasena() {
    return this.view.contrasenaInputValue;
  }

}
