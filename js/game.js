const kostka = document.getElementById('cube');
const stat = document.getElementById('result');
const buttonek = document.getElementById('playb');

let hod = 1;
let hody = [];

buttonek.addEventListener('click', function(){
    hod = Math.ceil(Math.random() * 6);
    hody.push(hod);
    console.log(hody);
    kostka.src = 'img/kostka' + hod + '.png';
    vypisStat();
})

function suma() {
    let sum = 0;
    for(let i = 0; i < hody.length; i++) {
        sum += hody[i];
    }
    return sum;
}

function mx() {
    let mxHelp = 1;
    hody.forEach(function(value, index) {
        if (value > mxHelp) mxHelp = value;
    })
    return mxHelp;
}

function mi() {
    let miHelp = 6;
    hody.forEach(function(value, index) {
        if (value < miHelp) miHelp = value;
    })
    return miHelp;
}

function vypisStat(){
    stat.innerHTML = `<p>Posledni hod: ${hod}</p>`;
    stat.innerHTML += `<p>Počet hodů: ${hody.length}</p>`;
    stat.innerHTML += `<p>Součet: ${suma()}</p>`;
    stat.innerHTML += `<p>Průměr: ${(suma() / hody.length).toFixed(2)}</p>`;
    stat.innerHTML += `<p>Maximum: ${mx()}</p>`;
    stat.innerHTML += `<p>Minimum: ${mi()}</p>`;
}