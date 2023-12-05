class EmpleadoVehiculoPageController extends PageController{
    constructor(model) {
        super(model);
        this.view = new EmpleadoVehiculoPageView();
    }
    // Modelo
    getVehiculoById(uid) { return this.model.vehiculoById(uid); }
    // Controller
    get uid() { return this.getParam('id'); }
    // Eventos
    async borrar(event) {
        event.preventDefault();
        if (this.uid) {
            try {
                this.model.eliminarVehiculoById(this.uid);
                event.target.href = '/gestor-servicios/vehiculos';
            } catch (err) {
                console.error(err.message)
                mensajes.agregarError(err.message);
            }
            await router.route(event);
        }
    }
    async refresh(url) {
        await super.refresh(url);
        let id = this.uid;
        if (id) this.view.vehiculoId = id;
    }
}