export function GetData( url, cb ) {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    let data = localStorage.getItem(url);
    if( data === undefined  || data === "undefined" || data == null) {
        debugger;
        if( url === undefined || url === null ) {
            cb( [] );
            return;
        }
        fetch( url )
            .then( res => {
                debugger;
                return res.json();
            } )
            .then( data => {
                
                localStorage.setItem( url, JSON.stringify( data ) );
                cb( data );
            } )
            .catch( err => {
                cb( [] );
            } );
    }else {
        debugger;
        data = JSON.parse( data );
        cb( data );
    }
    
}