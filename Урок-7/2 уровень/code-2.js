'use strict';
for (let i = 0; i < 6; i++) {
    let markup = `<img src="https://picsum.photos/200/300?random=${i}" alt="pic${i}">`;
    document.body.insertAdjacentHTML('afterbegin', markup);
}