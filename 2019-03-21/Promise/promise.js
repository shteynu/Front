let url = 'https://api.exchangeratesapi.io/latest';
let urlpost = 'https://jsonplaceholder.typicode.com';

/*getRequest(url)
    .then((res)=>console.log(res),
    (err)=>console.log(err)
    );*/
postRequest(urlpost,{})
    .then((res)=>console.log(res),
        (err)=>console.log(err)
    );