// get variables
let globalAmount = 0;

const btnAdd = document.getElementById('saved'),
      btnSub = document.getElementById('spent'),
      dispTxt = document.getElementById('ra-text');

function add30() {
    globalAmount = globalAmount + 30;
    dispTxt.innerHTML = 'Money saved $' + globalAmount + '.00';
}

function sub30() {
    globalAmount = globalAmount - 30;
    if (globalAmount >= 30) {
        dispTxt.innerHTML = 'Money saved $' + globalAmount + '.00';
    }
    else {
        dispTxt.innerHTML = 'Money spent $' + globalAmount + '.00';
    }
}

btnAdd.addEventListener('click', function() {
    add30();
});

btnSub.addEventListener('click', function() {
    sub30();
});