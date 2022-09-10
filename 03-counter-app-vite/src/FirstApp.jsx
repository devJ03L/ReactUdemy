import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle, name}) => {
    
    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    subTitle:  PropTypes.string,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'Fco. Joel',
    subTitle: 'No hay subTitulo',
    //title: 'No hay titulo',
}