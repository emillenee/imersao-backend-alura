import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, postAtualizado) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objetoId = ObjectId.createFromHexString(id); //adicionar o id em um objeto que o mongo entenda
    return colecao.updateOne({_id: new ObjectId(objetoId)}, {$set:postAtualizado});
}