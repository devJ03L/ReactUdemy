import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter } from "../../src/hooks/useCounter"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")

describe('Pruebas en <MultiplecustomHooks/>', () => {

    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1, 
        incrementar: mockIncrement
    })

    beforeEach(()=>{
        jest.clearAllMocks()
    })

    test('Debe mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })
        
        render(<MultipleCustomHooks/>)
        
        expect(screen.getByText('Loading...'))
        expect(screen.getByText('Breaking Bad Quotes'))

        const nextButton = screen.getByRole('button', {name: 'Next quote'})
        expect(nextButton.disabled).toBeTruthy()        
    })

    test('Debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{author: 'Joel', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks/>)

        expect(screen.getByText('Hola mundo')).toBeTruthy()
        expect(screen.getByText('Joel')).toBeTruthy()

        const nextButton = screen.getByRole('button', {name: 'Next quote'})
        expect(nextButton.disabled).toBeFalsy()        

    })

    test('Debe de llamar la funcion incrementar', () => {
        useFetch.mockReturnValue({
            data: [{author: 'Joel', quote: 'Hola mundo'}],
            isLoading: false,
            hasError: null
        })        

        render(<MultipleCustomHooks/>)

        const nextButton = screen.getByRole('button', {name: 'Next quote'})
        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled()
        
    })

})