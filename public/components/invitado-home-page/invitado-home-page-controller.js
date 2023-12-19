class InvitadoHomePageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new InvitadoHomePageView();
    }
    async refresh(url) {
        await super.refresh(url);
        mensajes.refresh();
      }
}
