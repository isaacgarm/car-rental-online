

class Reserva{

    _id;
    _inicio;
    _fin;
    _costo;
    _numero;
    _entrega;
    _devolucion;
    _fecha;
    _clienteId;
    _vehiculoId;

    get inicio() { return this.inicio; }
    get fin() { return this._fin; }
    get costo() { return this._costo; }
    get numero() { return this._numero; }
    get entrega() { return this._entrega; }
    get devolucion() { return this._devolucion; }
    get fecha() { return this._fecha; }
    get _clienteId() { return this._clienteId; }
    get _vehiculoId() { return this._vehiculoId; }

    set inicio(inicio) { this._inicio = inicio; }
    set fin(fin) { this._fin = fin; }
    set costo(costo) { this._costo = costo; }
    set numero(numero) { this._numero = numero; }
    set entrega(entrega) { this._entrega = entrega; }
    set devolucion(devolucion) { this._devolucion = devolucion; }
    set fecha(fecha) { this._fecha = fecha; }
    set _clienteId(_clienteId) { this._clienteId = clienteId; }
    set _vehiculoId(_vehiculoId) { this._vehiculoId = vehiculoId; }

    constructor(id){ this.id = id;}

}

