import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import Card from "../../Components/Card/Card";

const Home = () => {
    const donateData = useLoaderData();
    const navigate = useNavigate();
    const navigateToDonationDetails = (data) =>{
        navigate('/donation-details', { state: {data} })
    }
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-24 px-6 xl:px-0">
                {
                    donateData?.map(data => <Card key={data.id} data={data} clickToNavigate={() => navigateToDonationDetails(data)}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;