var assert = require('assert');

//

var ehPar = function(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


try {
    assert.ok(ehPar(6));
    assert.ok(!ehPar(5));
    assert.ok(ehPar(0));
} catch(e) {
    console.log(e);
}