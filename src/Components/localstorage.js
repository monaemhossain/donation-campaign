const getLocalStoredData = () => {
    const storedDonationData = localStorage.getItem('donations');
    if(storedDonationData){
        return JSON.parse(storedDonationData);
    }
    return [];
}

const saveToLocalStorage = (data) => {
    const storedLocalData = getLocalStoredData()
    const exists = storedLocalData.find(localData => localData.id === data.id)
    if(!exists){
        storedLocalData.push(data)
        localStorage.setItem('donations', JSON.stringify(storedLocalData))
    }
}




export {getLocalStoredData, saveToLocalStorage}