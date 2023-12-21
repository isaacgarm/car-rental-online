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
    let CLIENTE2 = {
      nombres: "Cliente 5",
      apellidos: "Apellido 5",
      dni: "12345678F",
      direccion: "Direccion 5",
      email: "cliente5@gmail.com",
      password: "Password5",
      telefono: "333222111",
      rol: "Cliente",
    };
    let response = await chai.request(URL).put(`/clientes`).send(CLIENTE2);
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    let resultado = response.body;
    assert.equal(resultado.length, CLIENTE2.length);
    resultado.forEach((c, ic) => {
      assert.deepEqual(c.obj, CLIENTE2[ic].obj);
    });

    clientes = resultado;
    response = await chai.request(URL).get(`/clientes`).send();
    assert.equal(response.status, 200);
    assert.isTrue(response.ok);
    resultado = response.body;
    assert.deepEqual(resultado, clientes);
  });
});
