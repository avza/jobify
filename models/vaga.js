const recuperarVagas = db => async () => {
    const vagas = await db.all('select * from vagas')
    return vagas
}
const recuperarVaga = db => async (id) => {
    const vaga = await db.get('select * from vagas where id = ' + id)
    return vaga
}
const excluirVaga = db => async (id) => {
    await db.run('delete from vagas where id =' + id)
}
const cadastrarVaga = db => async (categoria, titulo, descricao) => {
    await db.run(`insert into vagas (categoria, titulo, descricao) values (${categoria}, '${titulo}', '${descricao}');`)
}
const editarVaga = db => async (id, categoria, titulo, descricao) => {
    await db.run(`update vagas set categoria = ${categoria}, titulo = '${titulo}', descricao = '${descricao}' where id = ${id}`)
}
module.exports = {
    recuperarVagas,
    recuperarVaga,
    excluirVaga,
    cadastrarVaga,
    editarVaga
}