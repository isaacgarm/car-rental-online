const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const CarRentalOnline = require("./src/model/car-rental-online");
let model = new CarRentalOnline();

//API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/car-rental-online/api/clientes", (req,res) =>{
  res.status(200).json(model.getClientes());
});

app.put("/car-renatal-online/api/clientes", (req,res)=>{
  let clientes = req.body;
  model.clientes = clientes.map((c) => {
    let cliente = this.agregarCliente(c);
    Object.assign(cliente, c);
    return cliente;
  });
  res.status(200).json(model.clientes);
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

