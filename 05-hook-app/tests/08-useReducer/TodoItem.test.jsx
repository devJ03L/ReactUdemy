import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(()=>jest.clearAllMocks())

    test('Debe de mostrar el Todo Pendiente de completar', () => {
        render(<TodoItem todo={todo}/>)

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toBe('align-self-center ')        
    })

    test('Debe mostrar el Todo completado', () => {
        todo.done = true
        render(<TodoItem todo={todo}/>)

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
    })

    test('Se debe llamar el ToggleTodo cuando se hace click', () => {
        render(<TodoItem todo={todo} onToogleTodo={onToggleTodoMock}/>)
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    })

    test('El boton debe llamar al deleteTodo', () => {
        render(<TodoItem todo={todo} onToogleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock}/>)
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
})