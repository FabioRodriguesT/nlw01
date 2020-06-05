/*
// GET: Buscar uma ou mais informações do back-end.
// POST: Criar uma nova informação no back-end.
// PUT: Atualizar uma informação existente no back-end.
// DELETE: Remover uma informação do back-end.

// POST http://localhost:3333/users = Criar um usuário.
// GET http://localhost:3333/users = Listar usuários.
// get http://localhost:333/users/5 = Buscar dados do usuário com ID 5.

// Request Param: Parâmetros que vem na própria rota que identificam um recurso.
// Query Param: Parâmetros que vem na própria geralmente opcionais para filtros, paginação.
// Request Body: Parâmetros para criação/atualização de informações.

//SELECT * FROM users WHERE name = 'Fabio' << linguagem SQL
// knex('users').where('name,'Fabio').select('*') << linguagem knex com js, reinscriçao da linha de cima

// Migrations = Histórico do banco de dados

// create table points
// create table users

//Em rotas se usam (routes.js)
// index: listagem
// show: exibir um unico registro
// create: criar um registro
// update: atualizar um registro
// delete: deletar um registro


const users = [
    'Diego', // 0
    'Cleiton', // 1
    'Robson',  //2
    'Fabio', // 3
    'Daniel' // 4
]

app.get('/users', (request, response) => {
    const search = String(request.query.search)

    const filteredUsers = search ? users.filter(user => user.includes(search)) :users

    return response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id)
    
    const user = users[id]

    return response.json(user)
})

app.post('/users', (request, response) => {
    const data = request.body

    console.log(data)

    const user = {
        name: data.name,
        email: data.email
    }

    return response.json(user)
})



*/