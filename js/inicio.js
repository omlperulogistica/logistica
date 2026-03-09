document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});

const openVideoBtn = document.getElementById('openVideo');
const closeVideoBtn = document.getElementById('closeVideo');
const videoModal = document.getElementById('videoModal');
const videoFrameWrap = document.getElementById('videoFrameWrap');

function openVideo() {
  videoFrameWrap.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/KGjkBw9RPzg?start=8&autoplay=1&rel=0"
      title="Video OML PERÚ"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
  videoModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeVideo() {
  videoModal.classList.remove('active');
  videoFrameWrap.innerHTML = '';
  if (
    !storyViewerModal.classList.contains('active') &&
    !subscribeModal.classList.contains('active') &&
    !promoModal.classList.contains('active')
  ) {
    document.body.style.overflow = '';
  }
}

openVideoBtn.addEventListener('click', openVideo);
closeVideoBtn.addEventListener('click', closeVideo);

videoModal.addEventListener('click', function(e){
  if(e.target === videoModal){
    closeVideo();
  }
});

const storySlider = document.getElementById('storySlider');
const storyPrev = document.getElementById('storyPrev');
const storyNext = document.getElementById('storyNext');

function getStoryStep() {
  const firstCard = storySlider.querySelector('.story-card');
  if (!firstCard) return 300;
  const gap = 14;
  return firstCard.offsetWidth + gap;
}

function updateStoryButtons() {
  const maxScroll = storySlider.scrollWidth - storySlider.clientWidth;

  if (storySlider.scrollLeft <= 10) {
    storyPrev.style.display = 'none';
  } else {
    storyPrev.style.display = 'flex';
  }

  if (storySlider.scrollLeft >= maxScroll - 10) {
    storyNext.style.display = 'none';
  } else {
    storyNext.style.display = 'flex';
  }
}

storyNext.addEventListener('click', () => {
  storySlider.scrollBy({
    left: getStoryStep(),
    behavior: 'smooth'
  });
});

storyPrev.addEventListener('click', () => {
  storySlider.scrollBy({
    left: -getStoryStep(),
    behavior: 'smooth'
  });
});

storySlider.addEventListener('scroll', updateStoryButtons);
window.addEventListener('load', updateStoryButtons);
window.addEventListener('resize', updateStoryButtons);

const storyViewerModal = document.getElementById('storyViewerModal');
const closeStoryViewerBtn = document.getElementById('closeStoryViewer');
const storyViewerTitle = document.getElementById('storyViewerTitle');
const storyViewerImage = document.getElementById('storyViewerImage');
const storyCards = document.querySelectorAll('.openStoryViewer');

function openStoryViewer(title, image) {
  storyViewerTitle.textContent = title;
  storyViewerImage.src = image;
  storyViewerImage.alt = title;
  storyViewerModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStoryViewer() {
  storyViewerModal.classList.remove('active');
  if (
    !videoModal.classList.contains('active') &&
    !subscribeModal.classList.contains('active') &&
    !promoModal.classList.contains('active')
  ) {
    document.body.style.overflow = '';
  }
}

storyCards.forEach(card => {
  card.addEventListener('click', () => {
    openStoryViewer(
      card.getAttribute('data-title'),
      card.getAttribute('data-image')
    );
  });
});

closeStoryViewerBtn.addEventListener('click', closeStoryViewer);

storyViewerModal.addEventListener('click', function(e){
  if (e.target === storyViewerModal) {
    closeStoryViewer();
  }
});

const openSubscribeModalBtn = document.getElementById('openSubscribeModal');
const closeSubscribeModalBtn = document.getElementById('closeSubscribeModal');
const subscribeModal = document.getElementById('subscribeModal');
const subscribeForm = document.getElementById('subscribeForm');

function openSubscribeModal() {
  subscribeModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSubscribeModal() {
  subscribeModal.classList.remove('active');
  if (
    !videoModal.classList.contains('active') &&
    !storyViewerModal.classList.contains('active') &&
    !promoModal.classList.contains('active')
  ) {
    document.body.style.overflow = '';
  }
}

openSubscribeModalBtn.addEventListener('click', openSubscribeModal);
closeSubscribeModalBtn.addEventListener('click', closeSubscribeModal);

subscribeModal.addEventListener('click', function(e){
  if(e.target === subscribeModal){
    closeSubscribeModal();
  }
});

subscribeForm.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Subscription submitted successfully');
  closeSubscribeModal();
});

const openPromoModalBtn = document.getElementById('openPromoModal');
const closePromoModalBtn = document.getElementById('closePromoModal');
const promoModal = document.getElementById('promoModal');

function openPromoModal() {
  promoModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePromoModal() {
  promoModal.classList.remove('active');
  if (
    !videoModal.classList.contains('active') &&
    !storyViewerModal.classList.contains('active') &&
    !subscribeModal.classList.contains('active')
  ) {
    document.body.style.overflow = '';
  }
}

openPromoModalBtn.addEventListener('click', openPromoModal);
closePromoModalBtn.addEventListener('click', closePromoModal);

promoModal.addEventListener('click', function(e){
  if(e.target === promoModal){
    closePromoModal();
  }
});

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    closeVideo();
    closeStoryViewer();
    closeSubscribeModal();
    closePromoModal();
  }
});