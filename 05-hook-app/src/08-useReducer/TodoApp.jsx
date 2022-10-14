import { useTodos } from "../hooks/useTodos"
import { TodoAdd, TodoList } from "./index"

export const TodoApp = () => {

    const {todos, todosTotal, todosPending, onNewTodo, onDeleteTodo, onToogleTodo} = useTodos()

    return (
        <>
            <h1>TodoApp: {todosTotal}<small>, pendientes: {todosPending}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onToogleTodo={onToogleTodo}/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onNewTodo} />
                </div>
            </div>
        </>
    )
}
