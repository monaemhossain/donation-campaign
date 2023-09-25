import { useLocation } from "react-router-dom";

const DonationDetails = () => {
    const location = useLocation();
    const data = location.state?.data
    const { thumbnail, title, description, text_color, price } = data;
    const btnBg = {
        backgroundColor: text_color,
        color: "#ffffff",
    }


    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 pt-36">
            <div className="relative w-full">
                <img src={thumbnail} alt="" className="w-full"/>
                <div className="absolute bottom-0 w-full bg-gray-700 opacity-50 bg-blend-color">
                    <button className="py-4 px-6 rounded-lg" style={btnBg}>Donate {price}</button>
                </div>
            </div>

            <h1>{title}</h1>

            <p>{description}</p>
        </div>
    );
};

export default DonationDetails;