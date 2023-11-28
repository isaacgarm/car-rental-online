class InvitadodisponibilidadPageController extends PageController {
    constructor(model) {
      super(model);
      this.view = new InvitadoDisponibilidadPageView();
    }
    getReservas() { return this.model.reservas; }
    getVehiculos() { return this.model.vehiculos; }
}