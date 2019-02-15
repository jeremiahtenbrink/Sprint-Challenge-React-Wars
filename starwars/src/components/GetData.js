export function GetData (url, cb) {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    let data = localStorage.getItem(url);
    if(data) {
        data = JSON.parse(data);
        cb(data);
        return;
    }
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            localStorage.setItem(url, JSON.stringify(data));
            cb(data);
        })
        .catch(err => {
            throw new Error(err);
        });
}