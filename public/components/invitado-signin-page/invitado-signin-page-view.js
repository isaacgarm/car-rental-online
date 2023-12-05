class InvitadoSigninPageView extends PageView {
  constructor() {
    super("invitado-signin-page");
  }
  get form() {
    return document.getElementById("signinFormId");
  }
  get usuarioEmailInput() {
    return document.getElementById("usuarioEmail");
  }

  get usuarioEmailInputValue() {
    return this.usuarioEmailInput.value;
  }

  get usuarioPasswordInput() {
    return document.getElementById("usuarioPassword");
  }

  get usuarioPasswordInputValue() {
    return this.usuarioPasswordInput.value;
  }

  get usuarioRolInput() {
    return document.getElementById("usuarioRol");
  }

  get usuarioRolInputValue() {
    return this.usuarioRolInput.value;
  }
}
