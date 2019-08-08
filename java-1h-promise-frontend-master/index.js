/**
 * 1. loading page (download bootstrap)
 * 2. draw the entire web site
 * - draw header
 * - draw body: card, table (fill it with content (make a GET request))
 * - draw buttons
 * - draw footer
 */

function startAll() {
    //1. get elements by ID
    //2. request
    //3. draw all other site


}

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve('my text');
//     }, 300);
// });
//
// //loading spinner starts here
// promise.then(function(value) {
//     console.log('1. promise result: ' + value);
//     //loading spinner turns off here
// });
//
// console.log('2. regular call: ' + promise);


function myFunction() {
    //Thread.sleep(1000);
    let name;

    alert('before promise');



    promise();

    //resolve -> fulfilled
    //reject -> rejected


    alert('after promise: ' + name);
}

function promise() {
    let promiseProducer = promiseProducer();
    promiseConsumer(promiseProducer);
}

function promiseProducer(name) {
    //producer
    //"http server"
    let get = new Promise(function (resolve, reject) {
        setTimeout(function () {
            name = 'abc';

            alert('before RESPONSE GENERATED');
            resolve(name); //function + success (YES)
            reject(name); //function + failure  (NO)

            alert('after RESPONSE GENERATED');

        }, 500);
    });

    return get;
}

function promiseConsumer(promiseProducer) {
    /**
     * 1. success  | 1
     * 2. failure
     * 3. both     | 4
     * 4. none     | 1
     */

    /*http.*/

    //consumer
    //"http client"
    promiseProducer.then(
        function (name) {
            //YES
            alert('promise open: success: ' + name);
        },
        function (name) {
            //NO
            alert('promise open: failure: ' + name);
        }
    );
}



// myFunction();