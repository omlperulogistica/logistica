document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

const EMAILJS_PUBLIC_KEY = 'TU_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'TU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'TU_TEMPLATE_ID';

const tabButtons = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');
const tabsTop = document.getElementById('tabsTop');

const fieldSlideImg = document.getElementById('fieldSlideImg');

const fieldSliderImages = [
  {
    src: 'img/campoproduccion.jpeg',
    alt: 'Campo de Producción OML PERÚ'
  },
  {
    src: 'img/campoproducto1.jpeg',
    alt: 'Jengibre fresco'
  },
  {
    src: 'img/jengibrecampo2.jpeg',
    alt: 'Producción de jengibre'
  }
];

let fieldSliderIndex = 0;
let fieldSliderInterval = null;

function paintFieldSlider(index) {
  if (!fieldSlideImg || !fieldSliderImages.length) return;

  const current = fieldSliderImages[index % fieldSliderImages.length];
  fieldSlideImg.src = current.src;
  fieldSlideImg.alt = current.alt;
}

function changeFieldSlider() {
  if (!fieldSlideImg || fieldSliderImages.length < 2) return;

  fieldSlideImg.classList.add('is-fading');

  setTimeout(() => {
    fieldSliderIndex = (fieldSliderIndex + 1) % fieldSliderImages.length;
    paintFieldSlider(fieldSliderIndex);
    fieldSlideImg.classList.remove('is-fading');
  }, 220);
}

function startFieldSlider() {
  if (!fieldSlideImg || fieldSliderImages.length < 2) return;

  paintFieldSlider(fieldSliderIndex);

  if (fieldSliderInterval) {
    clearInterval(fieldSliderInterval);
  }

  fieldSliderInterval = setInterval(changeFieldSlider, 2000);
}

function stopFieldSlider() {
  if (fieldSliderInterval) {
    clearInterval(fieldSliderInterval);
    fieldSliderInterval = null;
  }
}

function switchTab(targetId) {
  tabButtons.forEach(btn => btn.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('active'));

  const button = [...tabButtons].find(btn => btn.getAttribute('data-tab') === targetId);
  const panel = document.getElementById(targetId);

  if (button) button.classList.add('active');
  if (panel) panel.classList.add('active');
}

if (tabButtons.length && panels.length) {
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-tab');
      switchTab(target);
    });
  });
}

document.querySelectorAll('.openStoreTab').forEach(button => {
  button.addEventListener('click', () => {
    switchTab('panelTienda');
    tabsTop?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const videoModal = document.getElementById('videoModal');
const videoFrameWrap = document.getElementById('videoFrameWrap');
const openVideoBtn = document.getElementById('openVideo');
const closeVideoBtn = document.getElementById('closeVideo');

const storyViewerModal = document.getElementById('storyViewerModal');
const storyViewerTitle = document.getElementById('storyViewerTitle');
const storyViewerCounter = document.getElementById('storyViewerCounter');
const storyViewerDocWrap = document.getElementById('storyViewerDocWrap');
const storyViewerLoading = document.getElementById('storyViewerLoading');
const storyViewerPages = document.getElementById('storyViewerPages');
const storyViewerOpenPdf = document.getElementById('storyViewerOpenPdf');
const closeStoryViewerBtn = document.getElementById('closeStoryViewer');
const shareStoryPdfBtn = document.getElementById('shareStoryPdf');
const storyCards = document.querySelectorAll('.openStoryViewer');

const subscribeModal = document.getElementById('subscribeModal');
const openSubscribeModalBtn = document.getElementById('openSubscribeModal');
const closeSubscribeModalBtn = document.getElementById('closeSubscribeModal');
const subscribeForm = document.getElementById('subscribeForm');
const subscribeSubmitBtn = document.getElementById('subscribeSubmitBtn');

const promoModal = document.getElementById('promoModal');
const openPromoModalBtn = document.getElementById('openPromoModal');
const closePromoModalBtn = document.getElementById('closePromoModal');

const sharePageBtn = document.getElementById('sharePageBtn');

let currentStoryPdf = '';
let currentStoryTitle = '';
let currentPdfTotalPages = 1;
let currentRenderToken = 0;
let currentPageObserver = null;
let resizeTimeout = null;

if (window.pdfjsLib) {
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

if (window.emailjs) {
  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
  });
}

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

function shareUrl(url, title = document.title) {
  if (navigator.share) {
    navigator.share({ title, url }).catch(() => {});
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

function setStoryLoading(isLoading, message = 'Cargando PDF...') {
  if (!storyViewerDocWrap || !storyViewerLoading) return;

  storyViewerLoading.textContent = message;

  if (isLoading) {
    storyViewerDocWrap.classList.add('is-loading');
  } else {
    storyViewerDocWrap.classList.remove('is-loading');
  }
}

function updateStoryCounter(current, total) {
  if (!storyViewerCounter) return;
  storyViewerCounter.textContent = `${current} of ${total}`;
}

function clearStoryPages() {
  if (storyViewerPages) {
    storyViewerPages.innerHTML = '';
  }

  if (currentPageObserver) {
    currentPageObserver.disconnect();
    currentPageObserver = null;
  }
}

function observeVisiblePages(totalPages) {
  if (!storyViewerDocWrap || !storyViewerPages) return;

  const pages = [...storyViewerPages.querySelectorAll('.story-viewer-pdf-page')];
  if (!pages.length) return;

  if (currentPageObserver) {
    currentPageObserver.disconnect();
  }

  currentPageObserver = new IntersectionObserver(
    entries => {
      const visibleEntry = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      const pageNumber = Number(visibleEntry.target.dataset.page || 1);
      updateStoryCounter(pageNumber, totalPages);
    },
    {
      root: storyViewerDocWrap,
      threshold: [0.5, 0.7, 0.9]
    }
  );

  pages.forEach(page => currentPageObserver.observe(page));
}

async function renderPdfWithPdfJs(pdfPath) {
  if (!window.pdfjsLib || !storyViewerPages || !storyViewerDocWrap) {
    setStoryLoading(true, 'No se pudo mostrar el PDF aquí. Usa View para abrirlo.');
    return;
  }

  const renderToken = ++currentRenderToken;

  clearStoryPages();
  setStoryLoading(true, 'Cargando PDF...');
  updateStoryCounter(1, 1);

  try {
    const loadingTask = pdfjsLib.getDocument(pdfPath);
    const pdf = await loadingTask.promise;

    if (renderToken !== currentRenderToken) return;

    currentPdfTotalPages = pdf.numPages || 1;
    updateStoryCounter(1, currentPdfTotalPages);

    const wrapStyle = getComputedStyle(storyViewerDocWrap);
    const horizontalPadding =
      parseFloat(wrapStyle.paddingLeft) + parseFloat(wrapStyle.paddingRight);

    const availableWidth = Math.max(280, storyViewerDocWrap.clientWidth - horizontalPadding);

    for (let pageNumber = 1; pageNumber <= currentPdfTotalPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      if (renderToken !== currentRenderToken) return;

      const unscaledViewport = page.getViewport({ scale: 1 });
      const scale = availableWidth / unscaledViewport.width;
      const viewport = page.getViewport({ scale });

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const renderViewport = page.getViewport({ scale: scale * dpr });

      const pageBox = document.createElement('div');
      pageBox.className = 'story-viewer-pdf-page';
      pageBox.dataset.page = pageNumber;

      const canvas = document.createElement('canvas');
      canvas.className = 'story-viewer-canvas';

      const context = canvas.getContext('2d', { alpha: false });

      canvas.width = Math.floor(renderViewport.width);
      canvas.height = Math.floor(renderViewport.height);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;

      pageBox.appendChild(canvas);
      storyViewerPages.appendChild(pageBox);

      await page.render({
        canvasContext: context,
        viewport: renderViewport
      }).promise;
    }

    if (renderToken !== currentRenderToken) return;

    setStoryLoading(false);
    storyViewerDocWrap.scrollTop = 0;
    observeVisiblePages(currentPdfTotalPages);
  } catch (error) {
    if (renderToken !== currentRenderToken) return;
    setStoryLoading(true, 'No se pudo mostrar el PDF aquí. Usa View para abrirlo.');
  }
}

function openStoryViewer(title, pdfPath) {
  if (!storyViewerModal || !storyViewerTitle || !storyViewerOpenPdf) return;

  currentStoryTitle = title;
  currentStoryPdf = pdfPath;
  currentPdfTotalPages = 1;

  storyViewerTitle.textContent = title;
  storyViewerOpenPdf.href = pdfPath;
  storyViewerOpenPdf.setAttribute('aria-label', `Abrir ${title}`);

  storyViewerModal.classList.add('active');
  document.body.style.overflow = 'hidden';

  renderPdfWithPdfJs(pdfPath);
}

function closeStoryViewer() {
  if (!storyViewerModal) return;

  currentRenderToken++;
  currentStoryPdf = '';
  currentStoryTitle = '';
  currentPdfTotalPages = 1;

  storyViewerModal.classList.remove('active');
  clearStoryPages();
  setStoryLoading(true, 'Cargando PDF...');
  resetBodyScroll();
}

storyCards.forEach(card => {
  card.addEventListener('click', () => {
    openStoryViewer(
      card.getAttribute('data-title') || 'Documento',
      card.getAttribute('data-pdf') || ''
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

subscribeForm?.addEventListener('submit', async function (e) {
  e.preventDefault();

  if (!window.emailjs) {
    alert('Falta conectar EmailJS.');
    return;
  }

  if (!subscribeSubmitBtn) {
    alert('No se encontró el botón de envío.');
    return;
  }

  const originalText = subscribeSubmitBtn.textContent;
  subscribeSubmitBtn.disabled = true;
  subscribeSubmitBtn.textContent = 'Enviando...';

  try {
    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      '#subscribeForm'
    );

    alert('Suscripción enviada correctamente');
    subscribeForm.reset();
    closeSubscribeModal();
  } catch (error) {
    console.error('Error al enviar suscripción:', error);
    alert('No se pudo enviar la suscripción. Revisa EmailJS.');
  } finally {
    subscribeSubmitBtn.disabled = false;
    subscribeSubmitBtn.textContent = originalText;
  }
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

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopFieldSlider();
  } else {
    startFieldSlider();
  }
});

window.addEventListener('resize', () => {
  if (!isModalOpen(storyViewerModal) || !currentStoryPdf) return;

  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    renderPdfWithPdfJs(currentStoryPdf);
  }, 180);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeVideo();
    closeStoryViewer();
    closeSubscribeModal();
    closePromoModal();
  }
});

window.addEventListener('beforeunload', stopFieldSlider);

startFieldSlider();