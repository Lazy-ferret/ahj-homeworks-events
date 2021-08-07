const goblinImg = document.createElement('img');
goblinImg.src = './img/goblin.png';
goblinImg.classList.add('goblin-img');

const holes = document.querySelectorAll('.hole');

const hit = document.getElementById('hit');
let hitCount = 0;
const miss = document.getElementById('miss');
let missCount = 0;

const startBtn = document.querySelector('.start-button');
const resultTitle = document.createElement('h2');
const parentEl = document.querySelector('.start-title');

let timerID;
let position = 0;

function getRandom() {
  const num = Math.floor(Math.random() * holes.length);
  if (num !== position) {
    position = num;
  } else {
    getRandom();
  }
}

function changePosition() {
  getRandom();
  if (document.images) {
    const currentImgParent = document.images[0].parentElement;
    currentImgParent.removeChild(document.images[0]);
  }
  holes[position].insertAdjacentElement('afterbegin', goblinImg);
}

const setTimer = () => {
  changePosition();
  timerID = setTimeout(() => {
    setTimer();
  }, 1000);
};

const clearTimer = () => {
  if (timerID) {
    clearTimeout(timerID);
  }
};

function GameStart() {
  if (resultTitle.textContent) {
    parentEl.removeChild(resultTitle);
  }
  setTimer();
  hitCount = 0;
  missCount = 0;
  hit.textContent = hitCount;
  miss.textContent = missCount;
}

function GameStop() {
  clearTimer();
  parentEl.appendChild(resultTitle);
}

holes.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('goblin-img')) {
      clearTimer();
      setTimer();
      hitCount += 1;
      hit.textContent = hitCount;
      if (hitCount === 5) {
        GameStop();
        resultTitle.textContent = 'Победа! Поздравляю!';
      }
    } else {
      missCount += 1;
      miss.textContent = missCount;
      if (missCount === 5) {
        GameStop();
        resultTitle.textContent = 'Ты проиграл! Попробуй еще раз';
      }
    }
  });
});

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  GameStart();
});
