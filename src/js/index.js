import { smallru,smallen,bigru,bigen,bigcapsen,bigcapsru } from "./ruen.js";
const createContainer = (tag, style) => {
    const retag = document.createElement(tag);
    retag.classList.add(style);
    return retag;
};
var sa=0;
let html = document.querySelector('html');
let body = document.getElementsByTagName('body')[0];
var check = 'small';
var lang = 'en';
let pressed = new Set();
//alert(body);
let textarea = createContainer('textarea','textarea');
body.prepend(textarea);
let divkeyboard = createContainer('div','divkeyboard');
body.append(divkeyboard);
let span = document.createElement('span');
span.classList.add('span');
span.textContent = "To change keybord, use shift+alt; Keyboard write on windows."
body.append(span);
html.onkeydown=function handle(e) {
    textarea.focus();
    
    addback(e.key);
    if(e.key == 'Tab'){
        textarea.value+= '\t';
        return false;
    }
    if(e.key == 'Alt'){
        return false;
    }
    console.log(bigcapsen);
    if(e.key == 'Shift' && lang=='en'){
        tobigen();
        sa=sa+1;
    }
    if(e.key == 'Shift' && lang=='ru'){
        tobigru();
        sa=sa+1;
    }
    if(e.key=='Alt'){
        sa=sa+1;
    }

}
html.onkeyup=function handle(e) {
    addanim(e.key);
    setTimeout(clearanim,1100);
    
    console.log(e.key);
    if(e.key == 'Shift'&& lang =='en'){
        tosmallen();
        sa=0;
    }
    if(e.key == 'Shift'&& lang =='ru'){
        tosmallru();
        sa=0;
    }
    if(e.key=='Alt'){
        sa=0;
    }
    if(e.key == 'CapsLock'){
        if(check == 'small'){
            if(lang=='ru'){tobigrucaps();check='big';}else{tobigencaps();check='big'}
        }else{
            if(lang=='ru'){tosmallru();check='small';}else{tosmallen();check='small'}
        }
    }

}
let divkeyrow = createContainer('div','divkeyrow');
let divkeyrow2 = createContainer('div','divkeyrow2');
let divkeyrow3 = createContainer('div','divkeyrow3');
let divkeyrow4 = createContainer('div','divkeyrow4');
let divkeyrow5 = createContainer('div','divkeyrow5');
divkeyboard.prepend(divkeyrow);
divkeyboard.append(divkeyrow2);
divkeyboard.append(divkeyrow3);
divkeyboard.append(divkeyrow4);
divkeyboard.append(divkeyrow5);
console.log(localStorage.getItem('lang'));
for(let j=0;j<smallen.length;j++){
for(let i=0;i<smallen[j].length;i++){
    let divkeyrowkey = createContainer('div','divkeyrowkeys');
    divkeyboard.childNodes[j].append(divkeyrowkey);
    divkeyrowkey.onclick = function(event) {
        divkeyrowkey.style.animation = "ch 1s ease-in";
        if(divkeyrowkey.textContent == 'Enter'){textarea.value+='\n'}
        if(divkeyrowkey.textContent == 'Tab'){textarea.value+='\t'}
        if(divkeyrowkey.textContent == 'CapsLock'){
            if(check == 'small'){
                if(lang=='ru'){tobigrucaps();check='big';}else{tobigencaps();check='big'}
            }else{
                if(lang=='ru'){tosmallru();check='small';}else{tosmallen();check='small'}
            }
        }
        if(divkeyrowkey.textContent == 'Delete'){}
        if(divkeyrowkey.textContent == 'Backspace'){}
        if(!(divkeyrowkey.textContent == 'Enter' || divkeyrowkey.textContent == 'Tab' || divkeyrowkey.textContent == 'CapsLock' || divkeyrowkey.textContent == 'Shift' || divkeyrowkey.textContent == 'Control'|| divkeyrowkey.textContent == 'Meta'||divkeyrowkey.textContent == 'Alt'||divkeyrowkey.textContent == 'Delete'||divkeyrowkey.textContent == 'Backspace')){textarea.value+=divkeyrowkey.textContent;}
        

      }
    divkeyrowkey.textContent = smallen[j][i];
    if(smallen[j][i]=='ArrowUp'){divkeyrowkey.textContent = '↑';}
    if(smallen[j][i]=='ArrowLeft'){divkeyrowkey.textContent = '🠔';}
    if(smallen[j][i]=='ArrowDown'){divkeyrowkey.textContent = '🠗';}
    if(smallen[j][i]=='ArrowRight'){divkeyrowkey.textContent = '➝';}
    if(smallen[j][i]=='Meta'){divkeyrowkey.textContent = '🗗';}
}}
function tobigen(){
    for(let j=0;j<bigen.length;j++){
        for(let i=0;i<bigen[j].length;i++){ 
            divkeyboard.childNodes[j].childNodes[i].textContent = bigen[j][i];
            if(bigen[j][i]=='ArrowUp'){divkeyboard.childNodes[j].childNodes[i].textContent = '↑';}
            if(bigen[j][i]=='ArrowLeft'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠔';}
            if(bigen[j][i]=='ArrowDown'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠗';}
            if(bigen[j][i]=='ArrowRight'){divkeyboard.childNodes[j].childNodes[i].textContent = '➝';}
            if(bigen[j][i]=='Meta'){divkeyboard.childNodes[j].childNodes[i].textContent = '🗗';}
        }}
        check = 'big';
}
function tosmallen(){
    for(let j=0;j<smallen.length;j++){
        for(let i=0;i<smallen[j].length;i++){ 
            divkeyboard.childNodes[j].childNodes[i].textContent = smallen[j][i];
            if(smallen[j][i]=='ArrowUp'){divkeyboard.childNodes[j].childNodes[i].textContent = '↑';}
            if(smallen[j][i]=='ArrowLeft'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠔';}
            if(smallen[j][i]=='ArrowDown'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠗';}
            if(smallen[j][i]=='ArrowRight'){divkeyboard.childNodes[j].childNodes[i].textContent = '➝';}
            if(smallen[j][i]=='Meta'){divkeyboard.childNodes[j].childNodes[i].textContent = '🗗';}
    }}
    check = 'small';
}
function tobigencaps(){
    for(let j=0;j<bigcapsen.length;j++){
        for(let i=0;i<bigcapsen[j].length;i++){ 
            divkeyboard.childNodes[j].childNodes[i].textContent = bigcapsen[j][i];
            if(bigcapsen[j][i]=='ArrowUp'){divkeyboard.childNodes[j].childNodes[i].textContent = '↑';}
            if(bigcapsen[j][i]=='ArrowLeft'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠔';}
            if(bigcapsen[j][i]=='ArrowDown'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠗';}
            if(bigcapsen[j][i]=='ArrowRight'){divkeyboard.childNodes[j].childNodes[i].textContent = '➝';}
            if(bigcapsen[j][i]=='Meta'){divkeyboard.childNodes[j].childNodes[i].textContent = '🗗';}
    }}
    check='big';
}
function tobigru(){
    for(let j=0;j<bigru.length;j++){
        for(let i=0;i<bigru[j].length;i++){ 
            divkeyboard.childNodes[j].childNodes[i].textContent = bigru[j][i];
            if(bigru[j][i]=='ArrowUp'){divkeyboard.childNodes[j].childNodes[i].textContent = '↑';}
            if(bigru[j][i]=='ArrowLeft'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠔';}
            if(bigru[j][i]=='ArrowDown'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠗';}
            if(bigru[j][i]=='ArrowRight'){divkeyboard.childNodes[j].childNodes[i].textContent = '➝';}
            if(bigru[j][i]=='Meta'){divkeyboard.childNodes[j].childNodes[i].textContent = '🗗';}
        }}
        check = 'big';
}
function tosmallru(){
    for(let j=0;j<smallru.length;j++){
        for(let i=0;i<smallru[j].length;i++){ 
            divkeyboard.childNodes[j].childNodes[i].textContent = smallru[j][i];
            if(smallru[j][i]=='ArrowUp'){divkeyboard.childNodes[j].childNodes[i].textContent = '↑';}
            if(smallru[j][i]=='ArrowLeft'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠔';}
            if(smallru[j][i]=='ArrowDown'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠗';}
            if(smallru[j][i]=='ArrowRight'){divkeyboard.childNodes[j].childNodes[i].textContent = '➝';}
            if(smallru[j][i]=='Meta'){divkeyboard.childNodes[j].childNodes[i].textContent = '🗗';}
    }}
    check = 'small';
}
function tobigrucaps(){
    for(let j=0;j<bigcapsru.length;j++){
        for(let i=0;i<bigcapsru[j].length;i++){ 
            divkeyboard.childNodes[j].childNodes[i].textContent = bigcapsru[j][i];
            if(bigcapsru[j][i]=='ArrowUp'){divkeyboard.childNodes[j].childNodes[i].textContent = '↑';}
            if(bigcapsru[j][i]=='ArrowLeft'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠔';}
            if(bigcapsru[j][i]=='ArrowDown'){divkeyboard.childNodes[j].childNodes[i].textContent = '🠗';}
            if(bigcapsru[j][i]=='ArrowRight'){divkeyboard.childNodes[j].childNodes[i].textContent = '➝';}
            if(bigcapsru[j][i]=='Meta'){divkeyboard.childNodes[j].childNodes[i].textContent = '🗗';}
    }}
    check='big';
}
function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.key);
      for (let key of codes) { 
        if (!pressed.has(key)) {
          return;
        }
      }
      pressed.clear();
      if(lang=='ru'){tosmallen();lang='en'}else{tosmallru();lang='ru'}
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.key);
    });

  }

  runOnKeys(
    () => alert('hi'),
    "Shift",
    "Alt"
  );
  function addback(str){
        for(let j=0;j<bigcapsru.length;j++){
            for(let i=0;i<bigcapsru[j].length;i++){
                if(str==divkeyboard.childNodes[j].childNodes[i].textContent){divkeyboard.childNodes[j].childNodes[i].style.background = 'blue'; }
                
            }}
            if(str=='ArrowUp'){divkeyboard.childNodes[3].childNodes[11].style.background = 'blue';}
            if(str=='ArrowLeft'){divkeyboard.childNodes[4].childNodes[6].style.background = 'blue';}
            if(str=='ArrowDown'){divkeyboard.childNodes[4].childNodes[7].style.background = 'blue';}
            if(str=='ArrowRight'){divkeyboard.childNodes[4].childNodes[8].style.background = 'blue';}
            if(str=='Meta'){divkeyboard.childNodes[4].childNodes[1].style.background = 'blue';}
                
            
  }
  function addanim(str){
    for(let j=0;j<bigcapsru.length;j++){
        for(let i=0;i<bigcapsru[j].length;i++){
            if(str==divkeyboard.childNodes[j].childNodes[i].textContent){divkeyboard.childNodes[j].childNodes[i].style.background = "black";divkeyboard.childNodes[j].childNodes[i].style.animation = "ch 1s ease-in";}
        }}
        if(str=='ArrowUp'){divkeyboard.childNodes[3].childNodes[11].style.background = "black";divkeyboard.childNodes[3].childNodes[11].style.animation = "ch 1s ease-in";}
        if(str=='ArrowLeft'){divkeyboard.childNodes[4].childNodes[6].style.background = "black";divkeyboard.childNodes[4].childNodes[6].style.animation = "ch 1s ease-in";}
        if(str=='ArrowDown'){divkeyboard.childNodes[4].childNodes[7].style.background = "black";divkeyboard.childNodes[4].childNodes[7].style.animation = "ch 1s ease-in";}
        if(str=='ArrowRight'){divkeyboard.childNodes[4].childNodes[8].style.background = "black";divkeyboard.childNodes[4].childNodes[8].style.animation = "ch 1s ease-in";}
        if(str=='Meta'){divkeyboard.childNodes[4].childNodes[1].style.background = "black";divkeyboard.childNodes[4].childNodes[1].style.animation = "ch 1s ease-in";}
    }
    function clearanim(str){
        for(let j=0;j<bigcapsru.length;j++){
            for(let i=0;i<bigcapsru[j].length;i++){
                if(str==divkeyboard.childNodes[j].childNodes[i].textContent){divkeyboard.childNodes[j].childNodes[i].style.animation = 'none'; divkeyboard.childNodes[j].childNodes[i].style.background = 'black';}
        }}
        if(str=='ArrowUp'){divkeyboard.childNodes[3].childNodes[11].style.animation = 'none'; divkeyboard.childNodes[3].childNodes[11].style.background = 'black';}
        if(str=='ArrowLeft'){divkeyboard.childNodes[4].childNodes[6].style.animation = ""; divkeyboard.childNodes[4].childNodes[6].style.background = 'black';}
        if(str=='ArrowDown'){divkeyboard.childNodes[4].childNodes[7].style.animation = ""; divkeyboard.childNodes[4].childNodes[7].style.background = 'black';}
        if(str=='ArrowRight'){divkeyboard.childNodes[4].childNodes[8].style.animation = ""; divkeyboard.childNodes[4].childNodes[8].style.background = 'black';}
        if(str=='Meta'){divkeyboard.childNodes[4].childNodes[1].style.animation = ""; divkeyboard.childNodes[4].childNodes[1].style.background = 'black';}
  }
  