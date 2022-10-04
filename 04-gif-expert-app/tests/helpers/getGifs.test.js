import { getGifts } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {
    test('Debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifts('One Punch')
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})