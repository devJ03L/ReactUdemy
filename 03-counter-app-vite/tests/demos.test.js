describe('Pruebas en DemoComponet', () => { 

    test('Esta prueba no debe fallar', ()=> {
    
        //1 Inicializacion
        const message1 = 'Hola mundo'
        
        //2 Estimulo
        const message2 = message1.trim()
    
        //3 Observar comportamiento
        expect(message1).toBe(message2)
    
    })

})

