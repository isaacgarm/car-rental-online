class EmpleadoAgregarVehiculoPageView extends PageView{
    constructor() { super('empleado-agregar-vehiculo-page') }
    
    get form() { return document.getElementById('agregarFormId'); }
    get vehiculoModeloInput() { return document.getElementById('modeloInputTextId'); }
    get vehiculoModeloInputValue() { return this.vehiculoModeloInput.value; }
}