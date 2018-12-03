import * as baseService from './base';

async function postCharge(token, amount = 10) {
    let response = await baseService.makeFetch('/api/Donations', {
        method: 'POST',
        body: JSON.stringify({ token, amount }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json();
        }
    })
    .catch((error) => {
        throw error;
    });
}
    

export { postCharge };