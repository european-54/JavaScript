'use strict';
for (let i = 0; i <= 100; i++) {
    setTimeout(function () {
        changeProgress(i);
    }, i * 40);
}