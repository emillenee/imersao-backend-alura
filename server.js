import express from "express"

const posts = [
    {
        id: 1,
        descricao: "Gatinho se escondendo em uma caixa",
        imagem: "https://placekitten.com/300/200"
    },
    {
        id: 2,
        descricao: "Gatinho dormindo",
        imagem: "https://placekitten.com/300/200"
    },
    {
        id: 3,
        descricao: "Gatinho fazendo cara de bravo",
        imagem: "https://placecats.com/300/150"
    },
    {
        id: 4,
        descricao: "Gata brincando com um novelo de lã",
        imagem: "https://placekitten.com/200/300"
    },
    {
        id: 5,
        descricao: "Gato olhando pela janela",
        imagem: "https://placekitten.com/500/400"
    }
];

const app = express(); //app representa o servidor
app.use(express.json()); //para o express transformar em jason

app.listen(3000, () => { //3000 é a porta para um servidor local
    console.log("Servidor escutando");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts); //200 significa sucesso
});

//Retornar um único post por id
function buscarPostPorId(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (req, res) => { 
    //":id" informação vai ser substituida por um dado variável
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});