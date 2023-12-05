class EmpleadoAgregarVehiculoPageController extends PageController{
    constructor(model) {
        super(model);
        this.view = new EmpleadoAgregarVehiculoPageView();
    }
    get vehiculoModelo() { return this.view.vehiculoModeloInputValue; }
    async agregar(event) {
        event.preventDefault();
        this.view.form.reportValidity();
        let valid = this.view.form.checkValidity();
        if (valid) {
            let vehiculo = this.model.agregarVehiculo(this.vehiculoModelo);
            mensajes.agregarInfo(`El vehiculo ${vehiculo.modelo} [${vehiculo._id}] ha sido agregado`)
            event.target.href = "/gestor-servicios/vehiculos";
            router.route(event);
        }
    }
}

