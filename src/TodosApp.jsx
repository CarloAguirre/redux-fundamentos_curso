import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/todosApi"


export const TodosApp = () => {

    // const {data: todos = [], isLoading} = useGetTodosQuery()
    // console.log(todos)

    const {data: todo, isLoading} = useGetTodoQuery(1)

    console.log(todo)

  return (
    <>
        <h1>Todos -RTK Query</h1>
        <hr />
        <h4>Is Loading: {isLoading ? 'True' : 'false'}</h4>
        <pre>{JSON.stringify(todo)}</pre>

        {/* <ul>
            {todo && todo.map(todo=>(
                <li key={todo.id}><strong>{todo.completed ? 'Completed' : 'Pending'}</strong>: {todo.title}</li>
            ))}
        </ul> */}
    </>
  )
}
