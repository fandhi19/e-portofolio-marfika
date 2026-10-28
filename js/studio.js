/**
 * Studio Theme Interactive Engine
 * Marfika Sayekti, S.Pd. - E-Portofolio PPG PJOK UNY
 * Features: Modals, Video Lightbox, Photo Lightbox, Form Toasts, Carousel Dots, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initModalStore();
  initVideoModal();
  initPhotoLightbox();
  initCtaForm();
  initWorkCarouselDots();
  initGalleryFilter();
  initTestimonialNav();
});

/* -------------------------------------------------------------
 * 1. Sticky Navbar Effect
 * ------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-studio');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 35) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* -------------------------------------------------------------
 * 2. Mobile Menu Toggle
 * ------------------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-studio-toggle');
  const navMenu = document.querySelector('.nav-menu-studio');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
      const icon = toggleBtn.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('mobile-open')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Dropdown accordion toggle for mobile
    const dropdownToggles = navMenu.querySelectorAll('.nav-studio-dropdown > a');
    dropdownToggles.forEach(dropToggle => {
      dropToggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = dropToggle.closest('.nav-studio-dropdown');
          if (parent) parent.classList.toggle('mobile-expanded');
        }
      });
    });

    // Close mobile menu on clicking direct links or dropdown items
    navMenu.querySelectorAll('.nav-link-studio:not(.nav-studio-dropdown > a), .dropdown-studio-item').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }
}

/* -------------------------------------------------------------
 * 3. Modal Store & Artifact Preview
 * ------------------------------------------------------------- */
const studioModalData = {
  'modul-voli': {
    category: 'SIKLUS 1 • UTS PPL TERBIMBING',
    title: 'Modul Ajar PJOK: Bola Voli Berdiferensiasi (Problem Based Learning)',
    meta: 'Fase E (Kelas X) • Alokasi 3 JP (3 x 45 Menit) • SMP Negeri 12 Yogyakarta',
    body: `
      <div style="margin-bottom: 1.25rem;">
        <h4 style="color:#0F172A; margin-bottom: 0.5rem; font-weight:800;">Target Capaian & Tujuan Pembelajaran</h4>
        <p style="color:#475569; font-size:0.92rem; line-height:1.7;">Peserta didik mampu menganalisis gerak spesifik passing bawah dan passing atas bola voli melalui pendekatan saintifik, serta mempraktikkannya dengan tingkat akurasi dan kerjasama tim yang tinggi.</p>
      </div>
      <div style="background:#FEF3C7; border-left:4px solid #F59E0B; padding:1.1rem; border-radius:10px; margin-bottom:1.25rem;">
        <h5 style="color:#B45309; font-size:0.9rem; font-weight:800; margin-bottom:0.35rem;">✨ Diferensiasi Sarana Modifikasi Gerak</h5>
        <p style="color:#78350F; font-size:0.86rem; line-height:1.6;">Menyediakan bola busa spon berpori untuk peserta didik yang masih takut sakit saat benturan lengan, serta bola standar kompetisi untuk peserta didik kategori mahir.</p>
      </div>
      <div style="display:flex; gap:0.75rem; justify-content:flex-end; flex-wrap:wrap;">
        <a href="UTS/rancangan.html" class="btn-studio-outline" style="font-size:0.85rem; padding:0.6rem 1.2rem;">Halaman Lengkap UTS</a>
        <button class="btn-studio-primary" style="font-size:0.85rem; padding:0.6rem 1.3rem;" onclick="showStudioToast('Modul Bola Voli Siklus 1 berhasil diunduh (.PDF)')">
          <i class="fa-solid fa-download"></i> Unduh Modul (.PDF)
        </button>
      </div>
    `
  },
  'circuit-kebugaran': {
    category: 'SIKLUS 2 • UAS PPL TERBIMBING',
    title: 'Modul Ajar: Circuit Training Kebugaran Jasmani Terintegrasi TPACK',
    meta: 'Fase E (Kelas X) • 5 Pos Latihan • Sensor Detak Jantung & E-LKPD',
    body: `
      <div style="margin-bottom: 1.25rem;">
        <h4 style="color:#0F172A; margin-bottom: 0.5rem; font-weight:800;">Desain 5 Pos Sirkuit Latihan</h4>
        <p style="color:#475569; font-size:0.92rem; line-height:1.7;">Meliputi Pos 1 (Shuttle Run kelincahan), Pos 2 (Push-up daya tahan otot lengan), Pos 3 (Sit-up otot perut), Pos 4 (Jumping Jack daya tahan kardiovaskular), dan Pos 5 (Plank stabilitas inti tubuh).</p>
      </div>
      <div style="background:#EFF6FF; border-left:4px solid #2563EB; padding:1.1rem; border-radius:10px; margin-bottom:1.25rem;">
        <h5 style="color:#1D4ED8; font-size:0.9rem; font-weight:800; margin-bottom:0.35rem;">📊 Integrasi Teknologi TPACK Digital</h5>
        <p style="color:#1E3A8A; font-size:0.86rem; line-height:1.6;">Siswa memindai QR Code di tiap tiang pos untuk melihat video petunjuk gerakan yang benar dan mengisi formulir Training Heart Rate (THR) secara real-time.</p>
      </div>
      <div style="display:flex; gap:0.75rem; justify-content:flex-end; flex-wrap:wrap;">
        <a href="UAS/rancangan.html" class="btn-studio-outline" style="font-size:0.85rem; padding:0.6rem 1.2rem;">Halaman Lengkap UAS</a>
        <button class="btn-studio-primary" style="font-size:0.85rem; padding:0.6rem 1.3rem;" onclick="showStudioToast('Modul Circuit Training UAS berhasil diunduh (.PDF)')">
          <i class="fa-solid fa-download"></i> Unduh Modul (.PDF)
        </button>
      </div>
    `
  },
  'media-kinovea': {
    category: 'MEDIA INOVATIF & TPACK',
    title: 'Media Pembelajaran Digital: Analisis Video Kinovea & E-LKPD Barcode',
    meta: 'Teknologi Analisis Gerak Otentik • Pendekatan TPACK Abad 21',
    body: `
      <div style="margin-bottom: 1.25rem;">
        <h4 style="color:#0F172A; margin-bottom: 0.5rem; font-weight:800;">Fitur Inovasi Media TPACK</h4>
        <p style="color:#475569; font-size:0.92rem; line-height:1.7;">Menggunakan software open-source Kinovea untuk memperlambat rekaman gerak siswa (slow-motion) dan mengukur sudut perkenaan lengan secara presisi dalam sesi evaluasi diri (self-assessment).</p>
      </div>
      <div style="display:flex; gap:0.75rem; justify-content:flex-end; flex-wrap:wrap;">
        <a href="UTS/media.html" class="btn-studio-outline" style="font-size:0.85rem; padding:0.6rem 1.2rem;">Koleksi Media TPACK</a>
        <button class="btn-studio-primary" style="font-size:0.85rem; padding:0.6rem 1.3rem;" onclick="showStudioToast('Berkas E-LKPD Barcode berhasil diunduh (.ZIP)')">
          <i class="fa-solid fa-download"></i> Unduh Panduan E-LKPD
        </button>
      </div>
    `
  },
  'lisensi-lengkap': {
    category: 'KOMPETENSI KEPELATIHAN & LISENSI',
    title: 'Sertifikasi Resmi Kepelatihan & Lisensi Federasi Olahraga',
    meta: 'Lulusan S1 Pendidikan Kepelatihan Olahraga (FIKK UNY) Berlisensi',
    body: `
      <div style="margin-bottom: 1.25rem;">
        <ul style="color:#334155; font-size:0.92rem; line-height:1.9; padding-left:1.2rem;">
          <li><strong>Lisensi Pelatih Futsal:</strong> Sertifikasi kepelatihan level nasional untuk taktik dan pengembangan bibit atlet muda.</li>
          <li><strong>Lisensi Pelatih Pencak Silat:</strong> Pembinaan seni gerak jurus tunggal dan tanding berkarakter budi luhur.</li>
          <li><strong>Pelatih Kondisi Fisik:</strong> Strength & Conditioning specialist bersertifikasi kebugaran jasmani atletik.</li>
        </ul>
      </div>
      <div style="display:flex; gap:0.75rem; justify-content:flex-end;">
        <a href="profil.html" class="btn-studio-primary" style="font-size:0.85rem; padding:0.6rem 1.4rem;">Lihat Bukti Sertifikat di Profil</a>
      </div>
    `
  }
};

function initModalStore() {
  const modal = document.getElementById('studio-modal');
  const title = document.getElementById('studio-modal-title');
  const cat = document.getElementById('studio-modal-cat');
  const meta = document.getElementById('studio-modal-meta');
  const body = document.getElementById('studio-modal-body');
  const closeBtn = document.getElementById('studio-modal-close');

  if (!modal) return;

  document.querySelectorAll('[data-studio-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-studio-modal');
      const data = studioModalData[modalId];

      if (data) {
        if (title) title.textContent = data.title;
        if (cat) cat.textContent = data.category;
        if (meta) meta.textContent = data.meta;
        if (body) body.innerHTML = data.body;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------
 * 4. Video Lightbox Modal (Watch Intro / Video UKin)
 * ------------------------------------------------------------- */
function initVideoModal() {
  const videoModal = document.getElementById('video-modal');
  const videoClose = document.getElementById('video-modal-close');
  const videoTrigger = document.querySelector('[data-video-modal]');

  if (!videoModal || !videoTrigger) return;

  videoTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeVideo() {
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
    // Pause iframe if any
    const iframe = videoModal.querySelector('iframe');
    if (iframe) {
      const src = iframe.src;
      iframe.src = src;
    }
  }

  if (videoClose) videoClose.addEventListener('click', closeVideo);
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
  });
}

/* -------------------------------------------------------------
 * 5. Photo Lightbox Modal (Authentic PPL Gallery)
 * ------------------------------------------------------------- */
function initPhotoLightbox() {
  const photoModal = document.getElementById('photo-lightbox-modal');
  const photoClose = document.getElementById('photo-lightbox-close');
  const photoImg = document.getElementById('photo-lightbox-img');
  const photoTitle = document.getElementById('photo-lightbox-title');
  const photoDesc = document.getElementById('photo-lightbox-desc');
  const photoLoc = document.getElementById('photo-lightbox-loc');

  if (!photoModal) return;

  // Make sure it starts hidden
  photoModal.style.display = 'none';

  window.openStudioPhoto = function(imgSrc, title, desc, location) {
    if (photoImg) photoImg.src = imgSrc;
    if (photoTitle) photoTitle.textContent = title || 'Dokumentasi PPL PJOK UNY';
    if (photoDesc) photoDesc.textContent = desc || 'Dokumentasi kegiatan resmi PPL PJOK PPG Calon Guru Universitas Negeri Yogyakarta di SMP Negeri 12 Yogyakarta.';
    if (photoLoc) photoLoc.innerHTML = `<i class="fa-solid fa-location-dot" style="color:var(--color-sun-yellow-dark, #D97706); margin-right:6px;"></i> ${location || 'SMP Negeri 12 Yogyakarta'}`;

    photoModal.style.display = 'flex';
    requestAnimationFrame(() => {
      photoModal.classList.add('active');
    });
    document.body.style.overflow = 'hidden';
  };

  function closePhoto() {
    photoModal.classList.remove('active');
    setTimeout(() => {
      if (!photoModal.classList.contains('active')) {
        photoModal.style.display = 'none';
      }
    }, 280);
    document.body.style.overflow = '';
  }

  if (photoClose) photoClose.addEventListener('click', closePhoto);
  photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) closePhoto();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && photoModal.classList.contains('active')) {
      closePhoto();
    }
  });
}

/* -------------------------------------------------------------
 * 6. CTA Banner Contact Form Submission
 * ------------------------------------------------------------- */
function initCtaForm() {
  const form = document.getElementById('cta-project-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('cta-name');
    const name = nameInput ? nameInput.value.trim() : '';

    showStudioToast(`Terima kasih ${name || 'Rekan'}! Pesan dan permintaan diskusi Anda telah berhasil dikirim ke Marfika Sayekti.`);
    form.reset();
  });
}

/* -------------------------------------------------------------
 * 7. Selected Work Carousel Dots Navigation
 * ------------------------------------------------------------- */
function initWorkCarouselDots() {
  const dots = document.querySelectorAll('.carousel-dot');
  const cards = document.querySelectorAll('.mockup-portfolio-card');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  });
}

/* -------------------------------------------------------------
 * 8. Gallery Filter Engine
 * ------------------------------------------------------------- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const cards = document.querySelectorAll('.gallery-studio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      cards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        const cats = cat.split(/\s+/);
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 9. Testimonial Navigation Arrows
 * ------------------------------------------------------------- */
function initTestimonialNav() {
  const upBtn = document.querySelector('.testi-nav-up');
  const downBtn = document.querySelector('.testi-nav-down');
  const cardsRow = document.querySelector('.testi-cards-row');

  if (!cardsRow) return;

  if (upBtn) {
    upBtn.addEventListener('click', () => {
      cardsRow.scrollBy({ left: -280, behavior: 'smooth' });
    });
  }

  if (downBtn) {
    downBtn.addEventListener('click', () => {
      cardsRow.scrollBy({ left: 280, behavior: 'smooth' });
    });
  }
}

/* -------------------------------------------------------------
 * 10. Polished Toast Notification
 * ------------------------------------------------------------- */
window.showStudioToast = function(message) {
  let toast = document.getElementById('studio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'studio-toast';
    toast.className = 'toast-msg-studio';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <i class="fa-solid fa-circle-check" style="color:var(--color-sun-yellow); font-size:1.1rem;"></i>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
};

// Aliased for legacy onclick handlers if any
window.showToast = window.showStudioToast;



/* -------------------------------------------------------------
 * 11. Subpage Cycle Switchers, Timeline & Gallery Interactivity
 * ------------------------------------------------------------- */
function initSubpageInteractivity() {
  // Cycle switcher for UTS / UAS
  document.querySelectorAll('.cycle-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.cycle-tabs') || document;
      parent.querySelectorAll('.cycle-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-cycle-target') || btn.getAttribute('data-tab-target');
      if (targetId) {
        document.querySelectorAll('.cycle-content-pane, .tab-pane, .analysis-cycle-content').forEach(p => {
          p.classList.remove('active');
          p.style.display = 'none';
        });
        const target = document.querySelector(targetId);
        if (target) {
          target.classList.add('active');
          target.style.display = 'block';
        }
      }
    });
  });

  // Timeline player for video pages
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const time = item.querySelector('.time-badge')?.textContent || '';
      const title = item.querySelector('strong')?.textContent || '';
      const videoLabel = document.getElementById('current-video-time');
      const videoTitle = document.getElementById('current-video-phase');
      if (videoLabel) videoLabel.textContent = Menit ;
      if (videoTitle) videoTitle.textContent = title;
    });
  });

  // Filter pills for Dokumentasi gallery
  document.querySelectorAll('.filter-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';
      document.querySelectorAll('.gallery-card-agency').forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        const cats = cat.split(/\s+/);
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Global alias for opening photo modal from gallery cards
window.openPhotoModal = function(imgSrc, title, category, desc, location, tag) {
  if (typeof window.openStudioPhoto === 'function') {
    if (typeof desc === 'string' && desc.length > 0) {
      window.openStudioPhoto(imgSrc, title, desc, location);
    } else {
      window.openStudioPhoto(imgSrc, title, category, desc);
    }
  }
};

document.addEventListener('DOMContentLoaded', initSubpageInteractivity);
