class InvitadoSignupPageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new InvitadoSignupPageView();
  }

  get usuarioRol() {
    return this.view.usuarioRolSelectValue;
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
    console.log(this.usuarioRol);
    if (valid) {
      let usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        dni: this.usuarioDni,
        direccion: this.direccion,
        email: this.email,
        password: this.contrasena,
        rol:this.usuarioRol,
        telefono: this.telefono,
      };

      model.signup(usuario)
      // if (usuarioRol === Rol.Cliente) {
      //   cliente = this.model.agregarCliente(
      //     this.nombre,
      //     this.apellido,
      //     this.usuarioDni,
      //     this.direccion,
      //     this.email,

      //     this.contrasena,
      //     this.telefono
      //   );
      //   model.signup(cliente);
      // } else {
      //   empleado = this.model.agregarEmpleado(
      //     this.nombre,
      //     this.apellido,
      //     this.usuarioDni,
      //     this.direccion,
      //     this.email,
      //     this.contrasena,
      //     this.telefono
      //   );
      //   model.signup(empleado);
      // }

      if (usuarioRol === "Cliente") {
        event.target.href = "/car-rental-online/cliente-home-page";
      } else {
        event.target.href = "/car-rental-online/empleado-home-page";
      }
      router.route(event);
    }
  }
}
