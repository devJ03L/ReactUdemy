import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('Pruebas en 08', () => {

    test('getHeroeByID debe retornar un heroe', () => {

        const id = 1
        const hero = getHeroeById(id)

        expect(hero).toEqual({id: 1, name: 'Batman', owner: 'DC'})

    })

    test('getHeroeByID debe retornar undefined si no existe', () => {

        const id = 1000
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()

    })

    test('getHeroesByOwner debe regresar heroes de DC', () => {

        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        expect(heroes.length).toBe(3)
    })

})