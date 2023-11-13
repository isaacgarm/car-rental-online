describe("cliente", function () {
  let cliente;
  const cId = "1";
  let rol = Rol.Cliente;
  const nombres = 'Cliente 1';
  const dni = '12345678A';
  const apellidos = 'Apellido 1';
  const direccion = 'Direccion 1';
  const email = 'cliente1@gmail.com';
  const password = 'Password1';
  const telefono = '333222111';
  let DNI = "12345678A";

  beforeEach(function () {
    cliente = new Cliente(cId, nombres, apellidos, dni, direccion,email , password, telefono);
  });

  it("constructor cliente", function () {
    assert.equal(cliente._id, cId);
    assert.equal(cliente._rol, Rol.Cliente);
  });

  it("getter rol", function () {
    assert.equal(cliente._rol, Rol.Cliente);
  });

  it("setter rol", function () {
    const rol2 = Rol.Cliente;
    cliente.rol = rol2;
    assert.equal(cliente._rol, rol2);
  });

  it("getter dni", function () {
    console.log(dni);
    console.log(DNI);
    console.log(cliente);
    assert.equal(cliente.dni, dni);
  });

  it("setter dni", function () {
    const dni2 = '87654321A';
    cliente.dni = dni2;
    assert.equal(cliente._dni, dni2);
  });

  it("getter nombres", function () {
    assert.equal(cliente.nombres, nombres);
  });

  it("setter nombres", function () {
    const nombres2 = 'Cliente 2';
    cliente.nombres = nombres2;
    assert.equal(cliente._nombres, nombres2);
  });

  it("getter apellidos", function () {
    assert.equal(cliente.apellidos, apellidos);
  });

  it("setter apellidos", function () {
    const apellidos2 = 'Apellido 2';
    cliente.apellidos = apellidos2;
    assert.equal(cliente._apellidos, apellidos2);
  });

  it("getter direccion", function () {
    assert.equal(cliente.direccion, direccion);
  });

  it("setter direccion", function () {
    const direccion2 = 'Direccion 2';
    cliente.direccion = direccion2;
    assert.equal(cliente._direccion, direccion2);
  });

  it("getter email", function () {
    assert.equal(cliente.email, email);
  });

  it("setter email", function () {
    const email2 = 'cliente2@gmail.com';
    cliente.email = email2;
    assert.equal(cliente._email, email2);
  });

  it("getter password", function () {
    assert.equal(cliente.password, password);
  });

  it("setter password", function () {
    const password2 = 'password2';
    cliente.password = password2;
    assert.equal(cliente._password, password2);
  });

  it("getter telefono", function () {
    assert.equal(cliente.telefono, telefono);
  });

  it("setter telefono", function () {
    const telefono2 = '111222333';
    cliente.telefono = telefono2;
    assert.equal(cliente._telefono, telefono2);
  });

});