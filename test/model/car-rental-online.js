const { expect } = require("chai");
const CarRentalOnline = require("../../src/model/car-rental-online");
const Cliente = require("../../src/model/cliente");
const Empleado = require("../../src/model/empleado");
const Vehiculo = require("../../src/model/vehiculo");
const Reserva = require("../../src/model/reserva");
const Rol = require("../../src/model/rol");
const Etiqueta = require("../../src/model/etiqueta");
const chai = require("chai");
const TipoVehiculo = require("../../src/model/tipo-vehiculo");
const assert = chai.assert;
const { Console } = require("console");
//Apartado 1
describe("car-rental-online", function () {
  const CLIENTES = [
    {
      nombres: "Cliente 1",
      apellidos: "Apellido 1",
      dni: "12345678A",
      direccion: "Direccion 1",
      email: "cliente1@gmail.com",
      password: "Password1",
      telefono: "333222111",
      rol: Rol.Cliente,      
    },
    {
      nombres: "Cliente 2",
      apellidos: "Apellido 2",
      dni: "12345678B",
      direccion: "Direccion 2",
      email: "cliente2@gmail.com",
      password: "Password2",
      telefono: "444222111",
      rol: Rol.Cliente,
    },
    {
      nombres: "Cliente 3",
      apellidos: "Apellido 3",
      dni: "12345678C",
      direccion: "Direccion 3",
      email: "cliente3@gmail.com",
      password: "Password3",
      telefono: "555222111",
      rol: Rol.Cliente,
    },
  ];
  const cliente1 = {
    nombres: "Cliente 1",
    apellidos: "Apellido 1",
    dni: "12345678A",
    direccion: "Direccion 1",
    email: "cliente1@gmail.com",
    password: "Password1",
    telefono: "333222111",
    rol: Rol.Cliente,
  };
  const clienteEmpleado = {
    nombres: "ClienteEmpleado 1",
    apellidos: "Apellido 1",
    dni: "12345678A",
    direccion: "Direccion 1",
    email: "cliente1@gmail.com",
    password: "Password5",
    telefono: "333222111",
    rol: Rol.Empelado,
  };

  const EMPLEADOS = [
    {
      nombres: "Empleado 1",
      apellidos: "Apellido 1",
      dni: "12345678A",
      direccion: "Direccion 1",
      email: "empleado1@gmail.com",
      password: "Password1",
      telefono: "333222111",
      rol: Rol.Empleado,
    },
    {
      nombres: "Empleado 2",
      apellidos: "Apellido 2",
      dni: "12345678B",
      direccion: "Direccion 2",
      email: "empleado2@gmail.com",
      password: "Password2",
      telefono: "444222111",
      rol: Rol.Empleado,
    },
    {
      nombres: "Empleado 3",
      apellidos: "Apellido 3",
      dni: "12345678C",
      direccion: "Direccion 3",
      email: "empleado3@gmail.com",
      password: "Password3",
      telefono: "555222111",
      rol: Rol.Empleado,
    },
  ];
  const empleado1 = {
    nombres: "Empleado 1",
    apellidos: "Apellido 1",
    dni: "12345678A",
    direccion: "Direccion 1",
    email: "empleado1@gmail.com",
    password: "Password1",
    telefono: "333222111",
    rol: Rol.Empleado,
  };

  const VEHICULOS = [
    {
      etiqueta: Etiqueta.Vehiculo,
      tipo: TipoVehiculo.Vehiculo,
      matricula: "AAA0000",
      marca: "SEAT",
      modelo: "LEON",
      disponible: true,
      eliminado: false,
      costoDia: 50,
      descripcion: "SEAT LEON",
    },
    {
      etiqueta: Etiqueta.Vehiculo,
      tipo: TipoVehiculo.Vehiculo,
      matricula: "AAA0001",
      marca: "OPEL",
      modelo: "ASTRA",
      disponible: true,
      eliminado: false,
      costoDia: 100,
      descripcion: "OPEL ASTRA",
    },
    {
      etiqueta: Etiqueta.Vehiculo,
      tipo: TipoVehiculo.Vehiculo,
      matricula: "AAA0002",
      marca: "TOYOTA",
      modelo: "YARIS",
      disponible: true,
      eliminado: false,
      costoDia: 75,
      descripcion: "TOYOTA YARIS",
    },
  ];
  const vehiculo1 = {
    etiqueta: Etiqueta.Vehiculo,
    tipo: TipoVehiculo.Vehiculo,
    matricula: "AAA0000",
    marca: "SEAT",
    modelo: "LEON",
    disponible: true,
    eliminado: false,
    costoDia: 50,
    descripcion: "OPEL ASTRA",
  };

  const RESERVAS = [
    {
      inicio: new Date(2023, 6, 24),
      fin: new Date(2030, 6, 30),
      costo: 98.13,
      numero: "1",
      entrega: new Date(2023, 6, 25),
      devolucion: new Date(2023, 6, 29),
      fecha: new Date(2023, 6, 22),
      clienteId: "1",
      vehiculoId: "1",
    },
    {
      inicio: new Date(2023, 6, 24),
      fin: new Date(2030, 6, 30),
      costo: 94.15,
      numero: "2",
      entrega: new Date(2023, 6, 25),
      devolucion: new Date(2023, 6, 29),
      fecha: new Date(2023, 6, 22),
      clienteId: "2",
      vehiculoId: "2",
    },
    {
      inicio: new Date(2023, 6, 24),
      fin: new Date(2030, 6, 30),
      costo: 88.74,
      numero: "3",
      entrega: new Date(2023, 6, 25),
      devolucion: new Date(2023, 6, 29),
      fecha: new Date(2023, 6, 22),
      clienteId: "3",
      vehiculoId: "3",
    },
  ];
  const reserva1 = {
    inicio: new Date(2023, 6, 24),
    fin: new Date(2023, 6, 30),
    costo: 98.13,
    numero: "1",
    entrega: new Date(2023, 6, 25),
    devolucion: new Date(2023, 6, 29),
    fecha: new Date(2023, 6, 22),
    clienteId: "1",
    vehiculoId: "2",
  };
  let carRental;

  beforeEach(function () {
    carRental = new CarRentalOnline();
  });

  //Apartado 2
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

  //Apartado 3
  it("getClientes vacío", () => {
    const clientes = carRental.getClientes();

    assert.isArray(clientes);
    assert.lengthOf(clientes, 0);
  });

  it("getClientes al menos 3", () => {
    CLIENTES.map((u) => carRental.agregarCliente(u));

    const gClientes = carRental.getClientes();

    assert.isArray(gClientes);
    assert.lengthOf(gClientes, 3);
  });

  //Apartado 4
  it("getEmpleados vacío", () => {
    const empleados = carRental.getEmpleados();

    assert.isArray(empleados);
    assert.lengthOf(empleados, 0);
  });

  it("getEmpleados al menos 3", () => {
    EMPLEADOS.map((u) => carRental.agregarEmpleado(u));

    const gEmpleados = carRental.getEmpleados();

    assert.isArray(gEmpleados);
    assert.lengthOf(gEmpleados, 3);
  });

  //Apartado 5

  it("getVehiculos vacío", () => {
    const vehiculos = carRental.getVehiculos();

    assert.isArray(vehiculos);
    assert.lengthOf(vehiculos, 0);
  });

  it("getVehiculos al menos 3", () => {
    VEHICULOS.map((u) => carRental.agregarVehiculo(u));

    const gVehiculos = carRental.getVehiculos();

    assert.isArray(gVehiculos);
    assert.lengthOf(gVehiculos, 3);
  });

  //Apartado 6

  it("getReservas vacío", () => {
    const reservas = carRental.getReservas();

    assert.isArray(reservas);
    assert.lengthOf(reservas, 0);
  });

  it("getReservas al menos 3", () => {
    RESERVAS.map((u) => carRental.agregarReserva(u));

    const gReservas = carRental.getReservas();

    assert.isArray(gReservas);
    assert.lengthOf(gReservas, 3);
  });

  //Apartado 7

  it("agregar cliente", function () {
    let clientes = CLIENTES.map((u) => carRental.agregarCliente(u));
    assert.equal(carRental._clientes.length, CLIENTES.length);
    CLIENTES.forEach((u, i) => {
      assert.equal(carRental._clientes[i].obj, CLIENTES[i].obj);
      assert.equal(carRental._clientes[i].obj, clientes[i].obj);
      assert.exists(carRental._clientes[i]._id);
    });
  });

  it("agregar cliente que ya existe", function () {
    assert.throws(() => {
      carRental.agregarCliente(cliente1);
      carRental.agregarCliente(cliente1);
    }, "El cliente ya existe.");
  });

  it("agregar empleado en cliente", function () {
    assert.throws(() => {
      carRental.agregarCliente(empleado1);
    }, "El objeto no es un cliente.");
  });

  //Apartado 8

  it("agregar empleado", function () {
    let empleados = EMPLEADOS.map((u) => carRental.agregarEmpleado(u));
    assert.equal(carRental._empleados.length, EMPLEADOS.length);
    EMPLEADOS.forEach((u, i) => {
      assert.equal(carRental._empleados[i].obj, EMPLEADOS[i].obj);
      assert.equal(carRental._empleados[i].obj, empleados[i].obj);
      assert.exists(carRental._empleados[i]._id);
    });
  });

  it("agregar empleado que ya existe", function () {
    assert.throws(() => {
      carRental.agregarEmpleado(empleado1);
      carRental.agregarEmpleado(empleado1);
    }, "El empleado ya existe.");
  });

  it("agregar cliente en empleado", function () {
    assert.throws(() => {
      carRental.agregarEmpleado(cliente1);
    }, "El objeto no es un empleado.");
  });

  //Apartado 9

  it("agregar vehiculo", function () {
    let vehiculos = VEHICULOS.map((u) => carRental.agregarVehiculo(u));
    assert.equal(carRental._vehiculos.length, VEHICULOS.length);
    VEHICULOS.forEach((u, i) => {
      assert.equal(carRental._vehiculos[i].obj, VEHICULOS[i].obj);
      assert.equal(carRental._vehiculos[i].obj, vehiculos[i].obj);
      assert.exists(carRental._vehiculos[i]._id);
    });
  });
  it("agregar matricula que ya existe", function () {
    assert.throws(() => {
      carRental.agregarVehiculo(vehiculo1);
      carRental.agregarVehiculo(vehiculo1);
    }, "La matrícula ya existe.");
  });

  //Apartado 16

  it("reservar", function () {
    let reservas = RESERVAS.map((u) => carRental.agregarReserva(u));
    assert.equal(carRental._reservas.length, RESERVAS.length);
    RESERVAS.forEach((u, i) => {
      assert.equal(carRental._reservas[i].obj, RESERVAS[i].obj);
      assert.equal(carRental._reservas[i].obj, reservas[i].obj);
      assert.exists(carRental._reservas[i]._id);
    });
  });



  //Apartado 10

  it("signin cliente", function () {
    CLIENTES.map((u) => carRental.agregarCliente(u));

    carRental.signin(cliente1.email, cliente1.password, cliente1.rol);

    assert.equal(carRental._clientes[0].email, cliente1.email);
    assert.equal(carRental._clientes[0].password, cliente1.password);
    assert.equal(carRental._clientes[0].rol, cliente1.rol);
  });

  it("signin erroneo cliente", function () {
    CLIENTES.map((u) => carRental.agregarCliente(u));
    assert.throws(() => {
      carRental.signin(empleado1.email, empleado1.password, empleado1.rol);
    }, "Credenciales inválidas.");
  });

  //Apartado 11

  it("signin empleado", function () {
    EMPLEADOS.map((u) => carRental.agregarEmpleado(u));

    carRental.signin(empleado1.email, empleado1.password, empleado1.rol);

    assert.equal(carRental._empleados[0].email, empleado1.email);
    assert.equal(carRental._empleados[0].password, empleado1.password);
    assert.equal(carRental._empleados[0].rol, empleado1.rol);
  });

  it("signin erroneo empleado", function () {
    EMPLEADOS.map((u) => carRental.agregarEmpleado(u));
    assert.throws(() => {
      carRental.signin(cliente1.email, cliente1.password, cliente1.rol);
    }, "Credenciales inválidas.");
  });

  //Apartado 12

  it("signup clientes", function () {
    let clientes = CLIENTES.map((u) => carRental.signup(u));
    assert.equal(carRental._clientes.length, CLIENTES.length);
  });

  it("signup empleados", function () {
    let empleados = EMPLEADOS.map((u) => carRental.signup(u));
    assert.equal(carRental._empleados.length, EMPLEADOS.length);
  });

  it("signup cliente que ya existe", function () {
    carRental.signup(cliente1);
    assert.throws(() => {
      carRental.signup(cliente1);
    }, "El email ya está registrado.");
  });

  it("signup empleado que ya existe", function () {
    carRental.signup(empleado1);
    assert.throws(() => {
      carRental.signup(empleado1);
    }, "El email ya está registrado.");
  });

  it("signup de cliente como empelado con el mismo email", function () {
    carRental.signup(cliente1);
    carRental.signup(clienteEmpleado);
    assert.equal(carRental._empleados.length, 1);
  });

  //Apartado 13

  it("comprobar el inicio sin usuarios en cliente", function () {
    assert.notExists(carRental.usuario);
  });

  it("debería ingresar con un cliente y verificar que el cliente ha ingresado", function () {
    let clientes = CLIENTES.map((u) => carRental.signup(u));

    carRental.signin(
      carRental._clientes[0].email,
      carRental._clientes[0].password,
      carRental._clientes[0].rol
    );

    assert.exists(carRental.usuario);
    assert.equal(carRental.usuario.email, carRental._clientes[0].email);
  });

  it("debería ingresar con un cliente y hacer singout", function () {
    let clientes = CLIENTES.map((u) => carRental.signup(u));

    carRental.signin(
      carRental._clientes[0].email,
      carRental._clientes[0].password,
      carRental._clientes[0].rol
    );

    assert.exists(carRental.usuario);
    assert.equal(carRental.usuario.email, carRental._clientes[0].email);

    carRental.signout();

    assert.notExists(carRental.usuario);
  });

  //Apartado 14

  it("comprobar el inicio sin usuarios en empleado", function () {
    assert.notExists(carRental.usuario);
  });

  it("debería ingresar con un empleado y verificar que el empleado ha ingresado", function () {
    let empleados = EMPLEADOS.map((u) => carRental.signup(u));

    carRental.signin(
      carRental._empleados[0].email,
      carRental._empleados[0].password,
      carRental._empleados[0].rol
    );

    assert.exists(carRental.usuario);
    assert.equal(carRental.usuario.email, carRental._empleados[0].email);
  });

  it("debería ingresar con un empleado y hacer singout", function () {
    let empleados = EMPLEADOS.map((u) => carRental.signup(u));

    carRental.signin(
      carRental._empleados[0].email,
      carRental._empleados[0].password,
      carRental._empleados[0].rol
    );

    assert.exists(carRental.usuario);
    assert.equal(carRental.usuario.email, carRental._empleados[0].email);

    carRental.signout();

    assert.notExists(carRental.usuario);
  });

  //apartado 15

  it("debería arrojar una excepción cuando se intenta reservar sin iniciar sesión", function () {
    assert.throws(() => {
      carRental.reservar("vehiculoId", new Date(), new Date());
    }, "Ningún usuario ha iniciado sesión.");
  });

  it("debería arrojar una excepción cuando se intenta reservar un vehículo que no existe", function () {
    // Simular un usuario que ha iniciado sesión
    CLIENTES.map((u) => carRental.agregarCliente(u));

    carRental.signin(cliente1.email, cliente1.password, cliente1.rol);

    assert.equal(carRental._clientes[0].email, cliente1.email);

    assert.throws(() => {
      carRental.reservar("vehiculoInexistente", new Date(), new Date());
    }, "Vehiculo no encontrado.");
  });

  //apartado 16

  it("Vehiculo disponible en fechas no reservadas", function () {
    const vehiculoId = "1";
    const inicio = new Date(2023, 11, 1);
    const fin = new Date(2023, 11, 5);
    const disponibilidad = carRental.disponibilidad(vehiculoId, inicio, fin);
    assert.isTrue(
      disponibilidad,
      "El vehiculo debería estar disponible en estas fechas"
    );
  });



      it("Tira una excepción cuando existe otra reserva en conflicto con el mismo vehículo", function () {
        const cliente = carRental.agregarCliente(cliente1);
        const vehiculo = carRental.agregarVehiculo(vehiculo1);
        carRental.signin(cliente1.email, cliente1.password, cliente1.rol);
    
    
        // Realiza una reserva para el vehículo
       const primeraReserva =  carRental.reservar(
           vehiculo._id,
           new Date('2023-01-06'),
           new Date('2023-01-10'),
      );
    
          // Intenta realizar otra reserva para el mismo vehículo en las mismas fechas
        assert.throws(() => {
          carRental.reservar(vehiculo._id, new Date('2023-01-07'), new Date('2023-01-09'));
        }, 'El vehículo no está disponible en las fechas seleccionadas.');
      });
 

  it("Vehículo no disponible debido a una reserva eliminada", function () {});

  //apartado 17

  it("Filtrar por Marca", function () {
    let reservas = RESERVAS.map((u) => carRental.agregarReserva(u));
    assert.equal(carRental._reservas.length, RESERVAS.length);
    RESERVAS.forEach((u, i) => {
      assert.equal(carRental._reservas[i].obj, RESERVAS[i].obj);
      assert.equal(carRental._reservas[i].obj, reservas[i].obj);
      assert.exists(carRental._reservas[i]._id);
    });
    const vehiculosDisponibles = carRental.disponibles({ marca: "Toyota" });
    assert.isNotEmpty(vehiculosDisponibles);
    vehiculosDisponibles.forEach((vehiculo) => {
      assert.equal(vehiculo.marca, "Toyota");
    });
  });

  //Apartado 18

  it("perfil cliente que ha iniciado sesion", function () {
    cliente = carRental.agregarCliente(cliente1);
    carRental.signin(cliente1.email, cliente1.password, cliente1.rol);
    const perfilCliente = carRental.perfil();
    assert.deepEqual(perfilCliente, cliente);
  });

  it("perfil empleado que ha iniciado sesion", function () {
    empleado = carRental.agregarEmpleado(empleado1);
    carRental.signin(empleado1.email, empleado1.password, empleado1.rol);
    const perfilEmpleado = carRental.perfil();
    assert.deepEqual(perfilEmpleado, empleado);
  });

  it("no tiene perfil porque es invitado", function () {
    assert.throws(() => {
      carRental.perfil();
    }, "Ningún usuario ha iniciado sesión.");
  });

  //apartado 20

  it("eliminar vehiculo", function () {
    let vehiculos = VEHICULOS.map((u) => carRental.agregarVehiculo(u));
    carRental.eliminarVehiculo(1);
  });
  it("eliminado previamente", function () {
    let vehiculos = VEHICULOS.map((u) => carRental.agregarVehiculo(u));
    carRental.eliminarVehiculo(1);
    assert.throws(() => {
        carRental.eliminarVehiculo(1);
      }, "El vehículo ya ha sido eliminado previamente.");
  });
  it("no esta disponible", function () {
    let vehiculos = VEHICULOS.map((u) => carRental.agregarVehiculo(u));
    empleado = carRental.agregarEmpleado(empleado1);
    carRental.signin(empleado1);
    carRental.reservar(1);
    assert.throws(() => {
        carRental.eliminarVehiculo(1);
      }, "El vehículo no está disponible para ser eliminado.");
  });

  //apartado 19

  //apartado 24
  it("clienteByEmail", function () {
    let clientes = CLIENTES.map((u) => carRental.agregarCliente(u));
    clientes.forEach((u) => {
      assert.deepEqual(u, carRental.clienteByEmail(u._email));
    });
  });
  //apartado 25
  it("empleadoByEmail", function () {
    let empleados = EMPLEADOS.map((u) => carRental.agregarEmpleado(u));
    empleados.forEach((u) => {
      assert.deepEqual(u, carRental.empleadoByEmail(u._email));
    });
  });
  //apartado 26
  it("vehiculoByMatricula", function () {
    let vehiculos = VEHICULOS.map((u) => carRental.agregarVehiculo(u));
    vehiculos.forEach((u) => {
      assert.deepEqual(u, carRental.vehiculoPorMatricula(u._matricula));
    });
  });

  //apartado 27
  it("reservasByNumero", function () {
    let reservas = RESERVAS.map((u) => carRental.agregarReserva(u));
    reservas.forEach((u) => {
      assert.deepEqual(u, carRental.reservaByNumero(u._numero));
    });
  });
  //apartado 28
  it("clienteById", function () {
    cliente = carRental.agregarCliente(cliente1);
    assert.deepEqual(cliente, carRental.clienteById(cliente1._id));
  });

  //Apartado 29
  it("empleadoById", function () {
    empleado = carRental.agregarEmpleado(empleado1);
    assert.deepEqual(empleado, carRental.empleadoById(empleado1._id));
  });

  //Apartado 30

  it("vehiculoById", function () {
    vehiculo = carRental.agregarVehiculo(vehiculo1);
    assert.deepEqual(vehiculo, carRental.vehiculoById(vehiculo1._id));
  });

    //Apartado 31

  it("reservasById", function () {

    vehiculo = carRental.agregarVehiculo(vehiculo1);
    cliente = carRental.agregarCliente(cliente1);
    carRental.signin(cliente1.email,cliente1.password,cliente1.rol);
    reserva = carRental.agregarReserva(reserva1.vehiculoId, reserva1.inicio, reserva1.fin);
    assert.deepEqual(reserva, carRental.reservaById(reserva1._id));
  });
});


