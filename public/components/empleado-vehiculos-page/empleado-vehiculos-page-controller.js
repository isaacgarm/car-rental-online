class EmpleadoVehiculosPageController extends PageController{
    constructor(model) {
        super(model);
        this.view = new EmpleadoVehiculosPageView();
    }

    get vehiculos() {
        return this.view.vehiculos;
      }

    mostrarTodosLosVehiculos() {
        // Obtener todos los vehículos desde el modelo (puedes introducir datos ficticios para probar)
        const todosLosVehiculos = this.model.getVehiculos();

        // Lógica para mostrar los vehículos en la interfaz de usuario
        this.view.mostrarListaVehiculos(todosLosVehiculos);
    }

    // Lógica para la navegación al hacer clic en la matrícula
    navegarAVehiculo(vehiculoId) {
        const url = `/empleado-vehiculo-page?vehiculoId=${vehiculoId}`;
        window.location.href = url;
    }

}
module.exports = EmpleadoVehiculosPageController;