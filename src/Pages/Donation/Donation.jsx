import { useState } from "react";
import LargeCard from "../../Components/Card/LargeCard";
import { getLocalStoredData } from "../../Components/LocalStorage/LocalStorage";

const Donation = () => {
    const localStorageData = getLocalStoredData();
    const [showAll, setShowAll] = useState(0);

    const cardToShow = showAll ? localStorageData.length : 4

    const handleShowAll = (e) => {
        setShowAll(localStorageData.length)
        e.target.classList.add('hidden')
    }

    return (
        <div className="max-w-screen-xl mx-auto px-6 xl:px-0 pt-36 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    localStorageData.length === 0 ? (
                        <div className="col-span-2 grid items-center">
                            <h1 className="text-center text-4xl font-bold text-slate-500">You Haven&apos;t Made Any Donation Yet.</h1>
                        </div>
                    ): (
                        localStorageData?.slice(0, cardToShow).map(donated => <LargeCard key={donated.id} donated={donated}></LargeCard>)
                )
                }
            </div>
            {
                localStorageData.length > 4 ? (
                    <div className="grid items-center justify-center">
                        <button onClick={handleShowAll} className="mt-20 py-4 px-6 bg-red-400 text-white font-bold rounded-lg">Show All</button>
                    </div>
                ) : ("")
            }
        </div>
    );
};

export default Donation;