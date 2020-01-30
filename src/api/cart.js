import makeRequest from './helpers/makeRequest';

function load(token) {
    let url = 'cart/load.php';
    if (token !== null) {
        url += `?token=${token}`;
    }
    return makeRequest(url);
}

function add(token, id) {
    console.log(`cart/add.php?token=${token}&id=${id}`);
    return makeRequest(`cart/add.php?token=${token}&id=${id}`);
}

export { load, add };