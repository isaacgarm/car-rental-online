class InvitadoSigninPageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new InvitadoSigninPageView();
  }
  get usuarioRol() { return this.view.usuarioRolInputValue; }
  get usuarioEmail() { return this.view.usuarioEmailInputValue; }
  get usuarioPassword() { return this.view.usuarioPasswordInputValue; }
  async signin(event) {
    event.preventDefault();
    this.view.form.reportValidity();
    let valid = this.view.form.checkValidity();
    if(valid){
      let usuario = this.model.signin(this.usuarioRol,this.usuarioEmail,this.usuarioPassword);
    }

    if (usarioRol === "Cliente"){
        event.target.href = "cliente-home-page";         
    }else{
        event.target.href = "empleado-home-page";
    }
    router.route(event);
  }
}
