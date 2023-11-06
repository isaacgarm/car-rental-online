const { expect } = require("chai");
const CarRentalOnline = require("../../src/model/car-rental-online");
const Cliente = require("../../src/model/cliente");
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
});
