import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
    
    const title = 'Hola Sultan'

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar el mensaje "Hola Sultan"', () => {
        render(<FirstApp title={title}/>)
        expect(screen.getByText(title)).toBeTruthy()        
    })

    test('Debe mostrar el titulo en h1', () => {
        render(<FirstApp title={title}/>)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
    })
})