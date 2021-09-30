function getCity(city) {
    let city;
    switch (city) {
        case 'MG':
            city = 'belzote';
        case 'SP':
            city = 'sampa';
    }
    return city
}

// ES6
const getCity = city => ({
    MG: 'Belzonte',
    SP: 'Errejo'
}[city] || 'not found')

getCity('SP');