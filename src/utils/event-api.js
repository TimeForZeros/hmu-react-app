const BASE_URL = '/api/events/';

// export default {
//     create,
//     index,
//     update,
//     deleteOne,
// }

export function create(event) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(event)
    }).then(res => res.json());
}

export function update(event) {
    return fetch(`${BASE_URL}/${event._id}`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(event)
    }).then(res => res.json());
}
export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`,{
        method: 'DELETE'
    }).then(res => res.json());
}





// function create(event){
//     return fetch (BASE_URL + 'eventadd', {
//     method: 'POST',
//     headers: new Headers({'Content-Type': 'application/json'}),
//     body: JSON.stringify(event)

// })
// .then(res => {
//     if (res.ok) return res.json();
//     throw new Error('Event Already Created');
// });
// }

export function index() {
    return fetch(BASE_URL).then(res => res.json());
  }




