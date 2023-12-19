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

  get contrasena1() {
    return this.view.contrasena1InputValue;
  }

  get contrasena2() {
    return this.view.contrasena2InputValue;
  }

  async signup(event) {
    event.preventDefault();
    this.view.form.reportValidity();
    let valid = this.view.form.checkValidity();
    if (valid) {
      try {
        let usuario = {
          nombres: this.nombre,
          apellidos: this.apellido,
          dni: this.usuarioDni,
          direccion: this.direccion,
          email: this.email,
          password: this.contrasena1,
          rol: this.usuarioRol,
          telefono: this.telefono,
          password2: this.contrasena2,
        };

        this.model.signup(usuario);
        await mensajes.agregarSuccces("Usuario registrado");

        event.target.href = "/car-rental-online/invitado-home-page";
        router.route(event);
      } catch (e) {
        console.error(e);
        await mensajes.agregarError(e.message ? e.message : e);
        mensajes.refresh();
      } finally {
      }
    }
  }
}
