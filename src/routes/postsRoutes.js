import express from "express"
import multer from "multer";
import cors from "cors"
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

//Código de configuração do multer no windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage }); //necessário criar a pasta uploads

const routes = ((app) => {
    app.use(express.json()); //para o express transformar em jason
    app.use(cors(corsOptions));
    app.get("/posts", listarPosts); //Rota para buscar todos os posts
    app.post("/posts", postarNovoPost); //Rota para criar um novo post
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizarNovoPost);
});

export default routes;