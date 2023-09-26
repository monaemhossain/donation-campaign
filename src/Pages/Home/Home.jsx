import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../Components/Header/Banner";
import Card from "../../Components/Card/Card";
import { useState } from "react";

const Home = () => {
    const donateData = useLoaderData();
    const navigate = useNavigate();

    const [searchCategory, setSearchCategory] = useState("")
    
    const navigateToDonationDetails = (data) => {
        navigate('/donation-details', { state: { data } })
    }

    console.log(donateData.length);

    const filteredData = donateData.filter(data =>
        searchCategory === "" || data.category.toLowerCase() === searchCategory.toLowerCase()
    );

    return (
        <div>
            <Banner setSearchCategory={setSearchCategory}></Banner>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-24 px-6 xl:px-0">
                {
                    filteredData.length > 0 ? (
                        (searchCategory ? filteredData : donateData)?.map(data => (
                            <Card key={data.id} data={data} clickToNavigate={() => navigateToDonationDetails(data)} />)
                        )

                    )  : (
                        <div className="col-span-4 justify-center items-center inline-grid">
                            <p className="text-3xl font-bold ">No items found.</p>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Home;