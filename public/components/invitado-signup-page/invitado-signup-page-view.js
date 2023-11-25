class InvitadoSignupPageView extends PageView {
    constructor() {
      super("invitado-signup-page-view");
    }
    get form() {
        return document.getElementById('agregarFormId');
      }
    
      get rolUsuarioSelect() {
        return document.getElementById('rol');
      }
    
      get rolUsuarioSelectValue() {
        return this.rolUsuarioSelect.value;
      }
    
      get usuarioDniInput() {
        return document.getElementById('usuarioDni');
      }
    
      get usuarioDniInputValue() {
        return this.usuarioDniInput.value;
      }
    
      get nombreInput() {
        return document.getElementById('nombre');
      }
    
      get nombreInputValue() {
        return this.nombreInput.value;
      }
    
      get apellidoInput() {
        return document.getElementById('apellido');
      }
    
      get apellidoInputValue() {
        return this.apellidoInput.value;
      }
    
      get emailInput() {
        return document.getElementById('e-mail');
      }
    
      get emailInputValue() {
        return this.emailInput.value;
      }
    
      get telefonoInput() {
        return document.getElementById('telefono');
      }
    
      get telefonoInputValue() {
        return this.telefonoInput.value;
      }
    
      get direccionInput() {
        return document.getElementById('direccion');
      }
    
      get direccionInputValue() {
        return this.direccionInput.value;
      }
    
      get contrasenaInput() {
        return document.getElementById('contrasena');
      }
    
      get contrasenaInputValue() {
        return this.contrasenaInput.value;
      }
}