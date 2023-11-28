class EmpleadoPerfilPageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new EmpleadoPerfilPageView();
  }
  async signout(event) {
    this.model.signout();
  }
}
