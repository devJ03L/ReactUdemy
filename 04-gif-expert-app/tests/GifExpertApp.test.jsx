import { screen, render, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp/>', () => {

    test('Debe llamar onAddCategory', () => {

        const inputValue = 'Akatsuki'
        const onNewCategory = jest.fn()
        
        render(<GifExpertApp/>)        
        
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)

        screen.debug()

    })
})