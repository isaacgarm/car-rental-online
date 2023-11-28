class EmpleadoHomePageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new EmpleadoHomePageView();
  }
  async signout(event) {
    this.model.signout();
}
}
