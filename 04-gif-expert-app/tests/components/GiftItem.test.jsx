import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"

describe('Pruebas en <GiftItem/> ', () => { 

    const title = "Saitama"
    const url = "https://google.com/saitama.jpg"

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<GiftItem title={title} url={url}/>)  
        expect(container).toMatchSnapshot()
    })

    test('Debe mostar la imagen con el URL y el ALT indicado', () => {
        render(<GiftItem title={title} url={url}/>)

        //expect(screen.getByRole('img').src).toBe(url)
        //expect(screen.getByRole('img').alt).toBe(title)
        
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    test('Debe mostrar el titulo en el componente', ()=>{
        render(<GiftItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })
})