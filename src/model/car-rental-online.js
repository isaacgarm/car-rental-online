const Cliente = require("./cliente");
const Empleado = require("./empleado");
const vehiculo = require("./vehiculo");

class CarRentalOnline {
  lastId;
  _clientes;
  _empleados;
  _vehiculos;
  _reservas;
  usuario;
  constructor() {
    this._vehiculos = [];
    this._clientes = [];
    this._empleados = [];
    this.lastId = 0;
    this.usuario = null;
    this._reservas = [];
  }

  genId() {
    return ++this.lastId;
  }

  getClientes() {
    return this._clientes;
  }

  getVehiculos() {
    return this._vehiculos;
  }

  getReservas() {
    return this._reservas;
  }

  getEmpleados() {
    return this._empleados;
  }

  agregarCliente(obj) {
    if (this._clientes.find((cliente) => cliente.dni === obj.dni)) {
      throw new Error("El cliente ya existe.");
    }
    let cliente = new Cliente(this.genId(), dni);
    cliente.nombres = obj.nombres;
    cliente.apellidos = obj.apellidos;
    cliente.direccion = obj.direccion;
    cliente.rol = obj.rol;
    cliente.email = obj.email;
    cliente.password = obj.password;
    cliente.telefono = obj.telefono;
    this._clientes.push(cliente);
    return cliente;
  }

  agregarEmpleado(obj) {
    if (this._empleados.find((empleado) => empleado.dni === obj.dni)) {
      throw new Error("El empleado ya existe.");
    }
    let empleado = new Empelado(this.genId(), dni);
    empleado.nombres = obj.nombres;
    empleado.apellidos = obj.apellidos;
    empleado.direccion = obj.direccion;
    empleado.rol = obj.rol;
    empleado.email = obj.email;
    empleado.password = obj.password;
    empleado.telefono = obj.telefono;
    this.empleados.push(empleado);
    return empleado;
  }

  signin(email, password, rol) {
    const collection = rol === "Cliente" ? this._clientes : this._empleados;
    const user = collection.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      this.usuario = user;
    } else {
      throw new Error("Credenciales inválidas.");
    }
  }

  signup(obj) {
    const collection = obj.rol === "Cliente" ? this._clientes : this._empleados;

    if (collection.find((user) => user.email === obj.email)) {
      throw new Error("El email ya está registrado.");
    }

    const newUser = { ...obj };
    collection.push(newUser);
  }

  signout() {
    this.usuario = null;
  }

  disponibilidad(vehiculoId, inicio, fin) {
    const reserva = this._reservas.find(
      (reserva) => reserva.vehiculoId === vehiculoId
    );

    if (!reserva) {
      return true;
    }

    // Verificar disponibilidad con las fechas de inicio y fin
    // Implementa tu lógica para verificar las fechas aquí
  }

  disponibles(marca, modelo, tipo, etiqueta, costoDia, inicio, fin) {
    // Implementa la lógica para filtrar vehículos disponibles
  }

  perfil() {
    if (!this.usuario) {
      throw new Error("Ningún usuario ha iniciado sesión.");
    }

    return this.usuario;
  }

  reservar(vehiculoId, inicio, fin) {
    // Implementa la lógica para realizar una reserva
  }

  cancelar(numero) {
    // Implementa la lógica para cancelar una reserva
  }

  agregarVehiculo(obj) {
    if (
      this._vehiculos.some((vehiculo) => vehiculo.matricula === obj.matricula)
    ) {
      throw new Error("Vehículo con la misma matrícula ya existe.");
    }
    let vehiculo = new Vehiculo(this.genId(), matricula);
    vehiculo.marca = obj.marca;
    vehiculo.modelo = obj.modelo;
    vehiculo.etiqueta = obj.etiqueta;
    vehiculo.costoDia = obj.costoDia;
    vehiculo.descripcion = obj.descripcion;
    this.vehiculo.push(vehiculo);
    return vehiculo;

    //const vehiculo = { ...obj };
    this._vehiculos.push(vehiculo);
  }

  eliminarVehiculo(vehiculoId) {
    // Implementa la lógica para eliminar un vehículo
  }

  entregarVehiculo(numero) {
    // Implementa la lógica para cambiar el estado del vehículo
  }

  devolverVehiculo(numero) {
    // Implementa la lógica para cambiar el estado del vehículo
  }

  reservas(clienteId) {
    // Implementa la lógica para obtener las reservas de un cliente
  }

  clienteByEmail(email) {
    return this._clientes.find((cliente) => cliente.email === email) || null;
  }

  empleadoByEmail(email) {
    return this._empleados.find((empleado) => empleado.email === email) || null;
  }

  vehiculoPorMatricula(matricula) {
    return (
      this._vehiculos.find((vehiculo) => vehiculo.matricula === matricula) ||
      null
    );
  }

  reservaByNumero(numero) {
    return this._reservas.find((reserva) => reserva.numero === numero) || null;
  }

  clienteById(clienteId) {
    return this._clientes.find((cliente) => cliente.id === clienteId) || null;
  }

  empleadoById(empleadoId) {
    return (
      this._empleados.find((empleado) => empleado.id === empleadoId) || null
    );
  }

  vehiculoById(vehiculoId) {
    return (
      this._vehiculos.find((vehiculo) => vehiculo.id === vehiculoId) || null
    );
  }

  reservaById(reservaId) {
    return this._reservas.find((reserva) => reserva.id === reservaId) || null;
  }
}

module.exports = CarRentalOnline;
