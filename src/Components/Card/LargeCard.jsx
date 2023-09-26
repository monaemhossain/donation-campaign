import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
const LargeCard = ({ donated }) => {
    const { picture, title, category, category_bg_color, card_bg_color, text_color, price } = donated;
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
    const navigate = useNavigate()
    const navigateToDonationDetails = (data) => {
        navigate('/donation-details', { state: { data } })
    }
    return (
        <div>
            <div className="sm:flex flex-row gap-6 items-center rounded-lg" style={cardBackground}>
                <div className='w-full sm:w-52 h-48 max-sm:h-60'>
                    <img className="object-cover rounded-t-lg h-full w-full md:rounded-none md:rounded-l-lg" src={picture} alt={`${title} picture`} />
                </div>
                <div className="space-y-2 md:p-0 p-4">
                    <p className="max-w-fit text-sm font-normal mr-2 px-2.5 py-0.5 rounded-md" style={categoryBg}>{category}</p>
                    <h5 className='lg:text-2xl text-xl font-semibold'>{title}</h5>
                    <p className='text-base font-semibold'>{price}</p>
                    <button onClick={() => navigateToDonationDetails(donated)} className='rounded-lg px-4 py-2 text-base lg:text-lg font-semibold' style={btnBg}>View Details</button>
                </div>
            </div>
        </div>
    );
};
LargeCard.propTypes = {
    donated: PropTypes.object.isRequired,
}
export default LargeCard;