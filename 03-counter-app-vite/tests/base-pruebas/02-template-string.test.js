import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => { 
    
    test('getSaludo deb retorna Hola Joel', () => { 
        
        const name = 'Joel'
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name} !!!`)
    })
})