import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = event => setInputValue(event.target.value)
    const onSubmit = event => {
        event.preventDefault()
        if(inputValue.trim()==0) return
        //setCategories(state => [...state, inputValue])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
