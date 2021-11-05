const num1 = document.getElementById('cube1');
const num2 = document.getElementById('cube2');
const stat = document.getElementById('result');
const buttonek = document.getElementById('playb');

let hod1 = 1;
let hod2 = 1;
let timer = false;

function animace() {
    hod1 = Math.ceil(Math.random() * 6);
    hod2 = Math.ceil(Math.random() * 6);
    num1.src = 'img/kostka' + hod1 + '.png';
    num2.src = 'img/kostka' + hod2 + '.png';
}

buttonek.addEventListener('click', function () {
    if (!timer) {
        timer = setInterval(animace, 50);
        buttonek.innerText = 'STOP';
    } else {
        clearInterval(timer);
        timer = false;
        buttonek.innerText = 'PLAY'
        vypisStat();
    }
})

function mach(){
    if((hod1==1 && hod2==2) || (hod1 ==2 && hod2 == 1)){
        return 'macháčka';
    }
    else if(hod1 ==1 && hod1 == hod2){
        return hod1 + ' indiánek';
    }
    else if (hod1 == hod2 && hod1 > 4){
        return hod1 + ' indiánků';
    }
    else if(hod1 == hod2){
        return hod1 + ' indiánky';
    }else{
        if(hod1>hod2){
            return hod1 * 10 + hod2;
        } else{
            return hod2 * 10 + hod1;
        }
    }
}

function vypisStat() {    
    stat.innerHTML = `<p>Posledni hody:</p>`;
    stat.innerHTML += '<p>' + hod1 + ' || ' + hod2 + '</p>';
    stat.innerHTML += '<p>Hodili jste ' + mach() + '</p>';
}