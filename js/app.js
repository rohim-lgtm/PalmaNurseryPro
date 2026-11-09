/**
 * PALMANURSERY PRO - APPLICATION JAVASCRIPT ENGINE (SPA)
 * Mengelola navigasi SPA, render dokumen SOP & Jurnal, CRUD data operasional,
 * kalkulator agronomi real-time, dan sinkronisasi localStorage.
 */

// Global State
let dashboardStats = null;
let modulesData = null;
let activeModuleId = null;
let editingRecordIndex = null;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Load persisted data or default
  loadPersistedData();

  // 2. Render initial Dashboard
  renderDashboardStats();
  renderDashboardActivities();

  // 3. Initialize Lucide Icons
  initLucideIcons();

  // 4. Initialize UI Components
  initSidebar();
  initDropdowns();
  initCarousel();
  initNotifications();
  initDateWidget();
  initSearch();
  initSubItemInteractions();

  // 5. Handle initial hash routing
  handleHashRouting();
  window.addEventListener('hashchange', handleHashRouting);
});

/**
 * Load State from LocalStorage
 */
function loadPersistedData() {
  try {
    const savedStats = localStorage.getItem('palma_dashboard_stats');
    if (savedStats) {
      dashboardStats = JSON.parse(savedStats);
    } else {
      dashboardStats = JSON.parse(JSON.stringify(DEFAULT_DASHBOARD_STATS));
    }

    const savedModules = localStorage.getItem('palma_modules_data');
    if (savedModules) {
      modulesData = JSON.parse(savedModules);
      // Ensure all definitions in NURSERY_MODULES are present and updated with calculate, visuals, and authors
      for (const key in NURSERY_MODULES) {
        if (!modulesData[key]) {
          modulesData[key] = JSON.parse(JSON.stringify(NURSERY_MODULES[key]));
        } else {
          // Keep user-edited records and parameters, but sync visuals, author, references, literature, title, subtitle, category
          modulesData[key].author = NURSERY_MODULES[key].author;
          modulesData[key].visuals = NURSERY_MODULES[key].visuals;
          modulesData[key].literature = NURSERY_MODULES[key].literature;
          modulesData[key].references = NURSERY_MODULES[key].references;
          modulesData[key].title = NURSERY_MODULES[key].title;
          modulesData[key].subtitle = NURSERY_MODULES[key].subtitle;
          modulesData[key].category = NURSERY_MODULES[key].category;
        }
        if (NURSERY_MODULES[key].calculate) {
          modulesData[key].calculate = NURSERY_MODULES[key].calculate;
        }
      }
    } else {
      modulesData = JSON.parse(JSON.stringify(NURSERY_MODULES));
      for (const key in NURSERY_MODULES) {
        if (modulesData[key] && NURSERY_MODULES[key].calculate) {
          modulesData[key].calculate = NURSERY_MODULES[key].calculate;
        }
      }
    }
  } catch (e) {
    console.error('Error loading localStorage data, using defaults:', e);
    dashboardStats = JSON.parse(JSON.stringify(DEFAULT_DASHBOARD_STATS));
    modulesData = JSON.parse(JSON.stringify(NURSERY_MODULES));
  }
}

/**
 * Save State to LocalStorage
 */
function saveStateToLocalStorage() {
  try {
    localStorage.setItem('palma_dashboard_stats', JSON.stringify(dashboardStats));
    localStorage.setItem('palma_modules_data', JSON.stringify(modulesData));
  } catch (e) {
    console.warn('Could not save to localStorage', e);
  }
}

/**
 * Render Dashboard Statistics from State
 */
function renderDashboardStats() {
  if (!dashboardStats) return;

  const setEl = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setEl('stat-total-lokasi-val', dashboardStats.totalLokasi.value);
  setEl('stat-total-lokasi-sub', dashboardStats.totalLokasi.subtext);
  setEl('stat-total-lokasi-desc', dashboardStats.totalLokasi.desc);

  setEl('stat-total-bibit-val', dashboardStats.totalBibit.value);
  setEl('stat-total-bibit-sub', dashboardStats.totalBibit.subtext);
  setEl('stat-total-bibit-desc', dashboardStats.totalBibit.desc);

  setEl('stat-proyek-aktif-val', dashboardStats.proyekAktif.value);
  setEl('stat-proyek-aktif-sub', dashboardStats.proyekAktif.subtext);
  setEl('stat-proyek-aktif-desc', dashboardStats.proyekAktif.desc);

  setEl('stat-tingkat-konversi-val', dashboardStats.tingkatKonversi.value);
  setEl('stat-tingkat-konversi-sub', dashboardStats.tingkatKonversi.subtext);
  setEl('stat-tingkat-konversi-desc', dashboardStats.tingkatKonversi.desc);
}

/**
 * Render Dashboard Recent Activities from State
 */
function renderDashboardActivities() {
  const container = document.getElementById('dashboard-activity-list');
  if (!container || !dashboardStats.activities) return;

  let html = `<div class="absolute left-4 top-5 bottom-5 w-0.5 bg-slate-100"></div>`;

  dashboardStats.activities.forEach((act) => {
    const dotColor = act.color === 'blue' ? 'bg-blue-500' : (act.color === 'amber' ? 'bg-amber-500' : (act.color === 'purple' ? 'bg-purple-500' : 'bg-emerald-500'));
    const circleBg = act.color === 'blue' ? 'bg-blue-100 text-blue-600' : (act.color === 'amber' ? 'bg-amber-100 text-amber-600' : (act.color === 'purple' ? 'bg-purple-100 text-purple-600' : 'bg-emerald-100 text-emerald-600'));

    html += `
      <div class="relative flex items-start gap-3.5 group cursor-pointer hover:bg-slate-50/80 p-2 rounded-xl transition-colors" onclick="showToast('Aktivitas: ${act.text} - ${act.detail || ''}')">
        <div class="w-8 h-8 rounded-full ${circleBg} flex items-center justify-center shrink-0 ring-4 ring-white z-10 group-hover:scale-110 transition-transform">
          <span class="w-2.5 h-2.5 rounded-full ${dotColor}"></span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-xs sm:text-sm font-bold text-slate-800 leading-snug group-hover:text-emerald-700 transition-colors">
            ${act.text}
          </p>
          <span class="text-[11px] font-medium text-slate-400 mt-0.5 flex items-center gap-1">
            <i data-lucide="clock" class="w-3 h-3"></i>
            ${act.time}
          </span>
        </div>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity self-center"></i>
      </div>
    `;
  });

  container.innerHTML = html;
  initLucideIcons();
}

/**
 * SPA View Navigation Engine
 */
function navigateToDashboard() {
  activeModuleId = null;
  const dashView = document.getElementById('dashboard-view');
  const modView = document.getElementById('module-view');
  const pageTitle = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');
  const pageBadge = document.getElementById('page-badge');
  const menuDashboard = document.getElementById('menu-dashboard');

  if (dashView) dashView.classList.remove('hidden');
  if (modView) modView.classList.add('hidden');

  if (pageTitle) pageTitle.textContent = 'Dashboard Pembibitan Sawit';
  if (pageSubtitle) pageSubtitle.textContent = 'Selamat datang kembali, Planters! Berikut ringkasan operasional pembibitan kelapa sawit hari ini.';
  if (pageBadge) {
    pageBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>PalmaNursery Pro`;
    pageBadge.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200';
  }

  // Update active sidebar style
  document.querySelectorAll('.nav-sub-item').forEach(el => {
    el.classList.remove('bg-emerald-100', 'text-emerald-800', 'font-bold');
  });

  if (menuDashboard) {
    menuDashboard.classList.add('bg-blue-50', 'text-blue-600', 'border-blue-100/80');
    const dot = menuDashboard.querySelector('.active-dot');
    if (dot) dot.classList.remove('hidden');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToModule(moduleId) {
  if (moduleId === 'pusat-sop-referensi') {
    renderPusatSopView();
    return;
  }

  if (!modulesData[moduleId]) {
    console.warn(`Module "${moduleId}" not found.`);
    return;
  }

  activeModuleId = moduleId;
  const mod = modulesData[moduleId];
  const dashView = document.getElementById('dashboard-view');
  const modView = document.getElementById('module-view');
  const pageTitle = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');
  const pageBadge = document.getElementById('page-badge');
  const menuDashboard = document.getElementById('menu-dashboard');

  if (dashView) dashView.classList.add('hidden');
  if (modView) modView.classList.remove('hidden');

  if (pageTitle) pageTitle.textContent = mod.title;
  if (pageSubtitle) pageSubtitle.textContent = mod.subtitle;
  if (pageBadge) {
    pageBadge.innerHTML = `<i data-lucide="folder-check" class="w-3.5 h-3.5"></i>${mod.category}`;
    pageBadge.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200';
  }

  // Update sidebar active highlights
  if (menuDashboard) {
    menuDashboard.classList.remove('bg-blue-50', 'text-blue-600', 'border-blue-100/80');
    const dot = menuDashboard.querySelector('.active-dot');
    if (dot) dot.classList.add('hidden');
  }

  document.querySelectorAll('.nav-sub-item').forEach(el => {
    const itemMod = el.getAttribute('data-module');
    if (itemMod === moduleId) {
      el.classList.add('bg-emerald-100', 'text-emerald-800', 'font-bold');
      expandParentDropdowns(el);
    } else {
      el.classList.remove('bg-emerald-100', 'text-emerald-800', 'font-bold');
    }
  });

  // Render Module Workspace
  renderModuleWorkspace(moduleId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function expandParentDropdowns(subItemElement) {
  let parent = subItemElement.closest('.dropdown-content');
  while (parent) {
    parent.classList.remove('hidden');
    const prevBtn = parent.previousElementSibling;
    if (prevBtn && prevBtn.classList.contains('sidebar-dropdown-btn')) {
      const arrow = prevBtn.querySelector('.dropdown-arrow');
      if (arrow) arrow.classList.add('rotated');
    }
    const ancestor = parent.parentElement ? parent.parentElement.closest('.dropdown-content') : null;
    parent = ancestor;
  }
}

/**
 * Render Dedicated View: Pusat SOP & Referensi Ilmiah
 */
function renderPusatSopView() {
  activeModuleId = 'pusat-sop-referensi';
  const dashView = document.getElementById('dashboard-view');
  const modView = document.getElementById('module-view');
  const pageTitle = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');
  const pageBadge = document.getElementById('page-badge');
  const menuDashboard = document.getElementById('menu-dashboard');

  if (dashView) dashView.classList.add('hidden');
  if (modView) modView.classList.remove('hidden');

  if (pageTitle) pageTitle.textContent = 'Pusat SOP & Referensi Ilmiah Perkebunan';
  if (pageSubtitle) pageSubtitle.textContent = 'Koleksi dokumen Standar Operasional Prosedur (SOP) resmi dan jurnal riset terakreditasi pembibitan sawit.';
  if (pageBadge) {
    pageBadge.innerHTML = `<i data-lucide="book-marked" class="w-3.5 h-3.5"></i>Pusat Dokumen Teknis`;
    pageBadge.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200';
  }

  if (menuDashboard) {
    menuDashboard.classList.remove('bg-blue-50', 'text-blue-600', 'border-blue-100/80');
    const dot = menuDashboard.querySelector('.active-dot');
    if (dot) dot.classList.add('hidden');
  }

  document.querySelectorAll('.nav-sub-item').forEach(el => {
    if (el.getAttribute('data-module') === 'pusat-sop-referensi') {
      el.classList.add('bg-emerald-200', 'text-emerald-950', 'font-extrabold');
    } else {
      el.classList.remove('bg-emerald-100', 'text-emerald-800', 'font-bold');
    }
  });

  // Construct Cards for All References
  const docCardsHtml = SOP_REFERENCES_LIST.map(doc => `
    <div class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-card transition-all flex flex-col justify-between space-y-4">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">
            ${doc.badge}
          </span>
          <i data-lucide="book-open" class="w-5 h-5 text-emerald-600"></i>
        </div>

        <h3 class="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
          ${doc.title}
        </h3>
        <p class="text-xs font-semibold text-emerald-700 mt-1">
          ${doc.author}
        </p>
        <p class="text-xs text-slate-500 mt-2 leading-relaxed">
          ${doc.subtitle}
        </p>

        <div class="mt-4 pt-3 border-t border-slate-100">
          <h5 class="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Poin Kunci Kajian:</h5>
          <ul class="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
            ${doc.points.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <a href="${doc.url}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs inline-flex items-center gap-1.5 group">
          <span>Buka Dokumen Resmi</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"></i>
        </a>
        <span class="text-[11px] text-slate-400 font-medium">Terakreditasi</span>
      </div>
    </div>
  `).join('');

  modView.innerHTML = `
    <!-- Top Action Breadcrumb & Control Bar -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-soft">
      <div class="flex items-center gap-2 text-xs font-medium text-slate-500">
        <button onclick="navigateToDashboard()" class="hover:text-emerald-700 transition-colors flex items-center gap-1 font-semibold text-slate-700">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
          <span>Dashboard</span>
        </button>
        <span>/</span>
        <span class="font-bold text-emerald-800">Pusat SOP & Dokumen Teknis</span>
      </div>

      <div class="flex items-center gap-2">
        <button onclick="window.print()" class="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1">
          <i data-lucide="printer" class="w-3.5 h-3.5"></i>
          <span>Cetak Daftar</span>
        </button>
      </div>
    </div>

    <!-- Banner Header Dokumen Teknis -->
    <section class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-900 to-green-950 text-white shadow-card space-y-3">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/25 text-emerald-300 border border-emerald-400/40">
        <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
        Dokumentasi Teknis PalmaNursery Pro
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
        Pedoman Standar Baku Pembibitan Kelapa Sawit
      </h2>
      <p class="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
        Seluruh modul perhitungan, formulasi media, jadwal penyiraman, dan seleksi culling di dalam aplikasi PalmaNursery Pro dikembangkan dengan mengacu pada standar Kementerian Pertanian (BSIP Sumbar) serta penelitian ilmiah dari perguruan tinggi terkemuka.
      </p>
    </section>



    <!-- Grid Dokumen & Jurnal Resmi -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${docCardsHtml}
    </section>
  `;

  initLucideIcons();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Render Dynamic Sub-Menu Knowledge & Interactive Workspace
 */
function renderModuleWorkspace(moduleId) {
  const modView = document.getElementById('module-view');
  if (!modView) return;

  const mod = modulesData[moduleId];
  if (!mod) return;

  // Calculate dynamic outputs
  const paramMap = {};
  mod.parameters.forEach(p => { paramMap[p.key] = Number(p.value); });
  const calcResults = mod.calculate ? mod.calculate(paramMap) : [];

  // References HTML
  const refsHtml = mod.references.map(r => `
    <div class="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
      <div class="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
        <i data-lucide="book-open" class="w-3.5 h-3.5 text-emerald-600"></i>
        <span>${r.name}</span>
      </div>
      <p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">${r.desc}</p>
    </div>
  `).join('');

  // Calculation Results HTML
  const calcHtml = calcResults.map(c => `
    <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
      <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${c.label}</span>
      <span class="text-base sm:text-lg font-extrabold text-${c.highlight === 'emerald' ? 'emerald-700' : (c.highlight === 'blue' ? 'blue-600' : (c.highlight === 'amber' ? 'amber-600' : (c.highlight === 'rose' ? 'rose-600' : 'purple-600')))} mt-1">
        ${c.value}
      </span>
    </div>
  `).join('');

  // Editable Parameters Form Fields
  const paramsHtml = mod.parameters.map((p) => `
    <div class="space-y-1">
      <label class="block text-xs font-bold text-slate-700">
        ${p.label}
      </label>
      <div class="relative">
        <input type="number" step="any" value="${p.value}" 
          class="w-full px-3 py-2 text-xs font-semibold bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all"
          onchange="updateModuleParameter('${moduleId}', '${p.key}', this.value)"
          onkeyup="updateModuleParameter('${moduleId}', '${p.key}', this.value)">
        <span class="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-400 font-medium">
          ${p.unit || ''}
        </span>
      </div>
    </div>
  `).join('');

  // Table Columns & Records HTML
  const records = mod.records || [];
  let tableHeadersHtml = '';
  let tableRowsHtml = '';

  if (records.length > 0) {
    const keys = Object.keys(records[0]).filter(k => k !== 'id');
    tableHeadersHtml = keys.map(k => `
      <th class="px-4 py-3 text-left text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/80">
        ${formatHeaderName(k)}
      </th>
    `).join('') + `<th class="px-4 py-3 text-right text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50/80">Aksi</th>`;

    tableRowsHtml = records.map((rec, rIdx) => {
      const cells = keys.map(k => `
        <td class="px-4 py-3 text-xs text-slate-700 whitespace-nowrap font-medium">
          ${formatCellBadge(k, rec[k])}
        </td>
      `).join('');

      return `
        <tr class="hover:bg-slate-50/80 transition-colors border-b border-slate-100">
          ${cells}
          <td class="px-4 py-3 text-xs text-right whitespace-nowrap">
            <div class="flex items-center justify-end gap-1.5">
              <button onclick="openRecordEditorModal('${moduleId}', ${rIdx})" class="p-1.5 rounded-lg text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors" title="Edit Baris">
                <i data-lucide="edit" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="deleteModuleRecord('${moduleId}', ${rIdx})" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors" title="Hapus Baris">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  } else {
    tableHeadersHtml = `<th class="px-4 py-3 text-left text-xs font-bold text-slate-500">Data</th>`;
    tableRowsHtml = `<tr><td class="px-4 py-6 text-center text-xs text-slate-400">Belum ada baris data. Klik "Tambah Data" untuk menginput.</td></tr>`;
  }

  // Construct Final Workspace Layout
  modView.innerHTML = `
    <!-- Top Action Breadcrumb & Control Bar -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-soft">
      <div class="flex items-center gap-2 text-xs font-medium text-slate-500 flex-wrap">
        <button onclick="navigateToDashboard()" class="hover:text-emerald-700 transition-colors flex items-center gap-1 font-semibold text-slate-700">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
          <span>Dashboard</span>
        </button>
        <span>/</span>
        <span class="text-slate-400">${mod.category}</span>
        <span>/</span>
        <span class="font-bold text-emerald-800">${mod.title}</span>
        ${mod.author ? `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"><i data-lucide="user" class="w-3 h-3 text-emerald-600"></i><span>Penyusun: ${mod.author}</span></span>` : ''}
      </div>

      <div class="flex items-center gap-2 flex-wrap">
        <button onclick="resetModuleToDefault('${moduleId}')" class="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 rounded-xl border border-slate-200 transition-colors flex items-center gap-1">
          <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
          <span>Reset Standar</span>
        </button>
        <button onclick="printModuleData('${moduleId}')" class="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1">
          <i data-lucide="printer" class="w-3.5 h-3.5"></i>
          <span>Cetak / PDF</span>
        </button>
        <button onclick="saveModuleState('${moduleId}')" class="px-4 py-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center gap-1.5">
          <i data-lucide="save" class="w-3.5 h-3.5"></i>
          <span>Simpan Perubahan</span>
        </button>
      </div>
    </div>

    <!-- 1. LANDASAN ILMIAH & PEMBAHASAN JURNAL -->
    <section class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-soft space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <i data-lucide="graduation-cap" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-slate-900">Pembahasan & Landasan Ilmiah (SOP & Jurnal Terakreditasi)</h3>
            <p class="text-xs text-slate-500">Kajian agronomi berbasis SOP BSIP Kementan 2025 dan penelitian aplikatif</p>
          </div>
        </div>
        <button onclick="navigateToModule('pusat-sop-referensi')" class="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 self-start sm:self-auto">
          <span>Buka Pustaka SOP</span>
          <i data-lucide="external-link" class="w-3 h-3"></i>
        </button>
      </div>

      <!-- Reference Badges -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${refsHtml}
      </div>

      <!-- Galeri Foto Real Lapangan & Diagram Ilustrasi Teknis -->
      ${renderModuleVisualGallery(mod)}

      <!-- Literature Content Article -->
      <article class="prose prose-sm max-w-none text-slate-600 leading-relaxed pt-2 border-t border-slate-100 space-y-2">
        ${mod.literature}
      </article>
    </section>

    <!-- 2. PARAMETER INPUT & KALKULATOR AGRONOMI REAL-TIME (BISA DIEDIT) -->
    <section class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-soft space-y-5">
      <div class="flex items-center justify-between pb-4 border-b border-slate-100">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <i data-lucide="calculator" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-slate-900">Parameter Lapangan & Kalkulator Agronomi</h3>
            <p class="text-xs text-slate-500">Edit angka parameter di bawah untuk mengkalkulasi kebutuhan secara real-time</p>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
          Editable Real-time
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <!-- Form Inputs (5 Kolom) -->
        <div class="lg:col-span-5 p-4 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3.5">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Formulir Parameter Lapangan:</h4>
          ${paramsHtml}
          <div class="pt-2">
            <button onclick="saveModuleState('${moduleId}')" class="w-full py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-1.5">
              <i data-lucide="check" class="w-3.5 h-3.5"></i>
              <span>Terapkan & Simpan Nilai</span>
            </button>
          </div>
        </div>

        <!-- Calculated Live Outputs (7 Kolom) -->
        <div class="lg:col-span-7 space-y-3.5">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Hasil Perhitungan & Rekomendasi SOP:</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3" id="calc-results-container-${moduleId}">
            ${calcHtml}
          </div>
          <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 leading-relaxed flex items-start gap-2.5">
            <i data-lucide="info" class="w-4 h-4 text-emerald-700 shrink-0 mt-0.5"></i>
            <div>
              <strong>Catatan Validasi PalmaNursery:</strong> Hasil kalkulasi ini otomatis disesuaikan dengan formula baku PPKS Medan dan ambang batas mutu SOP BSIP Sumbar 2025.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. TABEL DATA OPERASIONAL & LOG KEGIATAN (CRUD) -->
    <section class="bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-soft space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <i data-lucide="database" class="w-5 h-5"></i>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-slate-900">Data Operasional & Catatan Petak</h3>
            <p class="text-xs text-slate-500">Kelola dan input rekaman harian pembibitan (Tambah / Edit / Hapus)</p>
          </div>
        </div>

        <button onclick="openRecordEditorModal('${moduleId}', null)" class="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all self-start sm:self-auto">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Tambah Data Baru</span>
        </button>
      </div>

      <!-- Responsive Table Container -->
      <div class="overflow-x-auto rounded-2xl border border-slate-200/80 custom-scrollbar">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr>
              ${tableHeadersHtml}
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>
      </div>

      <div class="flex items-center justify-between text-xs text-slate-400 pt-2">
        <span>Menampilkan ${records.length} baris data operasional</span>
        <button onclick="saveModuleState('${moduleId}')" class="text-emerald-700 hover:underline font-semibold">
          Sinkronkan ke Database Lokal
        </button>
      </div>
    </section>
  `;

  initLucideIcons();
}

/**
 * Render Visual Gallery (Real Photos & Technical Diagrams)
 */
function renderModuleVisualGallery(mod) {
  if (!mod.visuals || !mod.visuals.length) return '';

  const cardsHtml = mod.visuals.map((v) => {
    const isPhoto = v.type === 'photo';
    const badgeColor = isPhoto ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-blue-100 text-blue-800 border-blue-200';
    const iconName = isPhoto ? 'camera' : 'pen-tool';

    let mediaContent = '';
    if (v.src) {
      mediaContent = `
        <div class="relative h-60 sm:h-72 w-full bg-slate-950 overflow-hidden cursor-pointer group" onclick="openImagePreviewModal('${v.src}', '${escapeQuotes(v.title)}', '${escapeQuotes(v.caption)}', '${escapeQuotes(v.badge)}')">
          <img src="${v.src}" alt="${v.title}" onerror="this.onerror=null; this.src='images/main-nursery-hamparan.jpg';" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity"></div>
          <div class="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-md">
            <i data-lucide="maximize-2" class="w-3.5 h-3.5 text-emerald-400"></i>
            <span>Perbesar Foto</span>
          </div>
        </div>
      `;
    } else if (v.svg) {
      mediaContent = `
        <div class="relative p-4 sm:p-5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-center overflow-x-auto min-h-[220px]">
          <div class="w-full max-w-lg mx-auto">
            ${v.svg}
          </div>
        </div>
      `;
    }

    return `
      <div class="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-soft transition-all flex flex-col justify-between">
        ${mediaContent}
        <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold border ${badgeColor}">
                <i data-lucide="${iconName}" class="w-3 h-3"></i>
                ${v.badge}
              </span>
              <span class="text-[11px] text-slate-400 font-medium">${v.source || 'SOP BSIP / Riset'}</span>
            </div>
            <h4 class="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
              ${v.title}
            </h4>
            <p class="text-xs text-slate-600 mt-2 leading-relaxed">
              ${v.caption}
            </p>
          </div>
          ${v.src ? `
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
              <button onclick="openImagePreviewModal('${v.src}', '${escapeQuotes(v.title)}', '${escapeQuotes(v.caption)}', '${escapeQuotes(v.badge)}')" class="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5 group">
                <span>Lihat Resolusi Penuh</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
              </button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="my-5 pt-3 border-t border-slate-100 space-y-3">
      <div class="flex items-center justify-between">
        <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
          <i data-lucide="images" class="w-4 h-4 text-emerald-700"></i>
          <span>Dokumentasi Riil Lapangan & Skema Ilustrasi Agronomi:</span>
        </h4>
        <span class="text-[11px] text-slate-400 hidden sm:inline-block">Klik foto untuk melihat dalam resolusi tinggi</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${cardsHtml}
      </div>
    </div>
  `;
}

/**
 * Helper to escape quotes in string attributes
 */
function escapeQuotes(str) {
  if (!str) return '';
  return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

/**
 * Image Preview Lightbox Modal
 */
function openImagePreviewModal(src, title, caption, badge) {
  const modal = document.getElementById('modal-image-preview');
  if (!modal) return;
  const imgEl = document.getElementById('img-preview-src');
  const titleEl = document.getElementById('img-preview-title');
  const captionEl = document.getElementById('img-preview-caption');
  const badgeEl = document.getElementById('img-preview-badge');
  const linkEl = document.getElementById('img-preview-link');

  if (imgEl) imgEl.src = src;
  if (titleEl) titleEl.textContent = title || 'Dokumentasi Visual Pembibitan';
  if (captionEl) captionEl.textContent = caption || '';
  if (badgeEl) badgeEl.textContent = badge || 'Foto Real Lapangan';
  if (linkEl) linkEl.href = src;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeImagePreviewModal() {
  const modal = document.getElementById('modal-image-preview');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Close image preview modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeImagePreviewModal();
  }
});

/**
 * Format Table Headers
 */
function formatHeaderName(key) {
  const dict = {
    spk: 'No. SPK / DO',
    sertifikatBPSB: 'No. Sertifikat BPSB',
    rendemenEst: 'Est. Rendemen CPO',
    lokasi: 'Lokasi Kandidat',
    topografi: 'Topografi / Kemiringan',
    jarakAir: 'Jarak Sumber Air',
    debitKontinu: 'Debit Air Kontinu',
    skorKelayakan: 'Skor Kelayakan',
    petak: 'Nama Petak',
    varietas: 'Varietas Benih',
    kapasitas: 'Kapasitas (Bibit)',
    realisasi: 'Realisasi Fisik',
    status: 'Status',
    tgl: 'Tanggal Input',
    batch: 'No. Batch',
    produsen: 'Produsen Resmi',
    pesanan: 'Jumlah Pesan',
    tiba: 'Jumlah Tiba',
    layak: 'Bibit Layak',
    afkirTiba: 'Afkir Tiba',
    zona: 'Zona Irigasi',
    tekanan: 'Tekanan Pipa',
    luasNaungan: 'Luas Naungan',
    kondisiNaungan: 'Status Naungan',
    curahHujan: 'Curah Hujan',
    bedeng: 'Nomor Bedengan',
    kecambahDitanam: 'Jumlah Tanam',
    hkTerlibat: 'Tenaga Kerja (HK)',
    tglTanam: 'Tanggal Tanam',
    kegiatan: 'Perawatan',
    populasi: 'Populasi',
    blok: 'Nama Blok',
    luas: 'Luas Lahan',
    jarak: 'Jarak Spacing',
    asal: 'Asal Petak PN',
    tujuan: 'Tujuan Blok MN',
    jumlah: 'Jumlah Bibit',
    tglMulai: 'Tanggal Mulai',
    tahap: 'Tahap Seleksi',
    diperiksa: 'Total Diperiksa',
    lolos: 'Lolos Seleksi',
    afkir: 'Afkir Dieksekusi',
    rotasi: 'Rotasi Pemutaran',
    diputar: 'Jumlah Diputar',
    sisa: 'Belum Diputar',
    tglSelesai: 'Tanggal Selesai',
    noSuratJalan: 'No. Surat Jalan',
    tujuan: 'Tujuan Kebun',
    jumlahBibit: 'Bibit Diangkut',
    ritase: 'Jml Ritase',
    platTruk: 'Plat Kendaraan',
    plot: 'Plot APM',
    umur: 'Umur Bibit',
    tinggiRata: 'Tinggi Rata-rata',
    lokasiTanam: 'Plot Lapangan'
  };

  return dict[key] || key.charAt(0).toUpperCase() + key.slice(1);
}

/**
 * Format Table Badges
 */
function formatCellBadge(key, val) {
  if (typeof val === 'number') {
    return val.toLocaleString('id-ID');
  }

  const str = String(val);
  if (str.includes('Optimal') || str.includes('Selesai') || str.includes('Prima') || str.includes('Aktif')) {
    return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">${str}</span>`;
  }
  if (str.includes('Proses') || str.includes('Berjalan') || str.includes('Sedang') || str.includes('Tahap')) {
    return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">${str}</span>`;
  }
  if (str.includes('Eradikasi') || str.includes('Afkir')) {
    return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800">${str}</span>`;
  }

  return str;
}

/**
 * Live Parameter Update in Module
 */
function updateModuleParameter(moduleId, paramKey, newVal) {
  const mod = modulesData[moduleId];
  if (!mod) return;

  const param = mod.parameters.find(p => p.key === paramKey);
  if (param) {
    param.value = Number(newVal);

    const paramMap = {};
    mod.parameters.forEach(p => { paramMap[p.key] = Number(p.value); });
    const newCalc = mod.calculate ? mod.calculate(paramMap) : [];

    const container = document.getElementById(`calc-results-container-${moduleId}`);
    if (container) {
      container.innerHTML = newCalc.map(c => `
        <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${c.label}</span>
          <span class="text-base sm:text-lg font-extrabold text-${c.highlight === 'emerald' ? 'emerald-700' : (c.highlight === 'blue' ? 'blue-600' : (c.highlight === 'amber' ? 'amber-600' : (c.highlight === 'rose' ? 'rose-600' : 'purple-600')))} mt-1">
            ${c.value}
          </span>
        </div>
      `).join('');
    }
  }
}

/**
 * Save Module State to LocalStorage
 */
function saveModuleState(moduleId) {
  saveStateToLocalStorage();
  showToast(`Perubahan parameter & data "${modulesData[moduleId].title}" berhasil disimpan.`);
}

/**
 * Reset Module to Defaults
 */
function resetModuleToDefault(moduleId) {
  if (confirm(`Kembalikan data "${NURSERY_MODULES[moduleId].title}" ke nilai standar riset awal?`)) {
    modulesData[moduleId] = JSON.parse(JSON.stringify(NURSERY_MODULES[moduleId]));
    if (NURSERY_MODULES[moduleId].calculate) {
      modulesData[moduleId].calculate = NURSERY_MODULES[moduleId].calculate;
    }
    saveStateToLocalStorage();
    renderModuleWorkspace(moduleId);
    showToast(`Data "${modulesData[moduleId].title}" telah direset ke standar riset awal.`);
  }
}

function printModuleData(moduleId) {
  window.print();
}

/**
 * Record Editor
 */
function openRecordEditorModal(moduleId, recordIndex) {
  activeModuleId = moduleId;
  editingRecordIndex = recordIndex;

  const modal = document.getElementById('modal-record-editor');
  const titleEl = document.getElementById('record-editor-title');
  const fieldsContainer = document.getElementById('record-editor-fields');
  const mod = modulesData[moduleId];

  if (!modal || !mod) return;

  const isEditing = recordIndex !== null && mod.records && mod.records[recordIndex];
  if (titleEl) {
    titleEl.textContent = isEditing ? `Edit Record (${mod.title})` : `Tambah Record Baru (${mod.title})`;
  }

  let sampleRec = {};
  if (mod.records && mod.records.length > 0) {
    sampleRec = mod.records[0];
  } else {
    sampleRec = { nama: '', keterangan: '', status: 'Aktif', tgl: new Date().toISOString().split('T')[0] };
  }

  const keys = Object.keys(sampleRec).filter(k => k !== 'id');
  const targetData = isEditing ? mod.records[recordIndex] : {};

  fieldsContainer.innerHTML = keys.map(k => {
    const val = targetData[k] !== undefined ? targetData[k] : '';
    const isNum = typeof sampleRec[k] === 'number';
    return `
      <div>
        <label class="block text-xs font-bold text-slate-700 mb-1">${formatHeaderName(k)}</label>
        <input type="${isNum ? 'number' : 'text'}" step="any" name="${k}" value="${val}" required
          class="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600">
      </div>
    `;
  }).join('');

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeRecordEditorModal() {
  const modal = document.getElementById('modal-record-editor');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function saveModuleRecord(event) {
  event.preventDefault();
  const form = document.getElementById('form-record-editor');
  if (!form || !activeModuleId) return;

  const formData = new FormData(form);
  const newRecord = {};

  formData.forEach((val, key) => {
    if (!isNaN(val) && val.trim() !== '' && !val.startsWith('0') && !val.includes('-')) {
      newRecord[key] = Number(val);
    } else {
      newRecord[key] = val;
    }
  });

  const mod = modulesData[activeModuleId];
  if (!mod.records) mod.records = [];

  if (editingRecordIndex !== null) {
    newRecord.id = mod.records[editingRecordIndex].id || Date.now();
    mod.records[editingRecordIndex] = newRecord;
    showToast('Baris data berhasil diperbarui.');
  } else {
    newRecord.id = Date.now();
    mod.records.push(newRecord);
    showToast('Baris data baru berhasil ditambahkan.');
  }

  saveStateToLocalStorage();
  closeRecordEditorModal();
  renderModuleWorkspace(activeModuleId);
}

function deleteModuleRecord(moduleId, recordIndex) {
  const mod = modulesData[moduleId];
  if (!mod || !mod.records) return;

  if (confirm('Apakah Anda yakin ingin menghapus baris data ini?')) {
    mod.records.splice(recordIndex, 1);
    saveStateToLocalStorage();
    renderModuleWorkspace(moduleId);
    showToast('Baris data telah dihapus.');
  }
}

/**
 * Dashboard Edit Modal
 */
function openDashboardEditModal() {
  const modal = document.getElementById('modal-edit-dashboard');
  if (!modal || !dashboardStats) return;

  document.getElementById('edit-lokasi-val').value = dashboardStats.totalLokasi.value;
  document.getElementById('edit-lokasi-sub').value = dashboardStats.totalLokasi.subtext;
  document.getElementById('edit-lokasi-desc').value = dashboardStats.totalLokasi.desc;

  document.getElementById('edit-bibit-val').value = dashboardStats.totalBibit.value;
  document.getElementById('edit-bibit-sub').value = dashboardStats.totalBibit.subtext;
  document.getElementById('edit-bibit-desc').value = dashboardStats.totalBibit.desc;

  document.getElementById('edit-proyek-val').value = dashboardStats.proyekAktif.value;
  document.getElementById('edit-proyek-sub').value = dashboardStats.proyekAktif.subtext;
  document.getElementById('edit-proyek-desc').value = dashboardStats.proyekAktif.desc;

  document.getElementById('edit-konversi-val').value = dashboardStats.tingkatKonversi.value;
  document.getElementById('edit-konversi-sub').value = dashboardStats.tingkatKonversi.subtext;
  document.getElementById('edit-konversi-desc').value = dashboardStats.tingkatKonversi.desc;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  initLucideIcons();
}

function closeDashboardEditModal() {
  const modal = document.getElementById('modal-edit-dashboard');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function saveDashboardStats(event) {
  event.preventDefault();
  if (!dashboardStats) return;

  dashboardStats.totalLokasi.value = document.getElementById('edit-lokasi-val').value.trim() || dashboardStats.totalLokasi.value;
  dashboardStats.totalLokasi.subtext = document.getElementById('edit-lokasi-sub').value.trim() || dashboardStats.totalLokasi.subtext;
  dashboardStats.totalLokasi.desc = document.getElementById('edit-lokasi-desc').value.trim() || dashboardStats.totalLokasi.desc;

  dashboardStats.totalBibit.value = document.getElementById('edit-bibit-val').value.trim() || dashboardStats.totalBibit.value;
  dashboardStats.totalBibit.subtext = document.getElementById('edit-bibit-sub').value.trim() || dashboardStats.totalBibit.subtext;
  dashboardStats.totalBibit.desc = document.getElementById('edit-bibit-desc').value.trim() || dashboardStats.totalBibit.desc;

  dashboardStats.proyekAktif.value = document.getElementById('edit-proyek-val').value.trim() || dashboardStats.proyekAktif.value;
  dashboardStats.proyekAktif.subtext = document.getElementById('edit-proyek-sub').value.trim() || dashboardStats.proyekAktif.subtext;
  dashboardStats.proyekAktif.desc = document.getElementById('edit-proyek-desc').value.trim() || dashboardStats.proyekAktif.desc;

  dashboardStats.tingkatKonversi.value = document.getElementById('edit-konversi-val').value.trim() || dashboardStats.tingkatKonversi.value;
  dashboardStats.tingkatKonversi.subtext = document.getElementById('edit-konversi-sub').value.trim() || dashboardStats.tingkatKonversi.subtext;
  dashboardStats.tingkatKonversi.desc = document.getElementById('edit-konversi-desc').value.trim() || dashboardStats.tingkatKonversi.desc;

  const newActTitle = document.getElementById('edit-new-activity-title').value.trim();
  const newActTime = document.getElementById('edit-new-activity-time').value.trim();

  if (newActTitle) {
    dashboardStats.activities.unshift({
      id: Date.now(),
      text: newActTitle,
      time: newActTime || 'Baru saja',
      color: 'emerald',
      detail: 'Diperbarui secara manual melalui dashboard editor'
    });
    if (dashboardStats.activities.length > 7) {
      dashboardStats.activities.pop();
    }
  }

  saveStateToLocalStorage();
  renderDashboardStats();
  renderDashboardActivities();
  closeDashboardEditModal();
  showToast('Ringkasan data dashboard berhasil diperbarui!');
}

function resetDashboardStatsDefault() {
  if (confirm('Kembalikan ringkasan statistik dashboard ke nilai awal?')) {
    dashboardStats = JSON.parse(JSON.stringify(DEFAULT_DASHBOARD_STATS));
    saveStateToLocalStorage();
    renderDashboardStats();
    renderDashboardActivities();
    closeDashboardEditModal();
    showToast('Data dashboard telah dikembalikan ke default.');
  }
}

function resetAllDataToDefault() {
  if (confirm('Peringatan: Seluruh data pembibitan dan modifikasi Anda akan dikembalikan ke data awal riset. Lanjutkan?')) {
    localStorage.removeItem('palma_dashboard_stats');
    localStorage.removeItem('palma_modules_data');
    loadPersistedData();
    renderDashboardStats();
    renderDashboardActivities();
    if (activeModuleId && activeModuleId !== 'pusat-sop-referensi') {
      renderModuleWorkspace(activeModuleId);
    }
    showToast('Seluruh data berhasil direset ke standar riset awal.');
  }
}

/**
 * Handle Hash-based Routing in SPA
 */
function handleHashRouting() {
  const hash = window.location.hash.replace('#', '').trim();
  if (!hash || hash === 'dashboard') {
    navigateToDashboard();
  } else if (hash === 'pusat-sop-referensi') {
    renderPusatSopView();
  } else if (modulesData && modulesData[hash]) {
    navigateToModule(hash);
  }
}

/**
 * Sub-Item Navigation Clicks Listener
 */
function initSubItemInteractions() {
  const subItems = document.querySelectorAll('.nav-sub-item');
  subItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const modId = item.getAttribute('data-module');
      if (modId) {
        window.location.hash = modId;
      }
    });
  });
}

/**
 * Quick Access Modal Popup with Routing
 */
function openQuickAccessModal(type) {
  const modal = document.getElementById('modal-quick-access');
  const title = document.getElementById('quick-modal-title');
  const subtitle = document.getElementById('quick-modal-subtitle');
  const iconContainer = document.getElementById('quick-modal-icon-bg');
  const linksContainer = document.getElementById('quick-modal-links');

  const configs = {
    BIBIT: {
      title: 'Pemilihan Bibit & Penentuan Lokasi',
      subtitle: 'Standar legalitas varietas unggul bersertifikat & kriteria topografi lahan nursery.',
      icon: 'award',
      iconBg: 'bg-teal-100 text-teal-700',
      moduleKeys: [
        'bibit-varietas-unggul', 'lokasi-topografi-lahan'
      ]
    },
    PN: {
      title: 'Pre-Nursery (PN) - Fase 0 s/d 3 Bulan',
      subtitle: 'Manajemen kecambah & polybag kecil (0-3 bulan).',
      icon: 'sprout',
      iconBg: 'bg-emerald-100 text-emerald-700',
      moduleKeys: [
        'pn-perhitungan-lahan', 'pn-kebutuhan-kecambah', 'pn-irigasi-naungan',
        'pn-penanaman-polybag', 'pn-pemeliharaan-rutin'
      ]
    },
    MN: {
      title: 'Main Nursery (MN) - Fase 3 s/d 12 Bulan',
      subtitle: 'Pembesaran bibit sawit polybag besar (3-12 bulan).',
      icon: 'flower2',
      iconBg: 'bg-blue-100 text-blue-700',
      moduleKeys: [
        'mn-perhitungan-lahan', 'mn-transplanting', 'mn-sensus-seleksi',
        'mn-pemutaran-blok', 'mn-transportasi-lapangan'
      ]
    },
    APM: {
      title: 'Advanced Planting Material (APM)',
      subtitle: 'Pengelolaan bibit akhir umur 12-18 bulan siap ke lapangan utama.',
      icon: 'trees',
      iconBg: 'bg-amber-100 text-amber-700',
      moduleKeys: [
        'apm-pemeliharaan-khusus', 'apm-standar-siap-tanam'
      ]
    }
  };

  const data = configs[type];
  if (!data) return;

  if (title) title.textContent = data.title;
  if (subtitle) subtitle.textContent = data.subtitle;

  if (iconContainer) {
    iconContainer.className = `w-10 h-10 rounded-2xl flex items-center justify-center ${data.iconBg}`;
    iconContainer.innerHTML = `<i data-lucide="${data.icon}" class="w-5 h-5"></i>`;
  }

  if (linksContainer) {
    linksContainer.innerHTML = data.moduleKeys.map(k => {
      const m = modulesData[k] || NURSERY_MODULES[k];
      return `
        <div onclick="closeQuickAccessModal(); window.location.hash = '${k}';" class="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 border border-slate-100 transition-all cursor-pointer group">
          <span class="text-xs font-bold text-slate-700 group-hover:text-emerald-800">${m ? m.title : k}</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-transform"></i>
        </div>
      `;
    }).join('');
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    initLucideIcons();
  }
}

function closeQuickAccessModal() {
  const modal = document.getElementById('modal-quick-access');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

/**
 * Sidebar and Responsive Behaviors
 */
function initSidebar() {
  const sidebar = document.getElementById('main-sidebar');
  const toggleBtn = document.getElementById('toggle-sidebar-btn');
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const backdrop = document.getElementById('sidebar-backdrop');

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      const isCollapsed = sidebar.classList.contains('collapsed');
      
      const openIcon = toggleBtn.querySelector('.sidebar-open-icon');
      const closeIcon = toggleBtn.querySelector('.sidebar-close-icon');
      
      if (isCollapsed) {
        if (openIcon) openIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      } else {
        if (openIcon) openIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      }
    });
  }

  if (mobileToggleBtn && sidebar && backdrop) {
    const openMobile = () => {
      sidebar.classList.remove('-translate-x-full');
      sidebar.classList.add('translate-x-0');
      backdrop.classList.remove('hidden');
    };

    const closeMobile = () => {
      sidebar.classList.add('-translate-x-full');
      sidebar.classList.remove('translate-x-0');
      backdrop.classList.add('hidden');
    };

    if (window.innerWidth < 1024) {
      sidebar.classList.add('-translate-x-full');
    }

    mobileToggleBtn.addEventListener('click', openMobile);
    backdrop.addEventListener('click', closeMobile);

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.add('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
      }
    });
  }

  const userProfileBtn = document.getElementById('user-profile-btn');
  const userProfileMenu = document.getElementById('user-profile-menu');
  if (userProfileBtn && userProfileMenu) {
    userProfileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userProfileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!userProfileBtn.contains(e.target) && !userProfileMenu.contains(e.target)) {
        userProfileMenu.classList.add('hidden');
      }
    });
  }
}

/**
 * Accordion Dropdowns
 */
function initDropdowns() {
  const dropdownButtons = document.querySelectorAll('.sidebar-dropdown-btn');
  dropdownButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const targetId = button.getAttribute('data-target');
      const targetMenu = document.getElementById(targetId);
      const arrow = button.querySelector('.dropdown-arrow');

      if (!targetMenu) return;

      const isClosed = targetMenu.classList.contains('hidden');
      if (isClosed) {
        targetMenu.classList.remove('hidden');
        if (arrow) arrow.classList.add('rotated');
      } else {
        targetMenu.classList.add('hidden');
        if (arrow) arrow.classList.remove('rotated');
      }
    });
  });
}

/**
 * Hero Banner Carousel Logic
 */
const carouselData = [
  {
    badge: 'Sistem Pembibitan Sawit Unggul',
    title: 'Optimalisasi Pertumbuhan Bibit Sawit untuk Produktivitas Maksimal',
    desc: 'Monitoring terstruktur mulai dari fase kecambah, seleksi ketat di Pre-Nursery, hingga Main Nursery siap salur ke kebun.'
  },
  {
    badge: 'Pre-Nursery (0-3 Bulan)',
    title: 'Fertigasi Presisi & Aklimatisasi Cahaya Naungan',
    desc: 'Pantau ketersediaan air harian kapasitas lapang 100% dan sistem irigasi mikro untuk bedengan baby bag prima.'
  },
  {
    badge: 'Main Nursery (3-12 Bulan)',
    title: 'Standar Mutu Seleksi Culling & Manajemen Large Bag',
    desc: 'Pengawasan ketat untuk menghasilkan tanaman sawit siap salur dengan vigor terbaik dan zero penyakit tajuk.'
  },
  {
    badge: 'Pola Tanam Segitiga 9x9 Meter',
    title: 'Pola Segitiga Sama Sisi Kerapatan 143 Pokok/Ha',
    desc: 'Perencanaan presisi jarak tanam baris Timur-Barat 7,8 meter untuk efisiensi penyerapan sinar matahari optimal.'
  }
];

let currentSlide = 0;
let carouselTimer = null;

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const titleEl = document.getElementById('carousel-title');
  const descEl = document.getElementById('carousel-desc');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');

  function goToSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
        slide.style.opacity = '1';
        slide.style.pointerEvents = 'auto';
      } else {
        slide.classList.remove('active');
        slide.style.opacity = '0';
        slide.style.pointerEvents = 'none';
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.className = 'carousel-dot active w-7 h-2 rounded-full bg-emerald-400 transition-all duration-300';
      } else {
        dot.className = 'carousel-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300';
      }
    });

    if (titleEl && descEl && carouselData[currentSlide]) {
      titleEl.style.opacity = '0';
      descEl.style.opacity = '0';
      setTimeout(() => {
        titleEl.textContent = carouselData[currentSlide].title;
        descEl.textContent = carouselData[currentSlide].desc;
        titleEl.style.opacity = '1';
        descEl.style.opacity = '1';
      }, 200);
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    carouselTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
  }

  function stopAutoPlay() {
    if (carouselTimer) {
      clearInterval(carouselTimer);
      carouselTimer = null;
    }
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      startAutoPlay();
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
      startAutoPlay();
    });
  }

  startAutoPlay();
}

/**
 * Notifications
 */
function initNotifications() {
  const notifBtn = document.getElementById('notif-btn');
  const notifDropdown = document.getElementById('notif-dropdown');

  if (notifBtn && notifDropdown) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!notifBtn.contains(e.target) && !notifDropdown.contains(e.target)) {
        notifDropdown.classList.add('hidden');
      }
    });
  }
}

function markAllNotificationsRead() {
  const redDot = document.querySelector('#notif-btn span.relative');
  const badgePing = document.querySelector('#notif-btn span.animate-ping');
  const countBadge = document.querySelector('#notif-dropdown span.bg-rose-100');

  if (redDot) redDot.parentElement.classList.add('hidden');
  if (badgePing) badgePing.classList.add('hidden');
  if (countBadge) {
    countBadge.textContent = '0 Baru';
    countBadge.classList.replace('bg-rose-100', 'bg-slate-100');
    countBadge.classList.replace('text-rose-700', 'text-slate-500');
  }

  showToast('Semua notifikasi lapangan telah ditandai sebagai dibaca');
}

/**
 * Date Widget
 */
function initDateWidget() {
  const dateBtn = document.getElementById('date-widget-btn');
  if (dateBtn) {
    dateBtn.addEventListener('click', () => {
      const now = new Date();
      const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
      const formatted = now.toLocaleDateString('id-ID', options);
      showToast(`Waktu Operasional Nursery: ${formatted} WIB`);
    });
  }
}

/**
 * Global Search Filter
 */
function initSearch() {
  const searchInput = document.getElementById('global-search');
  if (!searchInput) return;

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const term = searchInput.value.trim().toLowerCase();
      if (!term) return;

      if (term.includes('sop') || term.includes('jurnal') || term.includes('brmp') || term.includes('bsip')) {
        renderPusatSopView();
        return;
      }

      let foundKey = null;
      for (const k in modulesData) {
        if (modulesData[k].title.toLowerCase().includes(term) || modulesData[k].category.toLowerCase().includes(term)) {
          foundKey = k;
          break;
        }
      }

      if (foundKey) {
        window.location.hash = foundKey;
        showToast(`Membuka modul "${modulesData[foundKey].title}"`);
      } else {
        showToast(`Tidak ditemukan modul dengan kata kunci "${term}"`);
      }
    }
  });
}

/**
 * Toast Notification Utility
 */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 backdrop-blur-md text-white shadow-xl text-xs font-medium border border-slate-700/50 max-w-sm';
  
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
    <span class="flex-1">${message}</span>
    <button class="text-slate-400 hover:text-white" onclick="this.parentElement.remove()">
      <i data-lucide="x" class="w-3.5 h-3.5"></i>
    </button>
  `;

  container.appendChild(toast);
  initLucideIcons();

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 3500);
}

/**
 * Lucide Icons Initialization with Offline SVG Fallback
 */
const svgIconPaths = {
  'award': '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  'map-pin': '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  'sprout': '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.5 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  'panel-left-close': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3v18"/><path d="m16 15-3-3 3-3"/>',
  'panel-left-open': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/>',
  'layout-dashboard': '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  'folder': '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  'folders': '<path d="M2 11.5a1.5 1.5 0 0 1 1.5-1.5h17a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5Z"/><path d="M4 10V6.5A1.5 1.5 0 0 1 5.5 5h3.9c.4 0 .78.16 1.06.44l1.1 1.12c.28.28.66.44 1.06.44H18.5A1.5 1.5 0 0 1 20 8.5V10"/>',
  'folder-tree': '<path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.53l-.42-.85a1 1 0 0 0-.9-.62H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"/><path d="M3 3v18h8"/><path d="M3 9h9"/>',
  'folder-check': '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/><path d="m9 13 2 2 4-4"/>',
  'layers': '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'arrow-up-right': '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  'arrow-down-right': '<path d="m7 7 10 10"/><path d="M17 7v10H7"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  'minus': '<path d="M5 12h14"/>',
  'package': '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  'trees': '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-4 4.3a1 1 0 0 0 .8 1.7H10l-3 3.3a1 1 0 0 0 .7 1.7H10"/>',
  'bar-chart-3': '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'clock-3': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16.5 12"/>',
  'check-check': '<path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/>',
  'check-circle-2': '<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/>',
  'layout-grid': '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  'flower2': '<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1m0 3a3 3 0 1 1-3 3m3-3a3 3 0 1 0 3 3m-3-3h1m-1 0h-1m2 5a3 3 0 1 1-3-3m3 3a3 3 0 1 0-3-3m3 3v-1m-4-3a3 3 0 1 1 3-3m-3 3a3 3 0 1 0 3-3m-3 3h-1"/><circle cx="12" cy="12" r="2"/>',
  'activity': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'cloud-rain': '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',
  'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  'calendar': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'menu': '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
  'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  'book-marked': '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 2v14l3-2.5 3 2.5V2"/>',
  'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'settings': '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  'rotate-ccw': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  'pencil': '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>',
  'edit': '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  'edit-3': '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>',
  'trash-2': '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
  'database': '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  'graduation-cap': '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
  'calculator': '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>',
  'external-link': '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>',
  'info': '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'save': '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>',
  'printer': '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
  'check': '<polyline points="20 6 9 17 4 12"/>',
  'link': '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  'file-check-2': '<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="m3 15 2 2 4-4"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'camera': '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  'pen-tool': '<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  'images': '<path d="M18 22H4a2 2 0 0 1-2-2V6"/><rect width="18" height="14" x="4" y="2" rx="2"/><circle cx="9" cy="7" r="1.5"/><path d="m22 13-4.5-4.5a2 2 0 0 0-2.8 0L6 17"/>',
  'image': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  'maximize-2': '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/>',
  'table-2': '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>',
  'zoom-in': '<circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/>'
};

function initLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    try {
      lucide.createIcons();
      return;
    } catch (e) {
      console.warn('Lucide createIcons error, falling back to SVG renderer', e);
    }
  }
  renderSvgFallback();
}

function renderSvgFallback() {
  const elements = document.querySelectorAll('[data-lucide]');
  elements.forEach(el => {
    const iconName = el.getAttribute('data-lucide');
    const path = svgIconPaths[iconName];
    if (path) {
      const classes = el.getAttribute('class') || '';
      el.outerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${classes}" data-lucide="${iconName}">${path}</svg>`;
    }
  });
}

// Global functions for inline HTML calls
window.navigateToDashboard = navigateToDashboard;
window.navigateToModule = navigateToModule;
window.openDashboardEditModal = openDashboardEditModal;
window.closeDashboardEditModal = closeDashboardEditModal;
window.saveDashboardStats = saveDashboardStats;
window.resetDashboardStatsDefault = resetDashboardStatsDefault;
window.resetAllDataToDefault = resetAllDataToDefault;
window.openRecordEditorModal = openRecordEditorModal;
window.closeRecordEditorModal = closeRecordEditorModal;
window.saveModuleRecord = saveModuleRecord;
window.deleteModuleRecord = deleteModuleRecord;
window.updateModuleParameter = updateModuleParameter;
window.saveModuleState = saveModuleState;
window.resetModuleToDefault = resetModuleToDefault;
window.printModuleData = printModuleData;
window.openQuickAccessModal = openQuickAccessModal;
window.closeQuickAccessModal = closeQuickAccessModal;
window.markAllNotificationsRead = markAllNotificationsRead;
window.showToast = showToast;
window.renderPusatSopView = renderPusatSopView;
window.openImagePreviewModal = openImagePreviewModal;
window.closeImagePreviewModal = closeImagePreviewModal;
