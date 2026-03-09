document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');

if (tabButtons.length && panels.length) {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      panels.forEach(panel => panel.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });
}

const videoModal = document.getElementById('videoModal');
const videoFrameWrap = document.getElementById('videoFrameWrap');
const openVideoBtn = document.getElementById('openVideo');
const closeVideoBtn = document.getElementById('closeVideo');

const storyViewerModal = document.getElementById('storyViewerModal');
const storyViewerTitle = document.getElementById('storyViewerTitle');
const storyViewerCounter = document.getElementById('storyViewerCounter');
const storyViewerFrame = document.getElementById('storyViewerFrame');
const storyViewerOpenPdf = document.getElementById('storyViewerOpenPdf');
const closeStoryViewerBtn = document.getElementById('closeStoryViewer');
const shareStoryPdfBtn = document.getElementById('shareStoryPdf');
const storyCards = document.querySelectorAll('.openStoryViewer');

const subscribeModal = document.getElementById('subscribeModal');
const openSubscribeModalBtn = document.getElementById('openSubscribeModal');
const closeSubscribeModalBtn = document.getElementById('closeSubscribeModal');
const subscribeForm = document.getElementById('subscribeForm');

const promoModal = document.getElementById('promoModal');
const openPromoModalBtn = document.getElementById('openPromoModal');
const closePromoModalBtn = document.getElementById('closePromoModal');

const sharePageBtn = document.getElementById('sharePageBtn');

let currentStoryPdf = '';
let currentStoryTitle = '';

function isModalOpen(modal) {
  return !!modal && modal.classList.contains('active');
}

function resetBodyScroll() {
  if (
    !isModalOpen(videoModal) &&
    !isModalOpen(storyViewerModal) &&
    !isModalOpen(subscribeModal) &&
    !isModalOpen(promoModal)
  ) {
    document.body.style.overflow = '';
  }
}

function buildAbsoluteUrl(path) {
  return new URL(path, window.location.href).href;
}

function getPdfPreviewUrl(pdfPath) {
  return `${pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;
}

function shareUrl(url, title = document.title) {
  if (navigator.share) {
    navigator.share({
      title,
      url
    }).catch(() => {});
    return;
  }

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => alert('Enlace copiado'))
      .catch(() => alert('No se pudo copiar el enlace'));
    return;
  }

  alert(url);
}

function openVideo() {
  if (!videoModal || !videoFrameWrap) return;

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
  if (!videoModal || !videoFrameWrap) return;
  videoModal.classList.remove('active');
  videoFrameWrap.innerHTML = '';
  resetBodyScroll();
}

openVideoBtn?.addEventListener('click', openVideo);
closeVideoBtn?.addEventListener('click', closeVideo);

videoModal?.addEventListener('click', function (e) {
  if (e.target === videoModal) {
    closeVideo();
  }
});

const storySlider = document.getElementById('storySlider');
const storyPrev = document.getElementById('storyPrev');
const storyNext = document.getElementById('storyNext');

function getStoryStep() {
  const firstCard = storySlider?.querySelector('.story-card');
  if (!firstCard) return 300;
  const gap = 14;
  return firstCard.offsetWidth + gap;
}

function updateStoryButtons() {
  if (!storySlider || !storyPrev || !storyNext) return;

  const maxScroll = storySlider.scrollWidth - storySlider.clientWidth;

  storyPrev.style.display = storySlider.scrollLeft <= 10 ? 'none' : 'flex';
  storyNext.style.display = storySlider.scrollLeft >= maxScroll - 10 ? 'none' : 'flex';
}

storyNext?.addEventListener('click', () => {
  storySlider?.scrollBy({
    left: getStoryStep(),
    behavior: 'smooth'
  });
});

storyPrev?.addEventListener('click', () => {
  storySlider?.scrollBy({
    left: -getStoryStep(),
    behavior: 'smooth'
  });
});

storySlider?.addEventListener('scroll', updateStoryButtons);
window.addEventListener('load', updateStoryButtons);
window.addEventListener('resize', updateStoryButtons);

function openStoryViewer(title, pdfPath, totalPages = '1') {
  if (!storyViewerModal || !storyViewerTitle || !storyViewerCounter || !storyViewerFrame || !storyViewerOpenPdf) return;

  currentStoryTitle = title;
  currentStoryPdf = pdfPath;

  storyViewerTitle.textContent = title;
  storyViewerCounter.textContent = `1 of ${totalPages}`;
  storyViewerFrame.src = getPdfPreviewUrl(pdfPath);
  storyViewerOpenPdf.href = pdfPath;
  storyViewerOpenPdf.setAttribute('aria-label', `Abrir ${title}`);

  storyViewerModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStoryViewer() {
  if (!storyViewerModal || !storyViewerFrame) return;
  storyViewerModal.classList.remove('active');
  storyViewerFrame.src = '';
  currentStoryPdf = '';
  currentStoryTitle = '';
  resetBodyScroll();
}

storyCards.forEach(card => {
  card.addEventListener('click', () => {
    openStoryViewer(
      card.getAttribute('data-title') || 'Documento',
      card.getAttribute('data-pdf') || '',
      card.getAttribute('data-pages') || '1'
    );
  });
});

closeStoryViewerBtn?.addEventListener('click', closeStoryViewer);

storyViewerModal?.addEventListener('click', function (e) {
  if (e.target === storyViewerModal) {
    closeStoryViewer();
  }
});

shareStoryPdfBtn?.addEventListener('click', () => {
  if (!currentStoryPdf) return;
  shareUrl(buildAbsoluteUrl(currentStoryPdf), currentStoryTitle || 'PDF');
});

function openSubscribeModal() {
  if (!subscribeModal) return;
  subscribeModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSubscribeModal() {
  if (!subscribeModal) return;
  subscribeModal.classList.remove('active');
  resetBodyScroll();
}

openSubscribeModalBtn?.addEventListener('click', openSubscribeModal);
closeSubscribeModalBtn?.addEventListener('click', closeSubscribeModal);

subscribeModal?.addEventListener('click', function (e) {
  if (e.target === subscribeModal) {
    closeSubscribeModal();
  }
});

subscribeForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Subscription submitted successfully');
  closeSubscribeModal();
});

function openPromoModal() {
  if (!promoModal) return;
  promoModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePromoModal() {
  if (!promoModal) return;
  promoModal.classList.remove('active');
  resetBodyScroll();
}

openPromoModalBtn?.addEventListener('click', openPromoModal);
closePromoModalBtn?.addEventListener('click', closePromoModal);

promoModal?.addEventListener('click', function (e) {
  if (e.target === promoModal) {
    closePromoModal();
  }
});

sharePageBtn?.addEventListener('click', () => {
  shareUrl(window.location.href, document.title);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeVideo();
    closeStoryViewer();
    closeSubscribeModal();
    closePromoModal();
  }
});
