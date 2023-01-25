//カウンター
//加算
function addOne(cnt) {
    let counter = 0;
    counter = document.getElementsByClassName('counter').item(cnt);
    counter.value = Number(counter.value) + 1;
    chgNumBack(cnt);
}

//減算
function subOne(cnt) {
    let counter = 0;
    counter = document.getElementsByClassName('counter').item(cnt);
    counter.value = Number(counter.value) - 1;
    chgNumBack(cnt);
}

//個数の背景色を変更する
/*function chgNumBack(cnt) {
    let counter = document.getElementsByClassName('counter');
    counter.item(cnt).style.backgroundColor='greenyellow';
}*/
