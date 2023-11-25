class InvitadoSigninPageView extends PageView {
    constructor() {
        super("invitado-signin-page");
    }

    get usuarioEmail() {
        return document.getElementById('usuarioEmail').value;
      }
    
      get usuarioPassword() {
        return document.getElementById('usuarioPassword').value;
      }

    get usuarioRol() {
        return document.getElementById('rolUsuario').value;
    }
}
