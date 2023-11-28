class EmpleadoPerfilPageView extends PageView {
    constructor() {
      super("empleado-perfil-page");
    }
    async refresh(url) {
      await super.refresh(url);
    }
  }