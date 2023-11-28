class ClienteHomePageController extends PageController {
  constructor(model) {
      super(model);
      this.view = new ClienteHomePageView();
  }
  async signout(event) {
      this.model.signout();
  }
}
