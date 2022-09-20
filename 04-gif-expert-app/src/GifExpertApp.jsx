import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GiftGrid } from "./components/GiftGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Naruto'])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>GifexpertApp</h1>

            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map(categorie => (
                    <GiftGrid key={categorie}
                        category={categorie} />
                ))
            }
        </>
    )
}
