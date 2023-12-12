class ClienteHomePageController extends PageController {
  constructor(model) {
    super(model);
    this.view = new ClienteHomePageView();
  }
  async signout(event) {
    this.model.signout();
    router.route(event);
  }
  async refresh(url) {
    await super.refresh(url);
    mensajes.refresh();
  }
}
