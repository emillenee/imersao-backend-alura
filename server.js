import express from "express"
import routes from "./src/routes/postsRoutes.js";

const app = express(); //app representa o servidor
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => { //3000 é a porta para um servidor local
    console.log("Servidor escutando...");
});