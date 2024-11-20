import express from "express"
import { listarPosts } from "../controllers/postsController.js";

const routes = ((app) => {
    app.use(express.json()); //para o express transformar em jason
    //Rota para buscar todos os posts
    app.get("/posts", listarPosts);
});

export default routes;