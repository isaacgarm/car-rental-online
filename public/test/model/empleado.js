describe("empleado", function () {
  let empleado;
  const eId = "1";
  const rol = Rol.Empleado;
  const nombres = 'Empleado 1';
  const dni = '11345678A';
  const apellidos = 'ApellidoEmpleado 1';
  const direccion = 'DireccionEmpleado 1';
  const email = 'empleado1@gmail.com';
  const password = 'Password1';
  const telefono = '444222111';


  beforeEach(function () {
    empleado = new Empleado(eId, nombres, apellidos, dni, direccion,email , password, telefono);
  });

  it("constructor empleado", function () {
    assert.equal(empleado._id, eId);
  });

  it("getter rol", function () {
    assert.equal(empleado._rol, Rol.Empleado);
  });

  it("setter rol", function () {
    const rol2 = Rol.Empleado;
    empleado.rol = rol2;
    assert.equal(empleado._rol, rol2);
  });

  it("getter dni", function () {
    console.log(dni);
    assert.equal(empleado.dni, dni);
  });

  it("setter dni", function () {
    const dni2 = '97654321A';
    empleado.dni = dni2;
    assert.equal(empleado._dni, dni2);
  });

  it("getter nombres", function () {
    assert.equal(empleado.nombres, nombres);
  });

  it("setter nombres", function () {
    const nombres2 = 'Empleado 2';
    empleado.nombres = nombres2;
    assert.equal(empleado._nombres, nombres2);
  });

  it("getter apellidos", function () {
    assert.equal(empleado.apellidos, apellidos);
  });

  it("setter apellidos", function () {
    const apellidos2 = 'Apellido 2';
    empleado.apellidos = apellidos2;
    assert.equal(empleado._apellidos, apellidos2);
  });

  it("getter direccion", function () {
    assert.equal(empleado.direccion, direccion);
  });

  it("setter direccion", function () {
    const direccion2 = 'Direccion 2';
    empleado.direccion = direccion2;
    assert.equal(empleado._direccion, direccion2);
  });

  it("getter email", function () {
    assert.equal(empleado.email, email);
  });

  it("setter email", function () {
    const email2 = 'empleado2@gmail.com';
    empleado.email = email2;
    assert.equal(empleado._email, email2);
  });

  it("getter password", function () {
    assert.equal(empleado.password, password);
  });

  it("setter password", function () {
    const password2 = 'password2';
    empleado.password = password2;
    assert.equal(empleado._password, password2);
  });

  it("getter telefono", function () {
    assert.equal(empleado.telefono, telefono);
  });

  it("setter telefono", function () {
    const telefono2 = '111222333';
    empleado.telefono = telefono2;
    assert.equal(empleado._telefono, telefono2);
  });



});
