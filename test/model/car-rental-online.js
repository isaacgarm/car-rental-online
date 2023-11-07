const { expect } = require("chai");
const CarRentalOnline = require("../../src/model/car-rental-online");
const Cliente = require("../../src/model/cliente");
const Empleado = require("../../src/model/empleado");
const Vehiculo = require("../../src/model/vehiculo");
const Reserva = require("../../src/model/reserva");
const Rol = require("../../src/model/rol");
const Etiqueta = require("../../src/model/etiqueta");
const chai = require('chai');
const TipoVehiculo = require("../../src/model/tipo-vehiculo");
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
      const empleado1 = { nombres: "Empleado 1", apellidos: "Apellido 1", dni: "12345678A", direccion: "Direccion 1", email: "empleado1@gmail.com", password: "Password1", telefono: "333222111", rol: Rol.Empleado };

    const VEHICULOS = [
        {etiqueta: Etiqueta.Vehiculo, tipo: TipoVehiculo.Vehiculo, matricula:"AAA0000", marca:"SEAT", modelo:"LEON", disponible:true, eliminado:false, costoDia:50, descripcion:"SEAT LEON"},
        {etiqueta: Etiqueta.Vehiculo, tipo: TipoVehiculo.Vehiculo, matricula:"AAA0001", marca:"OPEL", modelo:"ASTRA", disponible:true, eliminado:false, costoDia:100, descripcion:"OPEL ASTRA"},
        {etiqueta: Etiqueta.Vehiculo, tipo: TipoVehiculo.Vehiculo, matricula:"AAA0002", marca:"TOYOTA", modelo:"YARIS", disponible:true, eliminado:false, costoDia:75, descripcion:"TOYOTA YARIS"}
    ]
        const vehiculo1 = {etiqueta: Etiqueta.Vehiculo, tipo: TipoVehiculo.Vehiculo, matricula:"AAA0000", marca:"SEAT", modelo:"LEON", disponible:true, eliminado:false, costoDia:50, descripcion:"OPEL ASTRA"}
    
    const RESERVAS = [
            {inicio:new Date(2023,6,24), fin:new Date(2023,6,30), costo: 98.13, numero:'1', entrega:new Date(2023,6,25), devolucion:new Date(2023,6,29), fecha:new Date(2023,6,22), clienteId:'1', vehiculoId:'1'},
            {inicio:new Date(2023,6,24), fin:new Date(2023,6,30), costo: 94.15, numero:'2', entrega:new Date(2023,6,25), devolucion:new Date(2023,6,29), fecha:new Date(2023,6,22), clienteId:'2', vehiculoId:'2'},
            {inicio:new Date(2023,6,24), fin:new Date(2023,6,30), costo: 88.74, numero:'3', entrega:new Date(2023,6,25), devolucion:new Date(2023,6,29), fecha:new Date(2023,6,22), clienteId:'3', vehiculoId:'3'}
    ]
        const reserva1 = {inicio:new Date(2023,6,24), fin:new Date(2023,6,30), costo: 98.13, numero:'1', entrega:new Date(2023,6,25), devolucion:new Date(2023,6,29), fecha:new Date(2023,6,22), clienteId:'1', vehiculoId:'1'}
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

    it("agregar vehiculo", function () {
        let vehiculos = VEHICULOS.map(u => carRental.agregarVehiculo(u));
        assert.equal(carRental._vehiculos.length, VEHICULOS.length);
        VEHICULOS.forEach((u, i) => {
            assert.equal(carRental._vehiculos[i].obj, VEHICULOS[i].obj);
            assert.equal(carRental._vehiculos[i].obj, vehiculos[i].obj);
            assert.exists(carRental._vehiculos[i]._id);
        })
    });
    it("agregar matricula que ya existe",function(){
        assert.throws(() => {
            carRental.agregarVehiculo(vehiculo1);
            carRental.agregarVehiculo(vehiculo1);
          }, 'La matrícula ya existe.')
    });

    it("agregar reserva", function () {
        let reservas = RESERVAS.map(u => carRental.agregarReserva(u));
        assert.equal(carRental._reservas.length, RESERVAS.length);
        RESERVAS.forEach((u, i) => {
            assert.equal(carRental._reservas[i].obj, RESERVAS[i].obj);
            assert.equal(carRental._reservas[i].obj, reservas[i].obj);
            assert.exists(carRental._reservas[i]._id);
        })
    });


    it("signin cliente",function(){

        CLIENTES.map(u => carRental.agregarCliente(u));
        
        carRental.signin(cliente1.email, cliente1.password, cliente1.rol)

        assert.equal(carRental._clientes[0].email, cliente1.email);
        assert.equal(carRental._clientes[0].password, cliente1.password);
        assert.equal(carRental._clientes[0].rol, cliente1.rol);
    })

    it("signin erroneo cliente",function(){
        CLIENTES.map(u => carRental.agregarCliente(u));
        assert.throw(() => {
            carRental.signin(empleado1.email, empleado1.password, empleado1.rol);
          }, 'Credenciales inválidas.');
    })


    
    it("signin empleado",function(){

        EMPLEADOS.map(u => carRental.agregarEmpleado(u));
        
        carRental.signin(empleado1.email, empleado1.password, empleado1.rol)

        assert.equal(carRental._empleados[0].email, empleado1.email);
        assert.equal(carRental._empleados[0].password, empleado1.password);
        assert.equal(carRental._empleados[0].rol, empleado1.rol);
    })

    it("signin erroneo empleado",function(){
        EMPLEADOS.map(u => carRental.agregarEmpleado(u));
        assert.throw(() => {
            carRental.signin(cliente1.email, cliente1.password, cliente1.rol);
          }, 'Credenciales inválidas.');
    })

       //apartado 15

       it("debería arrojar una excepción cuando se intenta reservar sin iniciar sesión", function() {
        assert.throws(() => {
          carRental.reservar("vehiculoId", new Date(), new Date());
        }, 'Ningún usuario ha iniciado sesión.');
      });

      it("debería arrojar una excepción cuando se intenta reservar un vehículo que no existe", function() {
        // Simular un usuario que ha iniciado sesión
        CLIENTES.map(u => carRental.agregarCliente(u));
        
        carRental.signin(cliente1.email, cliente1.password, cliente1.rol)

        assert.equal(carRental._clientes[0].email, cliente1.email);
    
        assert.throws(() => {
          carRental.reservar("vehiculoInexistente", new Date(), new Date());
        }, 'Vehiculo no encontrado.');
      });

      //apartado 16

      it ("Vehiculo disponible en fechas no reservadas",function(){
        const vehiculoId = "vehiculoDisponible";
        const inicio = new Date(2023,11,1);
        const fin = new Date(2023,11,5);
        const disponibilidad = carRental.disponibilidad(vehiculoId, inicio, fin);
        assert.isTrue(disponibilidad, "El vehiculo debería estar disponible en estas fechas");

      });

      it("Vehiculo no disponible debido a una reserva existente",function(){
      const vehiculoId = "vehiculoReservado";
      const inicio = new Date(2023-10-1);
      const fin = new Date(2023-10-5);
      const reserva = {
        vehiculoId:vehiculoId,
        inicio: inicio,
        fin: fin
      }
      carRental.agregarReserva(reserva);
      const vehiculoId2 = "vehiculoReservado";
      const inicio2 = new Date(2023-10-2);
      const fin2 = new Date(2023-10-4);
      const disponibilidad = carRental.disponibilidad(vehiculoId2, inicio2, fin2);
      assert.isFalse(disponibilidad, "El vehiculo no deberia estar disponible en estas fechas");

      });

      it("Vehículo no disponible debido a una reserva eliminada", function() {
        
      });

      //apartado 17

      it("Filtrar por Marca", function(){
        

        let reservas = RESERVAS.map(u => carRental.agregarReserva(u));
        assert.equal(carRental._reservas.length, RESERVAS.length);
        RESERVAS.forEach((u, i) => {
            assert.equal(carRental._reservas[i].obj, RESERVAS[i].obj);
            assert.equal(carRental._reservas[i].obj, reservas[i].obj);
            assert.exists(carRental._reservas[i]._id);
        })
        const vehiculosDisponibles = carRental.disponibles({marca: "Toyota"});
        assert.isNotEmpty(vehiculosDisponibles);
        vehiculosDisponibles.forEach((vehiculo)=>{
            assert.equal(vehiculo.marca,"Toyota");
        });


      });

});
