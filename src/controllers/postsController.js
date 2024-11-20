import { getTodosPosts } from "../models/postsModels.js";

export async function listarPosts(req, res) { //async e await são um par
    const posts = await getTodosPosts();
    res.status(200).json(posts); //200 significa sucesso
}