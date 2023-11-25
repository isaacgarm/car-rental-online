class InvitadoSignupPageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new InvitadoSignupPageView();
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

  async signup(event) {
    event.preventDefault();
    this.view.form.reportValidity();
    let valid = this.view.form.checkValidity();

    if (valid) {
      console.log("Invitado registrado:", {
        rolUsuario: this.rolUsuario,
        usuarioDni: this.usuarioDni,
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        telefono: this.telefono,
        direccion: this.direccion,
        contrasena: this.contrasena,
    });
        if (rolUsuario === "Cliente"){
            event.target.href = "/car-rental-online/cliente";         
        }else{
            event.target.href = "/car-rental-online/empleado";
        }
        router.route(event);
      
    }
  }

}
