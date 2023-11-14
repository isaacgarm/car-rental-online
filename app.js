const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


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

  app.use(
    "/car-rental-online/css",
    express.static(path.join(__dirname, "public/css"))
  );

  app.use(/^\/car-rental-online/, (req, res) => {
    //sirve para crear expresion regular
    res.sendFile(path.join(__dirname, "public/index.html"));
    //
  });

