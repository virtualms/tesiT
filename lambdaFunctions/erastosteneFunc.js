exports.handler =  async (event) => {

    //time
    var d = new Date();
    var start = d.getTime();
    
    //find prime
    const value = 1500000;
    eratostene(value);
    
    //responde
    d = new Date();
    var end = d.getTime();
    var duration = end - start;
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Done_' + start + "_" + end + "_" + duration),
    };
    
    return response;
};


/****logic_check stacko****/
function eratostene (n) {
    // Find all primes < n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    //Array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are prime numbers
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};