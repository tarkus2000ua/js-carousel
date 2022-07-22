const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const cards = document.querySelectorAll('.card-container');
const cardsCount = cards.length;

const track = document.querySelector('.track');

const ITEM_WIDTH = 250;
const ITEMS_GAP = 50;
const INITIAL_OFFSET = 175;

let activeIndex = 0;
createDots(cardsCount);

// let carouselWidth = document.querySelector('.carousel-container').offsetWidth;
// console.log('carousel width ', carouselWidth);

// window.addEventListener('resize', () => {
//   carouselWidth = document.querySelector('.carousel-container').offsetWidth;
// });


next.addEventListener('click', () => {
    activeIndex++;
//   console.log(index);
  //   prev.classList.add('show');
  //   track.style.transform = `translateX(-${index * carouselWidth}px)`;
  scrollToItem(activeIndex);

  //   if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
  //   if (index === cardsCount - 2) {
  //     next.classList.add('hide');
  //   }
});

prev.addEventListener('click', () => {
    activeIndex--;
//   console.log(index);
//   next.classList.remove('hide');
  //   if (index === 0) {
  //     prev.classList.remove('show');
  //   }
  //   track.style.transform = `translateX(-${index * carouselWidth}px)`;
  scrollToItem(activeIndex);
});

function scrollToItem(index) {
    console.log(index);
  if (index > 0 && !prev.classList.contains('show')) {
    prev.classList.add('show');
    console.log(prev.classList);
  }

  if (index === 0 && prev.classList.contains('show')) {
    prev.classList.remove('show');
  }

  if (index < cardsCount - 1 && !next.classList.contains('show')) {
    next.classList.add('show');
  }

  if (index >= cardsCount - 1 && next.classList.contains('show')) {
    next.classList.remove('show');
  }

  console.log(track.style.transform);
  console.log(index * (ITEM_WIDTH + ITEMS_GAP));
  console.log(index * (ITEM_WIDTH + ITEMS_GAP) - INITIAL_OFFSET);
  track.style.transform = `translateX(${
    -1 * index * (ITEM_WIDTH + ITEMS_GAP) + INITIAL_OFFSET
  }px)`;

  highlightActiveDot(index);
}

function createDots(count) {
  const dotsContainer = document.querySelector('.dots');
  for (let i = 0; i < count; i++) {
    const dot = createDot(i);
    dotsContainer.appendChild(dot);
  }
}

function createDot(index) {
  const dot = document.createElement('div');
  dot.classList.add('dot-item');
  if (index === activeIndex) {
    dot.classList.add('active');
  }
  dot.id = index;
  dot.title = index+1;
  dot.addEventListener('click', () => {
    scrollToItem(index);
    activeIndex = index;
});
  return dot;
}

function highlightActiveDot(index){
    const activeDot = document.querySelector('.active');
    activeDot.classList.remove('active');
    const currentDot = document.getElementById(index);
    currentDot.classList.add('active');
}
