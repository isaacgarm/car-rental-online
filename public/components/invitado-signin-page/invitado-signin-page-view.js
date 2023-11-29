class InvitadoSigninPageView extends PageView {
  constructor() {
    super("invitado-signin-page");
  }
  get form() {
    return document.getElementById("signinFormId");
  }
  get usuarioEmail() {
    return document.getElementById("usuarioEmail").value;
  }

  get usuarioPassword() {
    return document.getElementById("usuarioPassword").value;
  }

  get usuarioRol() {
    return document.getElementById("usuarioRol").value;
  }
}
