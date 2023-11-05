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
    const reservaExistente = this._reservas.find(
      (reserva) => reserva.vehiculoId === vehiculoId
    );

    if (!reservaExistente) {
      return true; // El vehículo no tiene reservas existentes, está disponible
    }

    // Verificar si las fechas de inicio y fin se superponen con la reserva existente
    const reservaInicio = new Date(reservaExistente.inicio);
    const reservaFin = new Date(reservaExistente.fin);
    const nuevaInicio = new Date(inicio);
    const nuevaFin = new Date(fin);

    if (
      (nuevaInicio >= reservaInicio && nuevaInicio <= reservaFin) ||
      (nuevaFin >= reservaInicio && nuevaFin <= reservaFin)
    ) {
      return false; // Hay superposición de fechas, el vehículo no está disponible
    }

    return true; // No hay superposición de fechas, el vehículo está disponible
  }

  disponibles(marca, modelo, tipo, etiqueta, costoDia, inicio, fin) {
    // Implementa la lógica para filtrar vehículos disponibles
    const vehiculosDisponibles = this._vehiculos.filter((vehiculo) => {
      // Filtrar vehículos basándote en los criterios de búsqueda
      const coincideMarca = vehiculo.marca === marca;
      const coincideModelo = vehiculo.modelo === modelo;
      const coincideTipo = vehiculo.tipo === tipo;
      const coincideEtiqueta = vehiculo.etiqueta === etiqueta;
      const coincideCostoDia = vehiculo.costoDia === costoDia;

      // Verificar disponibilidad usando la función disponibilidad()
      const estaDisponible = this.disponibilidad(vehiculo._id, inicio, fin);

      // Devolver true si el vehículo cumple con todos los criterios y está disponible
      return (
        coincideMarca &&
        coincideModelo &&
        coincideTipo &&
        coincideEtiqueta &&
        coincideCostoDia &&
        estaDisponible
      );
    });

    return vehiculosDisponibles;
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

    const vehiculo = { ...obj };
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
