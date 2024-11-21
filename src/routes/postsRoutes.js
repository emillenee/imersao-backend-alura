import express from "express"
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

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
    app.get("/posts", listarPosts); //Rota para buscar todos os posts
    app.post("/posts", postarNovoPost); //Rota para criar um novo post
    app.post("/upload", upload.single("imagem"), uploadImagem);
});

export default routes;