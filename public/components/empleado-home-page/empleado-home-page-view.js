class EmpleadoHomePageView extends PageView {
  constructor() {
    super("home-page");
  }
  async refresh(url) {
    await super.refresh(url);
  }

  async signot(event) {
    event.preventDefault();
    const usuarioEmail = this.view.usuarioEmail;
    const usuarioPassword = this.view.usuarioPassword;
    const rolUsuario = this.view.rolUsuario;
    console.log("Inicio de sesión:", {
      usuarioEmail,
      usuarioPassword,
      rolUsuario,
    });
    if (rolUsuario === "Cliente") {
      event.target.href = "/car-rental-online/cliente";
    } else {
      event.target.href = "/car-rental-online/empleado";
    }
    router.route(event);
  }
}
