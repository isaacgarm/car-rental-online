class ClientePerfilPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClientePerfilPageView();
    }
    async signout(event) {
        this.model.signout();
    }
  }