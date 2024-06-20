const BTN = document.getElementById('btn');
const disp = document.getElementById('show');

BTN.addEventListener('click', testFoo);

async function testFoo() {
    let msg = '';
    // First message added
    msg += 'Hello boys!';
    disp.innerHTML = msg;

    // async function declaration
    let sayHello = new Promise(function (res, rej) {
        // async message added in 5 sec
        function showCase() {
            msg += '<br>Hello girls!';
            disp.innerHTML = msg;
            return `Hello Bob!`;
        }
        setTimeout(() => res(showCase()), 5000);
    })

    // async function call
    let hiBob = await sayHello;

    // last message added
    msg += '<br>Hello puppy!';
    disp.innerHTML = msg;

    disp.innerHTML += hiBob;
}