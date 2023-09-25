import PropTypes from 'prop-types'
const LargeCard = ({ donated }) => {
    const { thumbnail_small, title, category, category_bg_color, card_bg_color, text_color, price } = donated;
    const cardBackground = {
        backgroundColor: card_bg_color,
        color: text_color,
    }
    const categoryBg = {
        backgroundColor: category_bg_color,
    }
    const btnBg = {
        backgroundColor: text_color,
        color: "#ffffff",
    }
    return (
        <div>
            <div className="flex flex-row gap-6 items-center rounded-lg" style={cardBackground}>
                <div>
                    <img className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={thumbnail_small} alt={`${title} Logo`} />
                </div>
                <div className="space-y-2">
                    <p className="max-w-fit text-sm font-normal mr-2 px-2.5 py-0.5 rounded-md" style={categoryBg}>{category}</p>
                    <h5 className='text-2xl font-semibold'>{title}</h5>
                    <p className='text-base font-semibold'>{price}</p>
                    <button className='rounded-lg px-4 py-2 text-lg font-semibold' style={btnBg}>View Details</button>
                </div>
            </div>
        </div>
    );
};
LargeCard.propTypes = {
    donated: PropTypes.object.isRequired,
}
export default LargeCard;