import PropTypes from 'prop-types'


const Card = ({ data, clickToNavigate }) => {
    const { picture, title, category, category_bg_color, card_bg_color, text_color } = data;
 
    const cardBackground = {
        backgroundColor: card_bg_color,
        color: text_color,
    }
    const categoryBg = {
        backgroundColor: category_bg_color,
    }

    return (

        <div className="rounded-lg cursor-pointer" style={cardBackground} onClick={() => clickToNavigate(data)}>
            <div>
                <img className="rounded-t-lg w-full" src={picture} alt={`${title} Logo`} />
            </div>
            <div className="p-3 pt-5 space-y-2">
                <p className="max-w-fit text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md" style={categoryBg}>{category}</p>
                <h5 className='text-xl font-semibold'>{title}</h5>
            </div>
        </div>

    );
};
Card.propTypes = {
    data: PropTypes.object.isRequired,
    clickToNavigate: PropTypes.func.isRequired,
}
export default Card;