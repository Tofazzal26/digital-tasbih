
const displayInputvalue = document.getElementById('displayInputvalue');
const incrementSubhanAllah = document.getElementById('incrementSubhanAllah');
const decrementSubhanAllah = document.getElementById('decrementSubhanAllah');

let subhanAllahCount = 0;
let AlhamdulilahCount = 0;
let AllahuakberCount = 0;


// Subhan Allah

incrementSubhanAllah.addEventListener('click',function() {
    if( subhanAllahCount === 33) {
        return alert('Subhan Allah Complete.Please Fill up another one');
    }
    subhanAllahCount += 1
    displayInputvalue.innerText = subhanAllahCount;
})

decrementSubhanAllah.addEventListener('click',function() {
    if( subhanAllahCount === 0) {
        return alert('You can added negative value.');
    }
    subhanAllahCount -= 1
    displayInputvalue.innerText = subhanAllahCount;
})


// Alhamdulilah


const counts = document.getElementById('count2');
const increment = document.getElementById('increment-2');
const decrement = document.getElementById('decrement-2');

increment.addEventListener('click', function() {
    if( AlhamdulilahCount === 33) {
        return alert('Alhamdulilah Complete.Please Fill up another one');
    }
    AlhamdulilahCount += 1;
    counts.innerText = AlhamdulilahCount;
})

decrement.addEventListener('click', function() {
    if( AlhamdulilahCount === 0) {
        return alert('You can added negative value.');
    }
    AlhamdulilahCount -= 1;
    counts.innerText = AlhamdulilahCount;
})



const counts3 = document.getElementById('count3');
const increment3 = document.getElementById('increment-3');
const decrement3 = document.getElementById('decrement-3');

increment3.addEventListener('click', function() {
    if( AllahuakberCount === 33) {
        return alert('Allahu akbar Complete.Please Fill up another one');
    }
    AllahuakberCount += 1;
    counts3.innerText = AllahuakberCount;
})

decrement3.addEventListener('click', function() {
    if( AllahuakberCount === 0) {
        return alert('You can added negative value.');
    }
    AllahuakberCount -= 1;
    counts3.innerText = AllahuakberCount;
})


// clear all reset

const clearAll = document.getElementById('clear-all');
clearAll.addEventListener('click', function()  {

    subhanAllahCount = 0;
    AlhamdulilahCount = 0;
    AllahuakberCount = 0;
    displayInputvalue.innerText = 0;
    counts.innerText = 0;
    counts3.innerText = 0;
})

