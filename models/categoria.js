const recuperarCategorias = db => async () => {
    const categorias = await db.all('select * from categorias')
    return categorias
}
const recuperarCategoria = db => async (id) => {
    const categoria = await db.get(`select * from categorias where id = ${id}`)
    return categoria
}
const excluirCategoria = db => async (id) => {
    await db.run(`delete from categorias where id = ${id}`)
}
const cadastrarCategoria = db => async (categoria) => {
    await db.run(`insert into categorias (categoria) values ('${categoria}')`)
}
const editarCategoria = db => async (id, categoria) => {
    await db.run(`update categorias set categoria = '${categoria}' where id = ${id}`)
}
module.exports = {
    recuperarCategoria,
    recuperarCategorias,
    excluirCategoria,
    cadastrarCategoria,
    editarCategoria
}