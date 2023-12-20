class ClientePerfilPageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new ClientePerfilPageView();
  }

  get dni() {
    return this.view.usuarioDniInputValue;
  }

  get nombre() {
    return this.view.nombreInputValue;
  }

  get apellido() {
    return this.view.apellidoInputValue;
  }

  get direccion() {
    return this.view.direccionInputValue;
  }

  get email() {
    return this.view.emailInputValue;
  }

  get telefono() {
    return this.view.telefonoInputValue;
  }

  get contrasena1() {
    return this.view.contrasena1InputValue;
  }

  get contrasena2() {
    return this.view.contrasena2InputValue;
  }

  getPerfil() {
    //Obtenemos el perfil (es el getPerfil)
    return this.model.perfil();
  }


  async setPerfil(event) {
    event.preventDefault();
    this.view.form.reportValidity();
    let valid = this.view.form.checkValidity();
    if (valid) {
      try {
        let perfil = {
          nombres: this.nombre,
          apellidos: this.apellido,
          dni: this.dni,
          direccion: this.direccion,
          email: this.email,
          telefono: this.telefono,
          rol: "Cliente",
          password: this.contrasena1,
          password2: this.contrasena2,
        };
        this.model.setPerfil(perfil);
        await mensajes.agregarSuccces("Usuario guardado");
        event.target.href = "/car-rental-online/cliente-home-page";
        router.route(event);
      } catch (e) {
        console.error(e);
        await mensajes.agregarError(e.message ? e.message : e);
        mensajes.refresh();
      }
    }
  }
}
