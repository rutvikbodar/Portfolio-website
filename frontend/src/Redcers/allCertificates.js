const allCertificates = (state = [], action) => {
    if(action.type==="getCertificates"){
        return [...state,...action.payload];
    }
    else{
        return state;
    }
}

export default allCertificates;