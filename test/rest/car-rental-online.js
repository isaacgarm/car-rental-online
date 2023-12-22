const assert = require("chai").assert;
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const URL = "http://localhost:3000/car-rental-online/api";

describe(URL, function () {
  const CLIENTES = [],
    EMPLEADOS = [];
  let clientes, empleados;

  before(async function () {
    CLIENTES.push({
      nombres: "Cliente 1",
      apellidos: "Apellido 1",
      dni: "12345678A",
      direccion: "Direccion 1",
      email: "cliente1@gmail.com",
      password: "Password1",
      telefono: "333222111",
      rol: "Cliente",
    });
    CLIENTES.push({
      nombres: "Cliente 2",
      apellidos: "Apellido 2",
      dni: "12345678B",
      direccion: "Direccion 2",
      email: "cliente2@gmail.com",
      password: "Password2",
      telefono: "444222111",
      rol: "Cliente",
    });
    CLIENTES.push({
      nombres: "Cliente 3",
      apellidos: "Apellido 3",
      dni: "12345678C",
      direccion: "Direccion 3",
      email: "cliente3@gmail.com",
      password: "Password3",
      telefono: "555222111",
      rol: "Cliente",
    });

    EMPLEADOS.push({
      nombres: "Empleado 1",
      apellidos: "Apellido 1",
      dni: "12345678A",
      direccion: "Direccion 1",
      email: "empleado1@gmail.com",
      password: "Password1",
      telefono: "333222111",
      rol: "Empleado",
    });
    EMPLEADOS.push({
      nombres: "Empleado 2",
      apellidos: "Apellido 2",
      dni: "12345678B",
      direccion: "Direccion 2",
      email: "empleado2@gmail.com",
      password: "Password2",
      telefono: "444222111",
      rol: "Empleado",
    });
    EMPLEADOS.push({
      nombres: "Empleado 3",
      apellidos: "Apellido 3",
      dni: "12345678C",
      direccion: "Direccion 3",
      email: "empleado3@gmail.com",
      password: "Password3",
      telefono: "555222111",
      rol: "Empleado",
    });
  });

  beforeEach(async function () {
    response = await chai.request(URL).put(`/clientes`).send(CLIENTES);
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    clientes = response.body;
    clientes.forEach((c, ic) => {
      assert.exists(c._id);
      assert.equal(c.obj, CLIENTES[ic].obj);
    });

    response = await chai.request(URL).put(`/empleados`).send(EMPLEADOS);
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    empleados = response.body;
    empleados.forEach((e, ie) => {
      assert.exists(e._id);
      assert.equal(e.obj, EMPLEADOS[ie].obj);
    });
  });

  //Clientes
  it(`GET ${URL}/clientes`, async function () {
    let response = await chai.request(URL).get("/clientes").send();
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    let resultado = response.body;
    assert.deepEqual(resultado, clientes);
  });

  it(`PUT ${URL}/clientes`, async function () {
    let CLIENTES2 = [
      {
        nombres: "Cliente 5",
        apellidos: "Apellido 5",
        dni: "12345678F",
        direccion: "Direccion 5",
        email: "cliente5@gmail.com",
        password: "Password5",
        telefono: "333222111",
        rol: "Cliente",
      },
      {
        nombres: "Cliente 6",
        apellidos: "Apellido 6",
        dni: "12345678G",
        direccion: "Direccion 6",
        email: "cliente6@gmail.com",
        password: "Password6",
        telefono: "555559999",
        rol: "Cliente",
      },
    ];
    let response = await chai.request(URL).put(`/clientes`).send(CLIENTES2);
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    let resultado = response.body;
    assert.equal(resultado.length, CLIENTES2.length);
    resultado.forEach((c, ic) => {
      assert.deepEqual(c.obj, CLIENTES2[ic].obj);
    });

    clientes = resultado;
    response = await chai.request(URL).get(`/clientes`).send();
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    resultado = response.body;
    assert.deepEqual(resultado, clientes);
  });

  it(`GET ${URL}/clientes/:clienteId`, async function () {
    let clienteId = clientes[0]._id;
    let response = await chai.request(URL).get(`/clientes/${clienteId}`).send();
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    let cliente = response.body;
    assert.exists(cliente._id);
    assert.equal(cliente.body, CLIENTES[0].body);
  });

    //Empleado
    it(`GET ${URL}/empleados`, async function () {
      let response = await chai.request(URL).get("/empleados").send();
      assert.equal(response.status, 200);
      assert.isTrue(response.ok);
      let resultado = response.body;
      assert.deepEqual(resultado, empleados);
    });
  
    it(`PUT ${URL}/empleados`, async function () {
      let EMPLEADOS2 = [
        {
          nombres: "Empleado 5",
          apellidos: "Apellido 5",
          dni: "12345678F",
          direccion: "Direccion 5",
          email: "empleado5@gmail.com",
          password: "Password5",
          telefono: "333222111",
          rol: "Empleado",
        },
        {
          nombres: "Empleado 6",
          apellidos: "Apellido 6",
          dni: "12345678G",
          direccion: "Direccion 6",
          email: "empleado6@gmail.com",
          password: "Password6",
          telefono: "555559999",
          rol: "Empleado",
        },
      ];
      let response = await chai.request(URL).put(`/empleados`).send(EMPLEADOS2);
      assert.equal(response.status, 200);
      assert.isTrue(response.ok);
      let resultado = response.body;
      assert.equal(resultado.length, EMPLEADOS2.length);
      resultado.forEach((c, ic) => {
        assert.deepEqual(c.obj, EMPLEADOS2[ic].obj);
      });
  
      clientes = resultado;
      response = await chai.request(URL).get(`/empleados`).send();
      assert.equal(response.status, 200);
      assert.isTrue(response.ok);
      resultado = response.body;
      assert.deepEqual(resultado, clientes);
    });
  
    it(`GET ${URL}/empleados/:empleadoId`, async function () {
      let empleadoId = empleados[0]._id;
      let response = await chai.request(URL).get(`/empleados/${empleadoId}`).send();
      assert.equal(response.status, 200);
      assert.isTrue(response.ok);
      let empleado = response.body;
      assert.exists(empleado._id);
      assert.equal(empleado.body, CLIENTES[0].body);
    });

  //Signup

  it(`POST ${URL}/signup`, async function () {
    let cliente =
      {
        nombres: "Cliente 5",
        apellidos: "Apellido 5",
        dni: "12345678F",
        direccion: "Direccion 5",
        email: "cliente5@gmail.com",
        password: "Password5",
        telefono: "333222111",
        rol: "Cliente",
      }
    let response = await chai.request(URL).post(`/signup`).send(cliente);
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    let usuario = response.body;
    assert.exists(usuario._id);
    assert.deepEqual(usuario._nombres, cliente.nombres);
  });

  //Signin

  it(`POST ${URL}/signin`, async function () {
    let response = await chai.request(URL).post(`/signin`).send({
      email: EMPLEADOS[0].email,
      password: EMPLEADOS[0].password,
      rol: EMPLEADOS[0].rol,
    });
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    let empleado = response.body;
    assert.exists(empleado.id);
    assert.equal(empleado.rol, EMPLEADOS[0].rol);
    assert.equal(empleado.email, EMPLEADOS[0].email);
    assert.equal(empleado.password, EMPLEADOS[0].password);
  });
  //     await chai.request(URL).post(`/signup`).send(CLIENTES[0]);
  //     let response = await chai.request(URL).post(`/signin`).send({
  //       email: CLIENTES[0].email,
  //       password: CLIENTES[0].password,
  //       rol: CLIENTES[0].rol,
  //     });
  //     console.log(response.body);
  //     assert.equal(response.status, 200);
  //     assert.isTrue(response.ok);
  //     let resultado = response.body;
  //     console.log("Es resutado", resultado);
  //     assert.exists(resultado.id);
  //     assert.equal(resultado.rol, CLIENTES[0].rol);
  //     assert.equal(resultado.email, CLIENTES[0].email);
  //     assert.equal(resultado.password, CLIENTES[0].password);
  //   });
  // });
});
