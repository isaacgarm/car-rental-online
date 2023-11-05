

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

    constructor(_id) {
        this._id = _id;
        this._inicio = "";
        this._fin = "";
        this._costo = "";
        this._numero = "";
        this._entrega = "";
        this._devolucion = "";
        this._fecha = "";
        this._clienteId = "";
        this._vehiculoid = "";
      }
    
    set inicio(inicio) { this._inicio = inicio; }
    set fin(fin) { this._fin = fin; }
    set costo(costo) { this._costo = costo; }
    set numero(numero) { this._numero = numero; }
    set entrega(entrega) { this._entrega = entrega; }
    set devolucion(devolucion) { this._devolucion = devolucion; }
    set fecha(fecha) { this._fecha = fecha; }
    /**
     * @param {string} clienteId
     */
    set clienteId(clienteId) { this._clienteId = clienteId; }
    /**
     * @param {any} vehiculoId
     */
    set vehiculoId(vehiculoId) { this._vehiculoId = vehiculoId; }
    
    get inicio() { return this.inicio; }
    get fin() { return this._fin; }
    get costo() { return this._costo; }
    get numero() { return this._numero; }
    get entrega() { return this._entrega; }
    get devolucion() { return this._devolucion; }
    get fecha() { return this._fecha; }
    get _clienteId() { return this._clienteId; }
    get _vehiculoId() { return this._vehiculoId; }


}
    module.exports = Reserva;
