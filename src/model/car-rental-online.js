const Cliente = require("./cliente");
const Empleado = require("./empleado");
const Vehiculo = require("./vehiculo");
const Reserva = require("../../src/model/reserva");
const Rol = require("./rol")

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
    this.lastNumRes = 0;
    this.usuario = null;
    this._reservas = [];
  }

  genId() {
    return ++this.lastId;
  }

  genNumeroReserva(){
    return ++this.lastNumRes;
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
    if (this._clientes.find((cliente) => cliente.email === obj.email)) {
      throw new Error("El cliente ya existe.");
    }
    if (obj.rol !== Rol.Cliente){
      throw new Error("El objeto no es un cliente.");

    }
    let cliente = new Cliente(this.genId(), obj);
    cliente.nombres = obj.nombres;
    cliente.apellidos = obj.apellidos;
    cliente.dni= obj.dni;
    cliente.direccion = obj.direccion;
    cliente.rol = obj.rol;
    cliente.email = obj.email;
    cliente.password = obj.password;
    cliente.telefono = obj.telefono;
    this._clientes.push(cliente); 
    return cliente;
  }

  agregarEmpleado(obj) {
    if (this._empleados.find((empleado) => empleado.email === obj.email)) {
      throw new Error("El empleado ya existe.");
    }
    if (obj.rol !== Rol.Empleado){
      throw new Error("El objeto no es un empleado.");

    }
    let empleado = new Empleado(this.genId(), obj);
    empleado.nombres = obj.nombres;
    empleado.apellidos = obj.apellidos;
    empleado.dni = obj.dni;
    empleado.direccion = obj.direccion;
    empleado.rol = obj.rol;
    empleado.email = obj.email;
    empleado.password = obj.password;
    empleado.telefono = obj.telefono;
    this._empleados.push(empleado);
    return empleado;
  }

  agregarVehiculo(obj) {
    if (this._vehiculos.find((vehiculo) => vehiculo.vehiculoId === obj.vehiculoId)) {
      throw new Error("El vehículo ya existe.");
    }
    let vehiculo = new Vehiculo(this.genId());
    vehiculo.matricula = obj.matricula;
    vehiculo.marca = obj.marca;
    vehiculo.modelo = obj.modelo;
    vehiculo.etiqueta = obj.etiqueta;
    vehiculo.tipo = obj.tipo;
    vehiculo.disponible = obj.disponible;
    vehiculo.eliminado = obj.eliminado;
    vehiculo.costoDia = obj.costoDia;
    vehiculo.descripcion = obj.descripcion;
    this._vehiculos.push(vehiculo);
    return vehiculo;
  }

  agregarReserva(obj) {
 
    const nuevaReserva = new Reserva(
        this.genId(),
        obj.inicio,
        obj.fin,
        obj.costo,
        obj.numero,
        null, // entrega, inicialmente nula
        null, // devolucion, inicialmente nula
        new Date(),
        obj.clienteId,
        obj.vehiculoId
    );

    this._reservas.push(nuevaReserva);
    return nuevaReserva;
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

    const nuevoUsuario = { ...obj };
    collection.push(nuevoUsuario);
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

  //apartado 14
  disponibles({ marca, modelo, tipo, etiqueta, costoDia, inicio, fin }) {
    const vehiculosDisponibles = this._vehiculos.filter((vehiculo) => {
      const {
        marca: vehiculoMarca,
        modelo: vehiculoModelo,
        tipo: vehiculoTipo,
        etiqueta: vehiculoEtiqueta,
        costoDia: vehiculoCostoDia
      } = vehiculo;
  
      // Verificar si los parámetros no son undefined y coinciden con los del vehículo
      const coincideMarca = !marca || vehiculoMarca === marca;
      const coincideModelo = !modelo || vehiculoModelo === modelo;
      const coincideTipo = !tipo || vehiculoTipo === tipo;
      const coincideEtiqueta = !etiqueta || vehiculoEtiqueta === etiqueta;
      const coincideCostoDia = !costoDia || vehiculoCostoDia <= costoDia;
  
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

  //Apartado 16
  reservar(vehiculoId, inicio, fin) {
    if (!this.usuario) {
      throw new Error("Ningún usuario ha iniciado sesión.");
    }
  
    const vehiculo = this._vehiculos.find((vehiculo) => vehiculo._id === vehiculoId); //encuentrame un vehiculo dentro de vehiculos[] cuya id sea igual a la pasada por parametro
  
    if (!vehiculo) {
      throw new Error("Vehículo no encontrado.");
    }
  
    const estaDisponible = this.disponibilidad(vehiculoId, inicio, fin);
  
    if (!estaDisponible) {
      throw new Error("El vehículo no está disponible en las fechas seleccionadas.");
    }
  
    const costoPorDia = vehiculo.costoDia;
    const fechaInicio = new Date(inicio);
    const fechaFin = new Date(fin);
    const diasReserva = Math.floor((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)) + 1;
    const costoTotal = costoPorDia * diasReserva;
  
    const nuevaReserva = new Reserva(
      this.genId(),
      inicio,
      fin,
      costoTotal,
      this.genNumeroReserva(),
      new Date(),
      null,
      new Date(),
      this.usuario._id,
      vehiculoId
    );
  
    this._reservas.push(nuevaReserva);
  
    return nuevaReserva;
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
