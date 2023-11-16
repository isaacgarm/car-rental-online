const Cliente = require("./cliente");
const Empleado = require("./empleado");
const Vehiculo = require("./vehiculo");
const Reserva = require("../../src/model/reserva");
const Rol = require("./rol");

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

  genNumeroReserva() {
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
    if (obj.rol !== Rol.Cliente) {
      throw new Error("El objeto no es un cliente.");
    }
    let cliente = new Cliente(this.genId(), obj);
    cliente.nombres = obj.nombres;
    cliente.apellidos = obj.apellidos;
    cliente.dni = obj.dni;
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
    if (obj.rol !== Rol.Empleado) {
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
    if (
      this._vehiculos.find((vehiculo) => vehiculo.matricula === obj.matricula)
    ) {
      throw new Error("La matrícula ya existe.");
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
    if (
      this._reservas.find((reserva) => reserva.vehiculoId === obj.vehiculoId)
    ) {
      throw new Error("Ese vehículo ya está reservado.");
    }
    let reserva = new Reserva(this.genId());
    reserva.inicio = obj.inicio;
    reserva.fin = obj.fin;
    reserva.costo = obj.costo;
    reserva.numero = obj.numero;
    reserva.entrega = obj.entrega;
    reserva.devolucion = obj.devolucion;
    reserva.fecha = obj.fecha;
    reserva.clienteId = obj.clienteId;
    reserva.vehiculoId = obj.vehiculoId;

    //console.log('Reserva agregada:', reserva);
    this._reservas.push(reserva);
    return reserva;
  }

  signin(email, password, rol) {
    const collection = rol === "Cliente" ? this._clientes : this._empleados;
    let user = collection.find(
      (u) => u.email === email && u.password === password
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
    const reservaInicio = reservaExistente.inicio.getTime();
    const reservaFin = reservaExistente.fin.getTime();
    const nuevaInicio = inicio.getTime();
    const nuevaFin = fin.getTime();

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
        costoDia: vehiculoCostoDia,
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

    const vehiculo = this._vehiculos.find(
      (vehiculo) => vehiculo._id === vehiculoId
    ); //encuentrame un vehiculo dentro de vehiculos[] cuya id sea igual a la pasada por parametro

    if (!vehiculo) {
      throw new Error("Vehiculo no encontrado.");
    }

    const estaDisponible = this.disponibilidad(vehiculoId, inicio, fin);

    if (!estaDisponible) {
      throw new Error(
        "El vehículo no está disponible en las fechas seleccionadas."
      );
    }

    const costoPorDia = vehiculo.costoDia;
    const fechaInicio = new Date(inicio);
    const fechaFin = new Date(fin);
    const diasReserva =
      Math.floor((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)) + 1;
    const costoTotal = costoPorDia * diasReserva;

    let nuevaReserva = new Reserva(this.genId());
    nuevaReserva.inicio = inicio;
    nuevaReserva.fin = fin;
    nuevaReserva.costoTotal = costoTotal;
    nuevaReserva.numero = vehiculoId;
    nuevaReserva.entrega = inicio;
    nuevaReserva.devolucion = fin;
    nuevaReserva.fecha = inicio;
    nuevaReserva.clienteId = this.usuario._id;
    nuevaReserva.vehiculoId = vehiculoId;

    this._reservas.push(nuevaReserva);

    return nuevaReserva;
  }

  cancelar(numero) {
    const reservaCancelarIndex = this._reservas.findIndex(
      (reserva) => reserva.numero === numero
    );

    if (reservaCancelarIndex === -1) {
      throw new Error("Reserva no encontrada.");
    }

    const reservaCancelar = this._reservas[reservaCancelarIndex];

    if (reservaCancelar.clienteId !== this.usuario._id) {
      throw new Error("No tienes permisos para cancelar esta reserva.");
    }

    if (reservaCancelar.entrega) {
      throw new Error("La reserva ya ha sido entregada, no se puede cancelar.");
    }

    // Elimina la reserva del array de reservas
    this._reservas.splice(reservaCancelarIndex, 1);

    return "Reserva cancelada con éxito.";
  }

  eliminarVehiculo(vehiculoId) {
    const vehiculoIndex = this._vehiculos.findIndex(
      (vehiculo) => vehiculo._id === vehiculoId
    );

    if (vehiculoIndex === -1) {
      throw new Error("Vehículo no encontrado.");
    }

    const vehiculoEliminar = this._vehiculos[vehiculoIndex];

    if (!vehiculoEliminar.disponible) {
      throw new Error("El vehículo no está disponible para ser eliminado.");
    }

    if (vehiculoEliminar.eliminado) {
      throw new Error("El vehículo ya ha sido eliminado previamente.");
    }
    // Realizar el borrado lógico del vehículo
    vehiculoEliminar.eliminado = true;

    return "Vehículo eliminado con éxito.";
  }

  entregarVehiculo(numero) {
    const reservaEntregar = this._reservas.find(
      (reserva) => reserva.numero === numero
    );

    if (!reservaEntregar) {
      throw new Error("Reserva no encontrada.");
    }

    const vehiculoEntregar = this._vehiculos.find(
      (vehiculo) => vehiculo._id === reservaEntregar.vehiculoId
    );

    if (!vehiculoEntregar || !vehiculoEntregar.disponible) {
      throw new Error("El vehículo no está disponible para ser entregado.");
    }

    // Cambia el estado del vehículo a no disponible
    vehiculoEntregar.disponible = false;

    // Establece la fecha de entrega en la reserva
    reservaEntregar.entrega = new Date();

    return "Vehículo entregado con éxito.";
  }

  devolverVehiculo(numero) {
    const reservaDevolver = this._reservas.find(
      (reserva) => reserva.numero == numero
    );

    if (!reservaDevolver) {
      throw new Error("Reserva no encontrada");
    }

    if (!reservaDevolver.entrega) {
      throw new Error("El vehiculo no ha sido entregado");
    }

    const vehiculoDevolver = this._vehiculos.find(
      (vehiculo) => vehiculo._id === reservaDevolver.vehiculoId
    );

    if (!vehiculoDevolver || vehiculoDevolver.disponible) {
      throw new Error("El vehículo no está disponible para ser devuelto.");
    }

    // Cambia el estado del vehículo a disponible
    vehiculoDevolver.disponible = true;

    // Establece la fecha de devolución en la reserva
    reservaDevolver.devolucion = new Date();

    return "Vehículo devuelto con éxito.";
  }

  reservas(clienteId) {
    const cliente = this._clientes.find((cliente) => cliente._id === clienteId);

    if (!cliente) {
      throw new Error("Cliente no encontrado.");
    }

    const reservasCliente = this._reservas.filter(
      (reserva) => reserva.clienteId === clienteId
    );

    return reservasCliente;
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
