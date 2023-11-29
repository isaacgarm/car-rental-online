/*class InvitadodisponibilidadPageController extends PageController {
    constructor(model) {
      super(model);
      this.view = new InvitadoDisponibilidadPageView();
    }
    getReservas() { return this.model.reservas; }
    getVehiculos() { return this.model.vehiculos; }
}
*/

// Importa la clase Vehiculo si no lo has hecho antes
const Vehiculo = require('./ruta-a-vehiculo-modelo');

class InvitadoDisponibilidadPageController {
  constructor(carRentalOnline) {
    this.carRentalOnline = carRentalOnline;
    // Utiliza el método disponibles del modelo para obtener los vehículos disponibles
    this.vehiculosDisponibles = this.carRentalOnline.disponibles({
      marca: 'Toyota', // Datos ficticios para probar
      modelo: 'Corolla',
      tipo: 'Sedán',
      etiqueta: 'Económico',
      costoDia: 50,
      inicio: new Date(),
      fin: new Date(),
    });
    this.render();
  }

  render() {
    // Puedes utilizar un bucle para mostrar la información de cada vehículo en la página
    this.vehiculosDisponibles.forEach((vehiculo) => {
      console.log(`ID: ${vehiculo._id}, Matrícula: ${vehiculo.matricula}, Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}`);
      // Aquí podrías llamar a una función que renderice la información en la vista
    });
  }

  reservar() {
    // Lógica para redirigir a invitado-signin-page al hacer clic en el botón Reservar
    // Utiliza la lógica de navegación que tengas en tu aplicación
  }
}

// Exporta la clase para ser utilizada en otras partes de tu aplicación
module.exports = InvitadoDisponibilidadPageController;
