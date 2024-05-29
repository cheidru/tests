const BTN = document.getElementById('btn');
const disp = document.getElementById('show');

BTN.addEventListener('click', testFoo);

async function testFoo() {
    let msg = '';
    msg += 'Hello boys!' + '/n';
    let sayHello = new Promise(function (res, rej) {
        setTimeout(() => res(msg += 'Hello girls!' + '/n'), 5000);
    })

    await sayHello;
    msg += 'Hello puppy!' + '/n';

    disp.textContent = msg;
}