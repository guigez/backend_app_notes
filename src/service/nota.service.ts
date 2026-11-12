import { NotaModel } from '../model/notas.model'

export async function listar(busca?: string) {
    const filtro = busca ? { titulo: { $regex: escaparRegex(busca), $options: 'i'}} : {};
    return NotaModel.find(filtro).sort({ criadoEm: -1});
}

export async function criar (titulo: string, conteudo: string){
    return NotaModel.create({titulo: titulo, conteudo: conteudo})
}

function escaparRegex(texto: string) {
    return texto.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}