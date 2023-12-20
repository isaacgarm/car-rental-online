const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const CarRentalOnline = require("./src/model/car-rental-online");
let model = new CarRentalOnline();

//API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/car-rental-online/api/clientes", (req, res) => {
  if (req.query.email) {
    res.status(200).json(model.clienteByEmail(req.query.email));
  } else {
    res.status(200).json(model.getClientes());
  }
});

app.put("/car-rental-online/api/clientes", (req, res) => {
  model.setClientes([]); //Eliminar Clientes
  let clientes = req.body;
  try {
    model.setClientes(
      clientes.map((c) => {
        let cliente = model.signup(c);
        Object.assign(cliente, c);
        return cliente;
      })
    );
    res.status(200).json(model.getClientes());
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

app.get("/car-rental-online/api/clientes/:clienteId", (req, res) => {
  let clienteId = req.params.clienteId;

  let cliente = model.clienteById(clienteId);
  if (!cliente)
    res.status(404).json({
      message: `Cliente con id ${clienteId} no encontrado`,
    });
  else {
    res.status(200).json(cliente);
  }
});

//Empleado

app.get("/car-rental-online/api/empleados", (req, res) => {
  if (req.query.email) {
    res.status(200).json(model.empleadoByEmail(req.query.email));
  } else {
    res.status(200).json(model.getEmpleados());
  }
});

app.put("/car-rental-online/api/empleados", (req, res) => {
  model.setEmpleados([]); //Eliminar Empleados
  let empleados = req.body;
  try {
    model.setEmpleados(
      empleados.map((e) => {
        let empleado = model.signup(e);
        Object.assign(empleado, e);
        return empleado;
      })
    );
    res.status(200).json(model.getEmpleados());
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

app.get("/car-rental-online/api/empleados/:empleadoId", (req, res) => {
  let empleadoId = req.params.empleadoId;

  let empleado = model.empleadoById(empleadoId);
  if (!empleado)
    res.status(404).json({
      message: `Empleado con id ${empleadoId} no encontrado`,
    });
  else {
    res.status(200).json(empleado);
  }
});

app.post("/car-rental-online/api/signup", (req, res) => {
  let usuario = req.body;
  try {
    usuario = model.signup(usuario);
    res.status(200).json(usuario);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

app.post("/car-rental-online/api/signin", (req, res) => {
  let usuario = req.body;
  try {
    model.signin(usuario.email, usuario.password, usuario.rol);
    res.status(200).json(usuario.email);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
  //usuario =[];
});

// app.put("/car-rental-online/api/usuarios/:id", (req, res) => {
//   let id = req.params.id;
//   console.log(id);
//   let cliente = model.clienteById(id);
//   if (!cliente) {
//     let empleado = model.empleadoById(id);
//     if (!empleado) {
//       res.status(404).json({
//         message: `Usuario con id ${id} no encontrado`,
//       });
//     }
//   } else {
//     try {
//       model.setPerfil();
//       res.status(200).json(usuario.email);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({ message: e.message });
//     }
//   }
//   //usuario =[];
// });

app.put("/car-rental-online/api/usuarios/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);

  let cliente = model.clienteById(id);
  console.log(cliente);
  let empleado = null;

  if (!cliente) {

    empleado = model.empleadoById(id);

    if (!empleado) {

      return res.status(404).json({
        message: `Usuario con id ${id} no encontrado`,
      });
    }
  }

  try {
    console.log(cliente);
    if (cliente) {
      model.setPerfil(cliente);
    } else if (empleado) {
      model.setPerfil(empleado);
    }

    res.status(200).json({
      message: "Perfil actualizado exitosamente",
      email: cliente ? cliente.email : empleado.email,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
});

//app.use("/car-rental-online", express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`Car Rental Online listening on port ${port}`);
});

app.get("/car-rental-online/api/*", (req, res) => {
  res.status(501).send("Not implemented, yet!");
});

app.use(
  "/car-rental-online/components",
  express.static(path.join(__dirname, "public/components"))
);

app.use(
  "/car-rental-online/model",
  express.static(path.join(__dirname, "public/model"))
);

app.use(
  "/car-rental-online/test",
  express.static(path.join(__dirname, "public/test"))
);

app.use("/car-rental-online/style.css", (req, res) => {
  //sirve para crear expresion regular
  res.sendFile(path.join(__dirname, "public/style.css"));
});

app.use(/^\/car-rental-online/, (req, res) => {
  //sirve para crear expresion regular
  res.sendFile(path.join(__dirname, "public/index.html"));
  //
});
