import express from "express"

const app = express(); //app representa o servidor
app.listen(3000, () => { //3000 é a porta para um servidor local
    console.log("Servidor escutando");
});

app.get("/", (req, res) => {
    res.status(200).send("Bem-vindo à imersão!");
});