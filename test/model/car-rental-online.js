const { expect } = require("chai");
const CarRentalOnline = require("../../src/model/car-rental-online");
const Cliente = require("../../src/model/reserva");
const Empleado = require("../../src/model/empleado");
const Vehiculo = require("../../src/model/vehiculo");
const Reserva = require("../../src/model/reserva");
const Rol = require("../../src/model/rol");
const chai = require('chai');
const assert = chai.assert;


describe("car-rental-online", function() {
    const CLIENTES =  [
        { nombres: "Cliente 1", apellidos: "Apellido 1", dni: "12345678A", direccion: "Direccion 1", email: "cliente1@gmail.com", password: "Password1", telefono: "333222111", rol: Rol.Cliente },
        { nombres: "Cliente 2", apellidos: "Apellido 2", dni: "12345678B", direccion: "Direccion 2", email: "cliente2@gmail.com", password: "Password2", telefono: "444222111", rol: Rol.Cliente },
        { nombres: "Cliente 3", apellidos: "Apellido 3", dni: "12345678C", direccion: "Direccion 3", email: "cliente3@gmail.com", password: "Password3", telefono: "555222111", rol: Rol.Cliente }
      ];
      const cliente1 = { nombres: "Cliente 1", apellidos: "Apellido 1", dni: "12345678A", direccion: "Direccion 1", email: "cliente1@gmail.com", password: "Password1", telefono: "333222111", rol: Rol.Cliente };

      const EMPLEADOS =  [
        { nombres: "Empleado 1", apellidos: "Apellido 1", dni: "12345678A", direccion: "Direccion 1", email: "empleado1@gmail.com", password: "Password1", telefono: "333222111", rol: Rol.Empleado },
        { nombres: "Empleado 2", apellidos: "Apellido 2", dni: "12345678B", direccion: "Direccion 2", email: "empleado2@gmail.com", password: "Password2", telefono: "444222111", rol: Rol.Empleado },
        { nombres: "Empleado 3", apellidos: "Apellido 3", dni: "12345678C", direccion: "Direccion 3", email: "empleado3@gmail.com", password: "Password3", telefono: "555222111", rol: Rol.Empleado }
      ];
      const empleado1 = { nombres: "Empleado 1", apellidos: "Apellido 1", dni: "12345678A", direccion: "Direccion 1", email: "cliente1@gmail.com", password: "Password1", telefono: "333222111", rol: Rol.Empleado };
    let carRental;

    beforeEach(function () { carRental = new CarRentalOnline(); });

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

    it("agregar cliente", function () {
        let clientes = CLIENTES.map(u => carRental.agregarCliente(u));
        assert.equal(carRental._clientes.length, CLIENTES.length);
        CLIENTES.forEach((u, i) => {
            assert.equal(carRental._clientes[i].obj, CLIENTES[i].obj);
            assert.equal(carRental._clientes[i].obj, clientes[i].obj);
            assert.exists(carRental._clientes[i]._id);
        })
    });

    it("agregar cliente que ya existe",function(){
        assert.throws(() => {
            carRental.agregarCliente(cliente1);
            carRental.agregarCliente(cliente1);
          }, 'El cliente ya existe.')
    });


    it("agregar empleado en cliente",function(){
        assert.throws(() => {
            carRental.agregarCliente(empleado1);
          }, "El objeto no es un cliente.")
    });

    it("agregar empleado", function () {
        let empleados = EMPLEADOS.map(u => carRental.agregarEmpleado(u));
        assert.equal(carRental._empleados.length, EMPLEADOS.length);
        EMPLEADOS.forEach((u, i) => {
            assert.equal(carRental._empleados[i].obj, EMPLEADOS[i].obj);
            assert.equal(carRental._empleados[i].obj, empleados[i].obj);
            assert.exists(carRental._empleados[i]._id);
        })
    });

    it("agregar empleado que ya existe",function(){
        assert.throw(() => {
            carRental.agregarEmpleado(empleado1);
            carRental.agregarEmpleado(empleado1);
          }, "El empleado ya existe.")
    });


    it("agregar cliente en empleado",function(){
        assert.throw(() => {
            carRental.agregarEmpleado(cliente1);
          }, "El objeto no es un empleado.")
    });




    //Apartado 5


    describe("Método getVehiculos()", () => {
        let carRental;

        beforeEach(() => {
            carRental = new CarRentalOnline();

            // Agrega al menos 3 vehículos antes de cada prueba
            carRental.agregarVehiculo(new Vehiculo("111AAAA", "Toyota", "Corolla", "Sedán", "Auto", true, false, 50, "Descripción del vehículo 1"));
            carRental.agregarVehiculo(new Vehiculo("222BBBB", "Honda", "Civic", "Sedán", "Auto", true, false, 55, "Descripción del vehículo 2"));
            carRental.agregarVehiculo(new Vehiculo("333CCCC", "Ford", "Focus", "Hatchback", "Auto", true, false, 60, "Descripción del vehículo 3"));
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
            expect(vehiculos.map(v => v.matricula)).to.include("111AAAA");
            expect(vehiculos.map(v => v.matricula)).to.include("222BBBB");
            expect(vehiculos.map(v => v.matricula)).to.include("333CCCC");
        });
    });

    //Apartado 6


    describe("Método getReservas()", () => {
        let carRental;

        beforeEach(() => {
            carRental = new CarRentalOnline();



            // Agrega al menos 3 reservas antes de cada prueba
            carRental.reservar(new Reserva("2023-11-01", "2023-11-03", 150, /*"R123",*/ "2023-11-01", "2023-11-03", "2023-10-31", 1, 123));
            carRental.reservar(new Reserva("2023-11-05", "2023-11-07", 180, /*"R124",*/ "2023-11-05", "2023-11-07", "2023-11-04", 2, 456));
            carRental.reservar(new Reserva("2023-11-10", "2023-11-12", 200, /*"R125",*/ "2023-11-10", "2023-11-12", "2023-11-09", 3, 789));
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
            const cliente1 = new Cliente("1", "Cliente", "Cliente 1", "12345678A", "Apellido 1", "Direccion 1", "cliente1@gmail.com", "Password1", "333222111");
            const cliente2 = new Cliente("2", "Cliente", "Cliente 2", "23456789B", "Apellido 2", "Direccion 2", "cliente2@gmail.com", "Password2", "444333222");
            const cliente3 = new Cliente("3", "Cliente", "Cliente 3", "34567890C", "Apellido 3", "Direccion 3", "cliente3@gmail.com", "Password3", "555444333");
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
