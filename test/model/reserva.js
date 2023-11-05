const assert = require("chai").assert;
const Reserva = require("../../src/model/reserva");

describe("reserva", function () {
  let reserva;
  const rId = "1";
  const inicio = '2023-06-24';
  const fin = '2023-06-30';
  const costo = '98.13';
  const numero = '1';
  const entrega = '2023-06-25';
  const devolucion = '2023-06-29';
  const fecha = '2023-06-22';
  const clienteId  = '1';
  const vehiculoId = '1';

  beforeEach(function () {
    reserva = new Reserva(rId);
  });

  it("constructor reserva", function () {
    assert.equal(reserva._id, rId);
  });


  it("getter inicio", function () {
    assert.equal(reserva.inicio, inicio);
  });

  it("setter inicio", function () {
    const inicio2 = '2023-06-26';
    reserva.inicio = inicio2;
    assert.equal(reserva._inicio, inicio2);
  });

  it("getter fin", function () {
    assert.equal(reserva.fin, fin);
  });

  it("setter fin", function () {
    const fin2 = '2023-06-27';
    reserva.fin = fin2;
    assert.equal(reserva._fin, fin2);
  });

  it("getter costo", function () {
    assert.equal(reserva.costo, costo);
  });

  it("setter costo", function () {
    const costo2 = '105.00';
    reserva.costo = costo2;
    assert.equal(reserva._costo, costo2);
  });

  it("getter numero", function () {
    assert.equal(reserva.numero, numero);
  });

  it("setter numero", function () {
    const numero2 = '2';
    reserva.numero = numero2;
    assert.equal(reserva._numero, numero2);
  });

  it("getter entrega", function () {
    assert.equal(reserva.entrega, entrega);
  });

  it("setter entrega", function () {
    const entrega2 = '2023-06-25';
    reserva.entrega = entrega2;
    assert.equal(reserva._entrega, entrega2);
  });

  it("getter devolucion", function () {
    assert.equal(reserva.devolucion, devolucion);
  });

  it("setter devolucion", function () {
    const devolucion2 = '2023-06-30';
    reserva.devolucion = devolucion2;
    assert.equal(reserva._devolucion, devolucion2);
  });

  it("getter fecha", function () {
    assert.equal(reserva.fecha, fecha);
  });

  it("setter fecha", function () {
    const fecha2 = '2023-06-23';
    reserva.fecha = fecha2;
    assert.equal(reserva._fecha, fecha2);
  });

  it("getter clienteId", function () {
    assert.equal(reserva.fecha, fecha);
  });

  it("setter clienteId", function () {
    const fecha2 = '2023-06-23';
    reserva.fecha = fecha2;
    assert.equal(reserva._fecha, fecha2);
  });

  it("getter vehiculoId", function () {
    assert.equal(reserva.fecha, fecha);
  });

  it("setter vehiculoId", function () {
    const fecha2 = '2023-06-23';
    reserva.fecha = fecha2;
    assert.equal(reserva._fecha, fecha2);
  });


});