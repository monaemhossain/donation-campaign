import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { saveToLocalStorage } from "../../Components/LocalStorage/LocalStorage";
const DonationDetails = () => {
    const location = useLocation();
    const data = location.state?.data

    const { picture, title, description, text_color, price } = data;
    const btnBg = {
        backgroundColor: text_color,
        color: "#ffffff",
    }

    const navigate = useNavigate()
    const handleNavigatePage = page => {
        navigate(page)
    }
    const handleAddToDonation = () => {
        saveToLocalStorage(data)
    }

    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 pt-36 pb-24">
            <div className="relative w-full">
                <img src={picture} alt="" className="w-full" />
                <div className="absolute bottom-0 w-full bg-gray-700 md:p-12 p-10 opacity-50"></div>
                <button onClick={handleAddToDonation} className="py-4 px-6 rounded-lg absolute bottom-0 md:m-5 m-3" style={btnBg}>Donate {price}</button>
            </div>

            <div className="pt-14">
                <h1 className="text-4xl font-bold pb-6">{title}</h1>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="flex justify-center mt-6 gap-6">
                <button onClick={() => handleNavigatePage('/')} className="py-4 px-6 bg-red-400 text-white font-bold rounded-lg">
                    <Link to='/'>Back to home</Link>
                </button>
                <button onClick={() => handleNavigatePage('/donation')} className="py-4 px-6 bg-red-400 text-white font-bold rounded-lg">
                    Donations
                </button>
            </div>
        </div>
    );
};

export default DonationDetails;