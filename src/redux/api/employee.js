export const getEmployee = async()=> {
    const apiUrl = `https://reqres.in/api/users/`;
    try {
        let response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
            }
        });
        let data = await response.json();
        return data
    } catch (e) { 
        console.log('Error has occured', e);
    }
}

