const BASE_URL = '/api/events/';

function create(event){
    return fetch (BASE_URL + 'eventadd', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(event)

})
.then(res => {
    if (res.ok) return res.json();
    throw new Error('Event Already Created');
});
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
  }


export default {
    create,
    index
}


