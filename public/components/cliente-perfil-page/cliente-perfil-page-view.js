class ClientePerfilPageView extends PageView {
    constructor() {
      super("cliente-perfil-page");
    }

    get form() {
      return document.getElementById('setPerfilFormId');
    }

    get usuarioDniInput() {
      return document.getElementById('dni');
    }
  
    get usuarioDniInputValue() {
      return this.usuarioDniInput.value;
    }

    set usuarioDniValue(val) {
       this.usuarioDniInput.value = val;
    }

    get nombreInput() {
      return document.getElementById('nombre');
    }
  
    get nombreInputValue() {
      return this.nombreInput.value;
    }

    set nombreValue(val) {
       this.nombreInput.value = val;
    }

    get apellidoInput() {
      return document.getElementById('apellido');
    }
  
    get apellidoInputValue() {
      return this.apellidoInput.value;
    }

    set apellidoValue(val) {
       this.apellidoInput.value = val;
    }

    get direccionInput() {
      return document.getElementById('direccion');
    }
  
    get direccionInputValue() {
      return this.direccionInput.value;
    }

    set direccionValue(val) {
       this.direccionInput.value = val;
    }

    get emailInput() {
      return document.getElementById('email');
    }
  
    get emailInputValue() {
      return this.emailInput.value;
    }

    set emailValue(val) {
       this.emailInput.value = val;
    }

    get telefonoInput() {
      return document.getElementById('telefono');
    }
  
    get telefonoInputValue() {
      return this.telefonoInput.value;
    }

    set telefonoValue(val) {
       this.telefonoInput.value = val;
    }

    get contrasena1Input() {
      return document.getElementById('contrasena1');
    }
  
    get contrasena1InputValue() {
      return this.contrasena1Input.value;
    }


    get contrasena2Input() {
      return document.getElementById('contrasena2');
    }
  
    get contrasena2InputValue() {
      return this.contrasena2Input.value;
    }

 

    async refresh(url){
      await super.refresh(url);
      let p = this.controller.getPerfil();

      this.nombreValue = p.nombres;
      this.apellidoValue = p.apellidos;
      this.usuarioDniValue = p.dni;
      this.direccionValue = p.direccion;
      this.telefonoValue = p.telefono;
      this.emailValue = p.email;

    }
 
  }