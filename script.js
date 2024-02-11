
const displayInputvalue = document.getElementById('displayInputvalue');
const incrementSubhanAllah = document.getElementById('incrementSubhanAllah');
const decrementSubhanAllah = document.getElementById('decrementSubhanAllah');

let subhanAllahCount = 0;
let AlhamdulilahCount = 0;
let AllahuakberCount = 0;

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





