import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp/>', () => {
    
/*     test('Debe hacer match con el snapshot', () => {

        const title = 'Hola Sultan'
        const {container} = render(<FirstApp title={title}/>)

        expect(container).toMatchSnapshot()

    }) */

    test('Debe mostrar el titulo en h1', () => {

        const title = 'Hola soy goku'
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>)

        expect(getByText(title)).toBeTruthy()
/* 
        const h1 = container.querySelector('h1')
        expect(h1.innerHTML).toContain(title) */
        expect(getByTestId('test-title').innerHTML).toBe(title)
    })

    test('Debe mostrar el subtitulo enviado por props', () => {

        const title = 'Hola soy Goku'
        const subTitle = 'Soy un subtitulo'
        const {getByText} = render(<FirstApp title={title} subTitle={subTitle}/>)

        expect(getByText(subTitle)).toBeTruthy()
    })

})