import { useFetchGifs } from "../hooks/useFetchGifs"
import { GiftItem } from "./GiftItem"
import PropTypes from 'prop-types'

export const GiftGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category)
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando... </h2>
            }
            <div className='card-grid'>
                {
                    images.map(image => <GiftItem key={image.id} {...image} />)
                }
            </div>        
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}
