import swal from "sweetalert";

const getLocalStoredData = () => {
    const storedDonationData = localStorage.getItem('donations');
    if(storedDonationData){
        return JSON.parse(storedDonationData);
    }
    else{
        return[]
    }
}

const saveToLocalStorage = (data) => {
    const storedLocalData = getLocalStoredData()
    const exists = storedLocalData.find(localData => localData.id === data.id)
    if(!exists){
        storedLocalData.push(data)
        localStorage.setItem('donations', JSON.stringify(storedLocalData))
        swal({
            title: "Donation Success",
            text: "Thanks!! You have donated successfully. Keep up the good work",
            icon: "success"

        })
    }else{
        swal({
            text: "You have already donated in this category, Please donate in other categories to help more people",
            icon: "error"
        })
    }
}




export {getLocalStoredData, saveToLocalStorage}