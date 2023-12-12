class InvitadoSigninPageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new InvitadoSigninPageView();
  }
  get usuarioRol() {
    return this.view.usuarioRolInputValue;
  }
  get usuarioEmail() {
    return this.view.usuarioEmailInputValue;
  }
  get usuarioPassword() {
    return this.view.usuarioPasswordInputValue;
  }
  async signin(event) {
    event.preventDefault();
    this.view.form.reportValidity();
    let valid = this.view.form.checkValidity();
    if (valid) {
      try {
        this.model.signin(
          this.usuarioEmail,
          this.usuarioPassword,
          this.usuarioRol
        );
        await mensajes.agregarSuccces("Sesión iniciada");
        if (this.usuarioRol === "Cliente") {
          event.target.href = "/car-rental-online/cliente-home-page";
        } else {
          event.target.href = "/car-rental-online/empleado-home-page";
        }
        
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
