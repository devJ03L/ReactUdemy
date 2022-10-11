import { render, screen } from "@testing-library/react"
import { GiftGrid } from "../../src/components/GiftGrid"
import {useFetchGifs} from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GiftGrid/>', () => {
    
    const category = 'One Punch'

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })

        render(<GiftGrid category={category}/>)
        //screen.debug()

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))

    })

    test('Debe mostrar items cuando se cargan las imagenes', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitma.jpg'
            },
            {
                id: '123',
                title: 'Gaoku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GiftGrid category={category}/>)

        expect(screen.getAllByRole('img').length).toBe(2)

    })
})