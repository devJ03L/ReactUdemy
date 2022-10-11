import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en hook useFetchGifs', () => {
    
    test('Debe regresar el estado inicial', () => {
        
        const {result} = renderHook(()=>useFetchGifs('Naruto'))
        const {images, isLoading} = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('debe de retornar un array de imagenes y isLoading en true', async () => {
        
        const {result} = renderHook(()=>useFetchGifs('Naruto'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()

    })
})