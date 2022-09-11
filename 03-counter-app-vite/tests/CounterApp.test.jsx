import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en CounterApp', () => {

    const initialValue = 10

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp value={20}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={100}/>)
        expect(screen.getByText(100)).toBeTruthy()
    })

    test('Debe incrementar con el boton +1', () => {
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(11)).toBeTruthy()
    })

    test('Debe incrementar con el boton -1', () => {
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText(9)).toBeTruthy()
    })
})