const num1 = document.getElementById('cube1');
const num2 = document.getElementById('cube2');
const num3 = document.getElementById('cube3');
const num4 = document.getElementById('cube4');
const num5 = document.getElementById('cube5');
const num6 = document.getElementById('cube6');
const stat = document.getElementById('result');
const buttonek = document.getElementById('playb');

let hod1 = 1;
let hod2 = 1;
let hod3 = 1;
let hod4 = 1;
let hod5 = 1;
let hod6 = 1;
let hody = 0;
let timer = false;
let final = 0;
let helpf = [];
let scor = 0;

function animace() {
    hod1 = Math.ceil(Math.random() * 6);
    hod2 = Math.ceil(Math.random() * 6);
    hod3 = Math.ceil(Math.random() * 6);
    hod4 = Math.ceil(Math.random() * 6);
    hod5 = Math.ceil(Math.random() * 6);
    hod6 = Math.ceil(Math.random() * 6);
    num1.src = 'img/kostka' + hod1 + '.png';
    num2.src = 'img/kostka' + hod2 + '.png';
    num3.src = 'img/kostka' + hod3 + '.png';
    num4.src = 'img/kostka' + hod4 + '.png';
    num5.src = 'img/kostka' + hod5 + '.png';
    num6.src = 'img/kostka' + hod6 + '.png';
}

buttonek.addEventListener('click', function () {
    if (!timer) {
        let helpf = [];
        timer = setInterval(animace, 50);
        buttonek.innerText = 'STOP';
        hody++;
    } else {
        clearInterval(timer);
        timer = false;
        buttonek.innerText = 'PLAY'
        //hody.push(hod);
        vypisStat();
        console.log(helpf);
        helpf = [0];
    }
})

function score(scor) {
    if (hod1 = 1) {
        scor += 100;
    }
    else if (hod1 = 5) {
        scor += 50;
    }
    else {
        helpf.push(hod1);
    }
    if (hod2 = 1) {
        scor += 100;
    }
    else if (hod2 = 5) {
        scor += 50;
    }
    else {
        helpf.push(hod2);
    }
    if (hod3 = 1) {
        scor += 100;
    }
    else if (hod3 = 5) {
        scor += 50;
    }
    else {
        helpf.push(hod3);
    }
    if (hod4 = 1) {
        scor += 100;
    }
    else if (hod4 = 5) {
        scor += 50;
    }
    else {
        helpf.push(hod4);
    }
    if (hod5 = 1) {
        scor += 100;
    }
    else if (hod5 = 5) {
        scor += 50;
    }
    else {
        helpf.push(hod5);
    }
    if (hod6 = 1) {
        scor += 100;
    }
    else if (hod6 = 5) {
        scor += 50;
    }
    else {
        helpf.push(hod6);
    }
return scor;
}

/*function porovnavani() {
    for (let i = 1; i < 6; i++) {
        if (helpf[i] == helpf[i2]) {
            iMax = i;
        }
        else
    }
    return iMax;
}
}

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
*/

function vypisStat() {
    /*
    stat.innerHTML = `<p>Posledni hod: ${hod}</p>`;
    stat.innerHTML += `<p>Počet hodů: ${hody.length}</p>`;
    stat.innerHTML += `<p>Součet: ${suma()}</p>`;
    stat.innerHTML += `<p>Průměr: ${(suma() / hody.length).toFixed(2)}</p>`;
    stat.innerHTML += `<p>Maximum: ${mx()}</p>`;
    stat.innerHTML += `<p>Minimum: ${mi()}</p>`;
    */
    stat.innerHTML += '<p>Hodnoty hodů: Hod 1: ' + hod1 + ' || ' + ' Hod 2: ' + hod2 + ' || ' + ' Hod 3: ' + hod3 + ' || ' + ' Hod 4: ' + hod4 + ' || ' + ' Hod 5: ' + hod5 + ' || ' + ' Hod 6: ' + hod6 + ' || ' + '</p>';
    stat.innerHTML += `<p>Počet hodů: ${hody}</p>`;
    stat.innerHTML += '<p>Skóre: ' + scor +'</p>';
}