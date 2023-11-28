class ClientePerfilPageView extends PageView {
    constructor() {
      super("cliente-perfil-page");
    }
    async refresh(url) {
      await super.refresh(url);
    }
  }