// import { useLoaderData } from "react-router-dom";
import LargeCard from "../../Components/Card/LargeCard";
import { getLocalStoredData } from "../../Components/localstorage";

const Donation = () => {
    const localStorageData = getLocalStoredData();
    console.log(localStorageData);
    // const donatedData = useLoaderData();
    // console.log(donatedData);
    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-6 pt-36">
            {
                localStorageData?.map(donated => <LargeCard key={donated.id} donated={donated}></LargeCard>)
            }    
        </div>
    );
};

export default Donation;