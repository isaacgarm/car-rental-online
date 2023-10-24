const TipoVehiculo = require("./tipo-vehiculo")
const Etiqueta = require("./etiqueta")

class Vehiculo{
    _id; 
    _matricula; 
    _marca; 
    _modelo; 
    _etiqueta; 
    _tipo; 
    _disponible;
    _eliminado; 
    _costoDia; 
    _descripcion;

    get matricula() { return this._matricula; }
    get marca() { return this._marca; }
    get modelo() { return this._modelo; }
    get etiqueta() { return this._etiqueta; }
    get tipo() { return this._tipo; }
    get disponible() { return this._disponible; }
    get eliminado() { return this._eliminado; }
    get costoDia() { return this._costoDia; }
    get descripcion() { return this._descripcion; }

    set matricula(matricula) { this._matricula = matricula; }
    set marca(marca) { this._marca = marca; }
    set modelo(modelo) { this._modelo = modelo; }
    set etiqueta(etiqueta) { this._etiqueta = etiqueta; }
    set tipo(tipo) { this._tipo = tipo; }
    set disponible(disponible) { this._disponible = disponible; }
    set eliminado(eliminado) { this._eliminado = eliminado; }
    set costoDia(costoDia) { this._costoDia = costoDia; }
    set descripcion(descripcion) { this._descripcion = descripcion; }

    constructor(id){ this.id = id;}

} 
module.exports = Vehiculo;