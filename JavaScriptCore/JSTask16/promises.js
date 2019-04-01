function successPromise() {
    var promise = new Promise(function (resolve, reject) {
    setTimeout(resolve("Promise from Example is succesful"), 3000);
    });
promise.
then(function (result) {
        alert("Fulfilled and resolved promise" + result);
    },
    function (error) {
        alert("Rejected promise" + error);
    }

);
}

function failedPromise() {
    let failedPromise = new Promise(function (resolve, reject) {
            setTimeout(reject ( new Error("Time is out every long)")
            ));
});
    failedPromise.
    then(function (result) {
            alert("Fullfield and resolved promise" + result);
            },
        function (error) {
            alert("Rejected promise" + error);
        }
    );
}
successPromise();
failedPromise();