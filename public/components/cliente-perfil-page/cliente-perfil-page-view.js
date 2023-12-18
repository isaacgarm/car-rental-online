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

    get direccionInput() {
      return document.getElementById('direccion');
    }
  
    get direccionInputValue() {
      return this.direccionInput.value;
    }

    get emailInput() {
      return document.getElementById('email');
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
  }