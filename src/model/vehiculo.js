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

    constructor(_id, matricula, marca, modelo, etiqueta, tipo, disponible, eliminado, costoDia, descripcion){ 
        this._id =_id;
        this._matricula = matricula; 
        this._marca = marca;
        this._modelo = modelo;
        this._etiqueta = etiqueta;
        this._tipo = tipo;
        this._disponible = disponible;
        this._eliminado = eliminado;
        this._costoDia = costoDia;
        this._descripcion = descripcion;
    }

} 
module.exports = Vehiculo;