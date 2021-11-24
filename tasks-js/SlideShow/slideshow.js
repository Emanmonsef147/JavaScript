var i = 1;
var timer;

function slideshow() {
    "use strict";
    timer = setTimeout(slideshow, 500);
    i++;
    if (i > 6) {
        i = 1;
    }
    
    document.images[0].src = "" + i + ".jpg";
}

function stop() {
    "use strict";
    clearTimeout(timer);
    document.images[0].src = "" + i + ".jpg";
}

function next() {
    "use strict";
    if (i < 6) {
        i++;
        document.images[0].src = "" + i + ".jpg";
    } else {
        i = 6;
        document.images[0].src = "" + i + ".jpg";
    }
}

function previous() {
    "use strict";
    if (i > 1) {
        i--;
        document.images[0].src = "" + i + ".jpg";
    } else {
        i = 1;
        document.images[0].src = "" + i + ".jpg";
    }
}