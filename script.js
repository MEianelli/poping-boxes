/// <reference path="./p5.global-mode.d.ts" />;

//window.innerWidth

var wrap = document.querySelector('.wraper');
var timer = 1000;

function criarNovaCaixa() {
  let randomX = Math.floor(Math.random() * 1150);
  let randomY = Math.floor(Math.random() * 550);

  let novo = document.createElement('div');
  novo.classList.add('bloco');
  novo.innerHTML = 'CLICK';
  novo.addEventListener('click', removeBloco);

  novo.style.top = randomY + 'px';
  novo.style.right = randomX + 'px';

  wrap.appendChild(novo);
  timer -= 10;

  if (wrap.childNodes.length > 20) {
    alert('YOU GET NOTHING!! YOU LOSE!! GOOD DAY SR!!');
    return;
  }

  setTimeout(criarNovaCaixa, timer);
}

function removeBloco(evt) {
  wrap.removeChild(evt.target);
}

criarNovaCaixa();
