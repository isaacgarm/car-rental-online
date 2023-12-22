class EmpleadoVehiculosPageView extends PageView{
    constructor() {
        super("empleado-vehiculos-page");
      }

      mostrarListaVehiculos(vehiculos) {
        // Limpiar el contenedor antes de agregar los nuevos vehículos
        this.listaVehiculosContainer.innerHTML = '';

        // Iterar sobre la lista de vehículos y agregarlos al contenedor
        vehiculos.forEach(vehiculo => {
            const vehiculoElement = document.createElement('p');
            vehiculoElement.textContent = `Matrícula: ${vehiculo.matricula} - Estado: ${vehiculo.estado}`;
            
            // Asignar color según el estado del vehículo
            if (vehiculo.estado === 'eliminado') {
                vehiculoElement.style.color = 'red';
            } else if (vehiculo.estado === 'entregado') {
                vehiculoElement.style.color = 'blue';
            } else {
                vehiculoElement.style.color = 'green';
            }

            // Agregar evento de clic para la navegación
            vehiculoElement.addEventListener('click', () => {
                this.navegarAVehiculo(vehiculo._id);
            });

            this.listaVehiculosContainer.appendChild(vehiculoElement);
        });
    }

    // Método para navegar a la página de vehículo
    navegarAVehiculo(vehiculoId) {
        const url = `/empleado-vehiculo-page?vehiculoId=${vehiculoId}`;
        window.location.href = url;
    }
}
module.exports = EmpleadoVehiculosPageView;