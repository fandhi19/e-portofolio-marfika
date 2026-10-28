/**
 * E-Portofolio PPG Calon Guru PJOK UNY - Marfika Sayekti, S.Pd.
 * Theme: Modern Clean Agency (Deep Forest Green + Vibrant Lime Green)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileNav();
  initTabs();
  initTimelinePlayer();
  initModals();
  initProgressBars();
  initGalleryFilter();
});

/* -------------------------------------------------------------
 * 1. Sticky Navbar Styling on Scroll
 * ------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* -------------------------------------------------------------
 * 2. Mobile Navigation Toggle
 * ------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}

/* -------------------------------------------------------------
 * 3. Tab Switching Component
 * ------------------------------------------------------------- */
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs-container]');
  
  tabContainers.forEach(container => {
    const buttons = container.querySelectorAll('.tab-btn');
    const panes = container.querySelectorAll('.tab-pane');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab-target');

        buttons.forEach(b => b.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPane = container.querySelector(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 4. Interactive Video Timeline Player
 * ------------------------------------------------------------- */
function initTimelinePlayer() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const videoLabel = document.getElementById('current-video-time');
  const videoTitle = document.getElementById('current-video-phase');

  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      timelineItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const time = item.querySelector('.time-badge')?.textContent || '00:00';
      const title = item.querySelector('strong')?.textContent || '';
      
      if (videoLabel) videoLabel.textContent = `Menit ${time}`;
      if (videoTitle) videoTitle.textContent = title;
    });
  });
}

/* -------------------------------------------------------------
 * 5. Interactive Modal Viewer & Lightbox
 * ------------------------------------------------------------- */
const modalDataStore = {
  'modul-voli': {
    title: 'Modul Ajar PJOK: Permainan Bola Voli (Passing Bawah & Atas)',
    category: 'Fase E (Kelas X) • Kurikulum Merdeka',
    meta: 'Alokasi: 3 JP (3 x 45 Menit) | Model: Problem-Based Learning (PBL)',
    content: `
      <div style="margin-bottom: 1.25rem;">
        <h4 style="color:#12382D; margin-bottom: 0.5rem; font-weight:800;">Capaian Pembelajaran (CP)</h4>
        <p style="color:#475569; font-size:0.92rem; line-height:1.7;">Peserta didik mampu mempraktikkan keterampilan gerak spesifik passing bawah dan passing atas dalam permainan bola voli secara efektif, serta menunjukkan sikap sportivitas dan kerjasama dalam regu.</p>
      </div>
      <div style="margin-bottom: 1.25rem;">
        <h4 style="color:#12382D; margin-bottom: 0.5rem; font-weight:800;">Tujuan Pembelajaran</h4>
        <ul style="color:#475569; font-size:0.9rem; padding-left:1.2rem; line-height:1.8;">
          <li>Peserta didik dapat menganalisis poros ayunan lengan dan perkenaan bola passing bawah.</li>
          <li>Peserta didik dapat mendemonstrasikan variasi passing bawah berpasangan dan segitiga dengan akurasi 80%.</li>
          <li>Peserta didik menunjukkan profil gotong royong dan kemandirian dalam sesi latihan beregu.</li>
        </ul>
      </div>
      <div style="margin-bottom: 1.5rem; background:#F8F9F5; padding:1.2rem; border-radius:12px; border-left:4px solid #B8E023;">
        <h4 style="color:#12382D; margin-bottom:0.4rem; font-size:0.95rem; font-weight:800;">💡 Diferensiasi Pembelajaran PJOK</h4>
        <p style="color:#475569; font-size:0.88rem; line-height:1.6;">Peserta didik dengan kesiapan gerak pemula menggunakan bola spon busa modifikasi untuk membangun kenyamanan memukul bola tanpa rasa sakit di lengan, sedangkan kelompok mahir melakukan variasi passing dinamis sambil bergerak.</p>
      </div>
      <div style="display:flex; gap:0.75rem; justify-content:flex-end;">
        <a href="UTS/rancangan.html" class="btn btn-outline-dark btn-sm">Buka Halaman Modul</a>
        <button class="btn btn-primary-dark btn-sm" onclick="showToast('Modul Bola Voli berhasil diunduh (.PDF)')"><i class="fa-solid fa-download"></i> Unduh Modul (.PDF)</button>
      </div>
    `
  },
  'modul-kebugaran': {
    title: 'Modul Ajar PJOK: Kebugaran Jasmani Metode Circuit Training',
    category: 'Fase E (Kelas X) • Komponen Daya Tahan & Kekuatan Otot',
    meta: 'Alokasi: 3 JP | Media: E-LKPD & Sensor Detak Jantung Manual',
    content: `
      <div style="margin-bottom: 1.25rem;">
        <h4 style="color:#12382D; margin-bottom: 0.5rem; font-weight:800;">Fokus Modul</h4>
        <p style="color:#475569; font-size:0.92rem; line-height:1.7;">Peserta didik merancang dan melakukan rangkaian sirkuit latihan 5 pos (Push up, Sit up, Shuttle Run, Jumping Jack, Plank) serta menghitung denyut nadi latihan (Training Heart Rate).</p>
      </div>
      <div style="margin-bottom: 1.25rem;">
        <h4 style="color:#12382D; margin-bottom: 0.5rem; font-weight:800;">Integrasi TPACK</h4>
        <p style="color:#475569; font-size:0.9rem; line-height:1.7;">Pencatatan rekap denyut nadi dan repetisi menggunakan formulir digital interaktif yang terintegrasi barcode pada tiap tiang pos latihan.</p>
      </div>
      <div style="display:flex; gap:0.75rem; justify-content:flex-end;">
        <a href="UAS/rancangan.html" class="btn btn-outline-dark btn-sm">Buka Halaman UAS</a>
        <button class="btn btn-primary-dark btn-sm" onclick="showToast('Modul Kebugaran Jasmani berhasil diunduh')"><i class="fa-solid fa-download"></i> Unduh Modul (.PDF)</button>
      </div>
    `
  },
  'video-siklus1': {
    title: 'Video Praktik Pembelajaran Terbimbing - Siklus 1',
    category: 'Praktik Mengajar Terbimbing PPL • SMA Laboratorium UNY',
    meta: 'Durasi: 15:20 Menit (Sesuai Standar Uji Kinerja PPG)',
    content: `
      <div style="background:#000; border-radius:12px; overflow:hidden; margin-bottom:1.25rem; aspect-ratio:16/9; display:flex; align-items:center; justify-content:center;">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" title="Video Praktik PPL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:none;"></iframe>
      </div>
      <p style="font-size:0.9rem; color:#475569; margin-bottom:1rem; line-height:1.7;">Video ini mendokumentasikan sintaks lengkap pembelajaran PJOK mulai dari salam dan apersepsi, pemanasan game interaktif, latihan teknik berdiferensiasi, evaluasi formatif dengan instrumen lembar observasi, hingga pendinginan.</p>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-size:0.82rem; color:#12382D; font-weight:700;"><i class="fa-solid fa-circle-check text-highlight"></i> Disetujui Guru Pamong & DPL UNY</span>
        <button class="btn btn-outline-dark btn-sm" onclick="showToast('Tautan YouTube Disalin ke Clipboard!')"><i class="fa-solid fa-copy"></i> Salin Link Video</button>
      </div>
    `
  },
  'rubrik-lengkap': {
    title: 'Instrumen & Rubrik Penilaian Pembelajaran PJOK',
    category: 'Asesmen Otentik Berbasis Kurikulum Merdeka',
    meta: 'Mencakup Ranah Kognitif, Psikomotorik (Kinerja Gerak), dan Sikap (Profil Pancasila)',
    content: `
      <div style="overflow-x:auto; margin-bottom:1.5rem;">
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem; color:#1E293B;">
          <thead>
            <tr style="background:#12382D; color:#ffffff; text-align:left;">
              <th style="padding:10px; border:1px solid #CBD5E1;">Dimensi</th>
              <th style="padding:10px; border:1px solid #CBD5E1;">Indikator Penilaian</th>
              <th style="padding:10px; border:1px solid #CBD5E1;">Skor (1-4) & Kriteria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#12382D;">Sikap Awalan</td>
              <td style="padding:8px 10px; border:1px solid #E2E8F0;">Posisi lutut ditekuk 45°, badan condong ke depan, pandangan tertuju arah bola.</td>
              <td style="padding:8px 10px; border:1px solid #E2E8F0;">4 = Sangat Tepat<br>3 = Tepat<br>2 = Cukup<br>1 = Kurang</td>
            </tr>
            <tr style="background:#F8F9F5;">
              <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#12382D;">Sikap Perkenaan</td>
              <td style="padding:8px 10px; border:1px solid #E2E8F0;">Kedua lengan lurus rapat, perkenaan tepat pada bidang datar antara pergelangan dan siku.</td>
              <td style="padding:8px 10px; border:1px solid #E2E8F0;">4 = Stabil & Akurat<br>3 = Bola Melambung Baik</td>
            </tr>
            <tr>
              <td style="padding:8px 10px; border:1px solid #E2E8F0; font-weight:700; color:#12382D;">Sikap Akhiran</td>
              <td style="padding:8px 10px; border:1px solid #E2E8F0;">Ayunan lengan tidak melebihi bahu, perpindahan berat badan ke depan.</td>
              <td style="padding:8px 10px; border:1px solid #E2E8F0;">Evaluasi Follow-Through</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
        <a href="UTS/instrumen.html" class="btn btn-outline-dark btn-sm">Halaman Instrumen</a>
        <button class="btn btn-primary-dark btn-sm" onclick="showToast('Rubrik Penilaian berhasil diunduh')"><i class="fa-solid fa-download"></i> Unduh Instrumen (.PDF)</button>
      </div>
    `
  }
};

function initModals() {
  const modalOverlay = document.getElementById('global-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalMeta = document.getElementById('modal-meta');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  document.querySelectorAll('[data-modal-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal-id');
      const data = modalDataStore[modalId];

      if (data) {
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalCategory) modalCategory.textContent = data.category;
        if (modalMeta) modalMeta.textContent = data.meta;
        if (modalBody) modalBody.innerHTML = data.content;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------
 * 6. Interactive Progress Bars Animation
 * ------------------------------------------------------------- */
function initProgressBars() {
  const progressBars = document.querySelectorAll('.skill-bar-fill');
  if (!progressBars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width') || '85%';
        bar.style.width = width;
      }
    });
  }, { threshold: 0.3 });

  progressBars.forEach(bar => observer.observe(bar));
}

/* -------------------------------------------------------------
 * 7. Gallery Filter System
 * ------------------------------------------------------------- */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  const galleryCards = document.querySelectorAll('.gallery-card-agency');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      galleryCards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 8. Toast Notification Utility
 * ------------------------------------------------------------- */
window.showToast = function(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--color-accent-lime);"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
};
