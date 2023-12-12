class ClientePerfilPageController extends PageController {
    constructor(model) {
        super(model);
        this.view = new ClientePerfilPageView();
    }


    async setPerfil(event){
        this.model.setPerfil();

        
    }
    async signout(event) {
        this.model.signout();
    }
  }