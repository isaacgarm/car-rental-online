const { expect } = require("chai");
const CarRentalOnline = require("./src/model/CarRentalOnline");
const Cliente = require("./src/model/cliente");
const Empleado = require("./src/model/empleado");
const Vehiculo = require("./src/model/vehiculo");
const Reserva = require("./src/model/reserva");


describe("CarRentalOnline", () => {
  let carRental;

  beforeEach(() => {
    carRental = new CarRentalOnline();
  });

  it("debería inicializar _clientes como un array vacío", () => {
    expect(carRental._clientes).to.be.an("array").that.is.empty;
  });

  it("debería inicializar _empleados como un array vacío", () => {
    expect(carRental._empleados).to.be.an("array").that.is.empty;
  });

  it("debería inicializar _vehiculos como un array vacío", () => {
    expect(carRental._vehiculos).to.be.an("array").that.is.empty;
  });

  it("debería inicializar _reservas como un array vacío", () => {
    expect(carRental._reservas).to.be.an("array").that.is.empty;
  });

  it("lastId debería ser 0", () => {
    expect(carRental.lastId).to.equal(0);
  });


  //Apartado 5


describe("Método getVehiculos()", () => {
  let carRental;

  beforeEach(() => {
    carRental = new CarRentalOnline();

    // Agrega al menos 3 vehículos antes de cada prueba
    carRental.agregarVehiculo(new Vehiculo("123ABC", "Toyota", "Corolla", "Sedán", "Auto", true, false, 50, "Descripción del vehículo 1"));
    carRental.agregarVehiculo(new Vehiculo("456DEF", "Honda", "Civic", "Sedán", "Auto", true, false, 55, "Descripción del vehículo 2"));
    carRental.agregarVehiculo(new Vehiculo("789GHI", "Ford", "Focus", "Hatchback", "Auto", true, false, 60, "Descripción del vehículo 3"));
  });

  it("debería devolver al menos 3 vehículos", () => {
    const vehiculos = carRental.getVehiculos();
    expect(vehiculos).to.be.an("array").that.has.lengthOf.at.least(3);
  });

  it("debería devolver objetos de tipo Vehiculo", () => {
    const vehiculos = carRental.getVehiculos();
    vehiculos.forEach((vehiculo) => {
      expect(vehiculo).to.be.instanceOf(Vehiculo);
    });
  });

  it("debería devolver los vehículos agregados", () => {
    const vehiculos = carRental.getVehiculos();
    expect(vehiculos.map(v => v.matricula)).to.include("123ABC");
    expect(vehiculos.map(v => v.matricula)).to.include("456DEF");
    expect(vehiculos.map(v => v.matricula)).to.include("789GHI");
  });
});

    //Apartado 6

    const { expect } = require("chai");
    const CarRentalOnline = require("./ruta/a/tu/ClaseCarRentalOnline");
    const Reserva = require("./ruta/a/tu/ClaseReserva");
    
    describe("Método getReservas()", () => {
      let carRental;
    
      beforeEach(() => {
        carRental = new CarRentalOnline();
    
        // Agrega al menos 3 reservas antes de cada prueba
        carRental.agregarReserva(new Reserva("2023-11-01", "2023-11-03", 150, "R123", "2023-11-01", "2023-11-03", "2023-10-31", 1, 123));
        carRental.agregarReserva(new Reserva("2023-11-05", "2023-11-07", 180, "R124", "2023-11-05", "2023-11-07", "2023-11-04", 2, 456));
        carRental.agregarReserva(new Reserva("2023-11-10", "2023-11-12", 200, "R125", "2023-11-10", "2023-11-12", "2023-11-09", 3, 789));
      });
    
      it("debería devolver al menos 3 reservas", () => {
        const reservas = carRental.getReservas();
        expect(reservas).to.be.an("array").that.has.lengthOf.at.least(3);
      });
    
      it("debería devolver objetos de tipo Reserva", () => {
        const reservas = carRental.getReservas();
        reservas.forEach((reserva) => {
          expect(reserva).to.be.instanceOf(Reserva);
        });
      });
    
      it("debería devolver las reservas agregadas", () => {
        const reservas = carRental.getReservas();
        expect(reservas.map(r => r.numero)).to.include("R123");
        expect(reservas.map(r => r.numero)).to.include("R124");
        expect(reservas.map(r => r.numero)).to.include("R125");
      });
    });
    
//Apartado 7

describe("Método agregarCliente(obj)", () => {
    let carRental;
  
    beforeEach(() => {
      carRental = new CarRentalOnline();
  
      // Agrega al menos 3 clientes antes de cada prueba
      carRental.agregarCliente(new Cliente("cliente1@example.com", "password", "Cliente", /* otras propiedades */));
      carRental.agregarCliente(new Cliente("cliente2@example.com", "password", "Cliente", /* otras propiedades */));
      carRental.agregarCliente(new Cliente("cliente3@example.com", "password", "Cliente", /* otras propiedades */));
    });
  
    it("debería agregar al menos 3 clientes", () => {
      const clientes = carRental.getClientes();
      expect(clientes).to.be.an("array").that.has.lengthOf.at.least(3);
    });
  
    it("debería lanzar una excepción al agregar un cliente con un email existente", () => {
      expect(() => carRental.agregarCliente(new Cliente("cliente1@example.com", "password", "Cliente", /* otras propiedades */))).to.throw(Error, "El cliente ya existe.");
    });
  
    it("debería lanzar una excepción si la propiedad rol de obj no es Cliente", () => {
      expect(() => carRental.agregarCliente({ email: "cliente4@example.com", password: "password", rol: "Empleado", /* otras propiedades */ })).to.throw(Error, "La propiedad rol debe ser Cliente.");
    });
  });



});
