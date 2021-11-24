var myAnwer = document.getElementById("Answer");
myAnwer.value = "";
function EnterNumber(obj) {
    "use strict";
    myAnwer.value += obj;
}

function EnterOperator(ele) {
    "use strict";
    myAnwer.value += ele;
}

function EnterEqual() {
    "use strict";
    var equal = eval(myAnwer.value);
    myAnwer.value = equal;
}

function EnterClear() {
    "use strict";
    myAnwer.value = "";
}