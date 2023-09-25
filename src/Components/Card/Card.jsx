import PropTypes from 'prop-types'

const Card = ({ data }) => {
    const { thumbnail, title, category, category_bg_color, card_bg_color, text_color } = data;
 
    const cardBackground = {
        backgroundColor: card_bg_color,
        color: text_color,
    }
    const categoryBg = {
        backgroundColor: category_bg_color,
        color: text_color,
    }

    return (

        <div className="rounded-lg" style={cardBackground}>
            <a href="#">
                <img className="rounded-t-lg w-full" src={thumbnail} alt={`${title} Logo`} />
            </a>
            <div className="p-3">
                <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md" style={categoryBg}>{category}</span>
                <h5 className='text-xl font-semibold'>{title}</h5>
            </div>
        </div>

    );
};
Card.propTypes = {
    data: PropTypes.object,
}
export default Card;