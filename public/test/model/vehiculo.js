
describe("vehiculo", function () {
    let vehiculo;
    const vId = "1";
    const etiqueta = Etiqueta.ECO;
    const tipo = TipoVehiculo.A;
    const matricula = 'AAA0000';
    const marca = 'SEAT';
    const modelo = 'LEON';
    const disponible = true;
    const eliminado = false;
    const costoDia = 50;
    const descripcion = 'SEAT LEON';

    beforeEach(function () {
        vehiculo = new Vehiculo(vId, matricula, marca, modelo, etiqueta, tipo, disponible, eliminado, costoDia, descripcion);
      });
    
      it("constructor vehiculo", function () {
        assert.equal(vehiculo._id, vId);
      });

           it("getter etiqueta", function () {
        assert.equal(vehiculo.etiqueta, etiqueta);
      });
    
      it("setter etiqueta", function () {
        const etiqueta2 = Etiqueta.Vehiculo;
        vehiculo.etiqueta = etiqueta2;
        assert.equal(vehiculo._etiqueta, etiqueta2);
      });

    
      it("getter etiqueta", function () {
        assert.equal(vehiculo.etiqueta, etiqueta);
      });
    
      it("setter etiqueta", function () {
        const etiqueta2 = Etiqueta.Vehiculo;
        vehiculo.etiqueta = etiqueta2;
        assert.equal(vehiculo._etiqueta, etiqueta2);
      });

      it("getter tipo", function () {
        assert.equal(vehiculo.tipo, tipo);
      });
    
      it("setter tipo", function () {
        const tipo2 = TipoVehiculo.Vehiculo;
        vehiculo.tipo = tipo2;
        assert.equal(vehiculo._tipo, tipo2);
      });

      it("getter matricula", function () {
        assert.equal(vehiculo.matricula, matricula);
      });
    
      it("setter matricula", function () {
        const matricula2 = matricula.Vehiculo;
        vehiculo.matricula = matricula2;
        assert.equal(vehiculo._matricula, matricula2);
      });


      it("getter marca", function () {
        assert.equal(vehiculo.marca, marca);
      });
    
      it("setter marca", function () {
        const marca2 = 'TOYOTA';
        vehiculo.marca = marca2;
        assert.equal(vehiculo._marca, marca2);
      });

      it("getter modelo", function () {
        assert.equal(vehiculo.modelo, modelo);
      });
    
      it("setter modelo", function () {
        const modelo2 = 'YARIS';
        vehiculo.modelo = modelo2;
        assert.equal(vehiculo._modelo, modelo2);
      });

      it("getter descripcion", function () {
        assert.equal(vehiculo.descripcion, descripcion);
      });
    
      it("setter descripcion", function () {
        const descripcion2 = 'TOYOTA YARIS';
        vehiculo.descripcion = descripcion2;
        assert.equal(vehiculo._descripcion, descripcion2);
      });

      it("getter disponible", function () {
        assert.equal(vehiculo.disponible, disponible);
      });
    
      it("setter disponible", function () {
        const nuevoDisponible = false; 
        vehiculo.disponible = nuevoDisponible;
        assert.equal(vehiculo._disponible, nuevoDisponible);
      });

      it("getter eliminado", function () {
        assert.equal(vehiculo.eliminado, eliminado);
      });
    
      it("setter eliminado", function () {
        const nuevoEliminado = false; 
        vehiculo.eliminado = nuevoEliminado;
        assert.equal(vehiculo._eliminado, nuevoEliminado);
      });

      it("getter costoDia", function () {
        assert.equal(vehiculo.costoDia, costoDia);
      });
    
      it("setter costoDia", function () {
        const nuevoCostoDia = 150; 
        vehiculo.costoDia = nuevoCostoDia;
        assert.equal(vehiculo._costoDia, nuevoCostoDia);
      });
});