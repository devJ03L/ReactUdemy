import PropTypes from "prop-types";

export const GiftItem = ({title, id, url}) => {

    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

GiftItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}