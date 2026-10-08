/**
 * JUST MY TEAM — MASTER JAVASCRIPT
 * Interactive Platform Simulator, Referral Code Engine, Property Explorer & Dynamic UI
 * Baadam Info And Trade Link Services Pvt. Ltd.
 */

// Mock Properties Dataset (teasing land, commercial & residential deals with APN & zoning)
const MOCK_PROPERTIES = [
  {
    id: "prop-101",
    title: "Rolling Hills Ranch & Timberland",
    type: "Land",
    acres: 140,
    pricePerAcre: 4250,
    totalPrice: 595000,
    location: "Travis County, TX",
    apn: "04-2918-092",
    zoning: "AG-Agricultural / Rural",
    status: "Private Network",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    description: "Expansive 140-acre parcel boasting mature cedar & oak canopies, dual road frontage, and year-round spring creek. Ideal for equestrian subdivision or private luxury ranch.",
    features: ["Spring-fed creek", "Electricity at boundary", "Low Ag-exempt taxes", "Clean title"]
  },
  {
    id: "prop-102",
    title: "Blue Ridge Mountain View Tract",
    type: "Land",
    acres: 48,
    pricePerAcre: 6800,
    totalPrice: 326400,
    location: "Ashe County, NC",
    apn: "09-1142-301",
    zoning: "RA-Residential Agricultural",
    status: "Exclusive",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    description: "Spectacular elevated ridgeline parcel with panoramic 360-degree mountain views. Pre-perced for 4 septic sites, accessible via graded gravel private road.",
    features: ["Elevation 3,400 ft", "Timber rights included", "Off-grid potential", "Survey complete"]
  },
  {
    id: "prop-103",
    title: "Sonoran Desert Commercial Corridor",
    type: "Commercial",
    acres: 18.5,
    pricePerAcre: 48000,
    totalPrice: 888000,
    location: "Pinal County, AZ",
    apn: "501-18-024A",
    zoning: "C-2 Highway Commercial",
    status: "Private Network",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    description: "High-visibility arterial corner land parcel positioned directly along expanding logistic corridor. City water and high-voltage commercial 3-phase power ready.",
    features: ["Heavy truck ingress/egress", "Signalized intersection", "Zero flood plain", "Fast-track permitting"]
  },
  {
    id: "prop-104",
    title: "Meadowland Development Parcels",
    type: "Residential",
    acres: 32,
    pricePerAcre: 18500,
    totalPrice: 592000,
    location: "Boise Metro Area, ID",
    apn: "R-88192-004",
    zoning: "R-1 Suburban Medium Density",
    status: "Teaser",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    description: "Master-planned residential development opportunity with preliminary plat for 28 single-family home sites. Gentle topography with municipal sewer stubbed at edge.",
    features: ["Subdivision draft ready", "City utilities at property line", "Top-rated school district"]
  },
  {
    id: "prop-105",
    title: "Evergreen Pine Valley Hunting Reserve",
    type: "Land",
    acres: 220,
    pricePerAcre: 3100,
    totalPrice: 682000,
    location: "Klamath County, OR",
    apn: "4109-021-00",
    zoning: "F-1 Forestry & Grazing",
    status: "Exclusive",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    description: "Pristine wilderness tract bordered by national forest. Abundant trophy wildlife, internal trail system, merchantable timber appraisal available.",
    features: ["Direct public land boundary", "Private trail network", "Mineral & water rights", "Gated access"]
  },
  {
    id: "prop-106",
    title: "Coastal Foothills Vineyard Acreage",
    type: "Land",
    acres: 65,
    pricePerAcre: 15200,
    totalPrice: 988000,
    location: "San Luis Obispo, CA",
    apn: "088-290-019",
    zoning: "AG-2 Vineyard/Viticulture",
    status: "Private Network",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "South-facing micro-climate slopes with prime loam soil tested for high-grade Pinot & Syrah. Includes 3 high-yield permitted water wells.",
    features: ["3 high-capacity wells", "Microclimate report", "Perimeter deer fencing", "Solar grid ready"]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initReferralTools();
  initFeatureTabs();
  initPropertyExplorer();
  initFaqAccordion();
  initContactForms();
  initAuthModals();
  initDownlineCalculator();
});

/* ==========================================================================
   1. STICKY HEADER
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileDrawer() {
  const openBtn = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.drawer-backdrop');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (!openBtn || !drawer) return;

  const toggleDrawer = (open) => {
    if (open) {
      drawer.classList.add('open');
      backdrop?.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('open');
      backdrop?.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  openBtn.addEventListener('click', () => toggleDrawer(true));
  closeBtn?.addEventListener('click', () => toggleDrawer(false));
  backdrop?.addEventListener('click', () => toggleDrawer(false));

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

/* ==========================================================================
   3. REFERRAL CODE & RECRUITMENT STRIP ENGINE
   ========================================================================== */
function initReferralTools() {
  const urlParams = new URLSearchParams(window.location.search);
  const refParam = urlParams.get('referral_code') || urlParams.get('ref') || urlParams.get('code');

  // 1. Handle Registration Page Prefill (register.html)
  const regSponsorInput = document.getElementById('reg-sponsor-code');
  const sponsorBanner = document.getElementById('sponsor-banner');
  if (regSponsorInput && refParam) {
    const cleanCode = refParam.toUpperCase().replace(/[^A-Z0-9_-]/g, '');
    regSponsorInput.value = cleanCode;
    
    if (sponsorBanner) {
      const codeDisplay = sponsorBanner.querySelector('.sponsor-code-val') || sponsorBanner.querySelector('div[style*="font-family: var(--font-mono)"]');
      if (codeDisplay) {
        codeDisplay.textContent = cleanCode;
      }
      const badge = sponsorBanner.querySelector('.badge-tag');
      if (badge) {
        badge.textContent = `Active Sponsor: ${cleanCode}`;
      }
    }

    const firstNameInput = document.getElementById('reg-firstname');
    if (firstNameInput) {
      setTimeout(() => firstNameInput.focus(), 150);
    }
    
    const tierParam = urlParams.get('tier');
    if (tierParam) {
      const tierName = tierParam.charAt(0).toUpperCase() + tierParam.slice(1);
      showToast(`Referral applied: Complimentary ${tierName} Founder tier!`);
    } else {
      showToast(`Referral code "${cleanCode}" applied!`);
    }
  }

  // 2. Handle Home Page Recruitment Strip
  const heroInput = document.getElementById('hero-referral-input') || document.querySelector('.referral-code-input');
  const previewLink = document.getElementById('live-referral-link') || document.querySelector('.live-referral-url');
  const recruitmentForm = document.getElementById('recruitment-form');
  const copyBtns = document.querySelectorAll('.btn-copy-invite');

  const updateReferralState = (rawVal) => {
    const cleanCode = (rawVal || '').toUpperCase().replace(/[^A-Z0-9_-]/g, '');
    if (heroInput && heroInput.value !== cleanCode) {
      heroInput.value = cleanCode;
    }
    const targetCode = cleanCode.trim() || 'CODE';
    const targetUrl = `register.html?referral_code=${encodeURIComponent(targetCode)}`;
    const displayTarget = `/register?referral_code=${targetCode}`;
    
    if (previewLink) {
      previewLink.textContent = displayTarget;
      previewLink.setAttribute('href', targetUrl);
    }
    copyBtns.forEach(btn => {
      btn.setAttribute('data-code', targetCode);
    });
    return targetCode;
  };

  if (heroInput) {
    if (refParam) {
      heroInput.value = refParam.toUpperCase().replace(/[^A-Z0-9_-]/g, '');
    }

    heroInput.addEventListener('input', (e) => {
      updateReferralState(e.target.value);
    });

    heroInput.addEventListener('paste', (e) => {
      setTimeout(() => {
        const pasted = heroInput.value;
        const clean = updateReferralState(pasted);
        showToast(`Referral code "${clean}" pasted!`);
      }, 20);
    });

    // Initialize with current value
    updateReferralState(heroInput.value);
  }

  // Sample code buttons
  document.querySelectorAll('.sample-code-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const code = chip.getAttribute('data-code') || chip.textContent.trim();
      if (heroInput) {
        heroInput.value = code;
        updateReferralState(code);
        heroInput.focus();
      }
      showToast(`Selected referral code "${code}"`);
    });
  });

  // Recruitment form submit / Verify & Join button
  if (recruitmentForm) {
    recruitmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = (heroInput ? heroInput.value : '').trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '') || 'JMT-FOUNDER';
      window.location.href = `register.html?referral_code=${encodeURIComponent(code)}`;
    });
  }

  // Copy referral invite link
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const code = btn.getAttribute('data-code') || (heroInput ? heroInput.value : '').trim().toUpperCase() || 'JMT-FOUNDER';
      const link = `${window.location.origin}/register.html?referral_code=${encodeURIComponent(code)}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link).then(() => {
          showToast(`Copied invite link: ${link}`);
        }).catch(() => {
          showToast(`Referral link: /register?referral_code=${code}`);
        });
      } else {
        showToast(`Referral link: /register?referral_code=${code}`);
      }
    });
  });
}

/* ==========================================================================
   4. FEATURE TABS SWITCHER
   ========================================================================== */
function initFeatureTabs() {
  const tabBtns = document.querySelectorAll('.feature-tabs .tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetId);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. PROPERTY EXPLORER & MOCK CATALOG (Client-Side JS on JSON Mock)
   ========================================================================== */
function initPropertyExplorer() {
  const container = document.getElementById('properties-catalog-grid');
  const filterType = document.getElementById('filter-property-type');
  const filterMinAcres = document.getElementById('filter-min-acres');
  const filterMaxAcres = document.getElementById('filter-max-acres');
  const filterSearch = document.getElementById('filter-search-loc');
  const countBadge = document.getElementById('properties-count-badge');
  const resetBtn = document.getElementById('btn-reset-filters');

  if (!container) return;

  function getDetailUrl(id) {
    if (id === 'prop-102') return 'property-detail-102.html';
    if (id === 'prop-103') return 'property-detail-103.html';
    return 'property-detail.html';
  }

  function renderProperties(list) {
    if (countBadge) {
      countBadge.textContent = `SHOWING ${list.length} OF ${MOCK_PROPERTIES.length} PROPERTIES`;
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div class="property-empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>No properties found matching criteria</h3>
          <p>Try adjusting the size range, category, or location keyword filters.</p>
          <button type="button" id="btn-empty-reset" class="filter-reset-btn" style="margin: 0 auto;">Reset All Filters</button>
        </div>
      `;
      document.getElementById('btn-empty-reset')?.addEventListener('click', resetFilters);
      return;
    }

    container.innerHTML = list.map(item => {
      const detailUrl = getDetailUrl(item.id);
      return `
        <div class="property-card" data-id="${item.id}" id="${item.id}">
          <a href="${detailUrl}" class="property-img-wrap" aria-label="View ${item.title}">
            <img class="property-img" src="${item.image}" alt="${item.title}" loading="lazy" />
            <span class="property-type-tag">${item.type}</span>
            <span class="property-status-tag">${item.status}</span>
          </a>
          <div class="property-content">
            <div class="property-location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              ${item.location}
            </div>
            <h3 class="property-card-title">
              <a href="${detailUrl}">${item.title}</a>
            </h3>
            
            <div class="property-specs">
              <div class="spec-item">
                <div class="spec-val">${item.acres} AC</div>
                <div class="spec-lbl">Size</div>
              </div>
              <div class="spec-item">
                <div class="spec-val">$${item.pricePerAcre.toLocaleString()}</div>
                <div class="spec-lbl">Price/Acre</div>
              </div>
              <div class="spec-item">
                <div class="spec-val">${item.apn.split('-')[0]}...</div>
                <div class="spec-lbl">APN Code</div>
              </div>
            </div>

            <div class="property-footer">
              <div class="property-price-wrap">
                <div class="price-main">$${item.totalPrice.toLocaleString()}</div>
                <div class="price-unit">Total Asking Price</div>
              </div>
              <a href="${detailUrl}" class="property-view-link">
                View Property <span class="arrow-icon">→</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function filterData() {
    const typeVal = filterType ? filterType.value : 'all';
    const minAcresVal = filterMinAcres ? parseFloat(filterMinAcres.value) || 0 : 0;
    const maxAcresVal = filterMaxAcres ? parseFloat(filterMaxAcres.value) || 999999 : 999999;
    const searchVal = filterSearch ? filterSearch.value.trim().toLowerCase() : '';

    const filtered = MOCK_PROPERTIES.filter(p => {
      const matchType = (typeVal === 'all' || p.type.toLowerCase() === typeVal.toLowerCase());
      const matchMinAcres = p.acres >= minAcresVal;
      const matchMaxAcres = p.acres <= maxAcresVal;
      const matchSearch = !searchVal || 
        p.title.toLowerCase().includes(searchVal) || 
        p.location.toLowerCase().includes(searchVal) ||
        p.apn.toLowerCase().includes(searchVal) ||
        p.zoning.toLowerCase().includes(searchVal);
      
      return matchType && matchMinAcres && matchMaxAcres && matchSearch;
    });

    renderProperties(filtered);
  }

  function resetFilters() {
    if (filterType) filterType.value = 'all';
    if (filterMinAcres) filterMinAcres.value = '0';
    if (filterMaxAcres) filterMaxAcres.value = '999999';
    if (filterSearch) filterSearch.value = '';
    filterData();
    showToast('Filters reset to show all properties.');
  }

  filterType?.addEventListener('change', filterData);
  filterMinAcres?.addEventListener('change', filterData);
  filterMaxAcres?.addEventListener('change', filterData);
  filterSearch?.addEventListener('input', filterData);
  resetBtn?.addEventListener('click', resetFilters);

  // Initial render
  filterData();
}

function openPropertyModal(id) {
  const item = MOCK_PROPERTIES.find(p => p.id === id);
  if (!item) return;

  const modalOverlay = document.getElementById('property-modal-overlay');
  const modalBody = document.getElementById('property-modal-content');

  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <div style="position: relative; border-radius: var(--radius-lg); overflow: hidden; height: 280px; margin-bottom: 1.25rem;">
        <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;" />
        <span class="property-type-tag" style="top: 1rem; left: 1rem;">${item.type}</span>
        <span class="property-status-tag" style="top: 1rem; right: 1rem;">${item.status}</span>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span style="color: var(--teal-primary); font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600;">APN: ${item.apn} &bull; Zoning: ${item.zoning}</span>
          <h2 style="font-size: 1.7rem; margin: 0.3rem 0;">${item.title}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">${item.location}</p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--teal-primary); font-family: var(--font-display);">$${item.totalPrice.toLocaleString()}</div>
          <div style="font-size: 0.82rem; color: var(--text-muted);">$${item.pricePerAcre.toLocaleString()} / Acre (${item.acres} Total Acres)</div>
        </div>
      </div>
    </div>

    <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; margin-bottom: 0.5rem; color: var(--text-primary);">Parcel Overview & Specifications</h4>
      <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">${item.description}</p>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.6rem;">
        ${item.features.map(f => `
          <div style="font-size: 0.85rem; color: var(--text-primary); display: flex; align-items: center; gap: 0.5rem;">
            <svg style="width: 14px; height: 14px; color: var(--teal-primary);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${f}
          </div>
        `).join('')}
      </div>
    </div>

    <div style="background: linear-gradient(135deg, rgba(0, 210, 180, 0.08), rgba(37, 138, 255, 0.05)); border: 1px solid rgba(0, 210, 180, 0.3); border-radius: var(--radius-md); padding: 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <div>
        <h5 style="font-size: 0.95rem; color: var(--text-primary); margin-bottom: 0.2rem;">Private Agent Network Listing</h5>
        <p style="font-size: 0.82rem; color: var(--text-secondary); max-width: 320px;">Direct agent messaging and internal deal co-brokering are protected inside Just My Team.</p>
      </div>
      <a href="register.html?referral_code=JMT-DIRECT" class="btn btn-primary btn-sm">
        Join Network to Contact Agent
      </a>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   6. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  // Event delegation on document to handle any FAQ click reliably
  if (window._faqAccordionInitialized) return;
  window._faqAccordionInitialized = true;

  document.addEventListener('click', (e) => {
    // Allow text selection inside answer without collapsing
    if (e.target.closest('.faq-answer')) return;

    const currentItem = e.target.closest('.faq-item');
    if (!currentItem) return;

    const questionBtn = currentItem.querySelector('.faq-question');
    if (!questionBtn) return;

    e.preventDefault();

    const isAlreadyOpen = currentItem.classList.contains('active');
    const allItems = document.querySelectorAll('.faq-item');

    allItems.forEach(item => {
      item.classList.remove('active');
      const btn = item.querySelector('.faq-question');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });

    if (!isAlreadyOpen) {
      currentItem.classList.add('active');
      questionBtn.setAttribute('aria-expanded', 'true');
    }
  });
}

/* ==========================================================================
   7. INTERACTIVE DOWNLINE & NETWORK CALCULATOR
   ========================================================================== */
function initDownlineCalculator() {
  const agentCountInput = document.getElementById('calc-agents-input');
  const avgDealsInput = document.getElementById('calc-deals-input');
  const valAgents = document.getElementById('calc-agents-val');
  const valDeals = document.getElementById('calc-deals-val');
  const resultVolume = document.getElementById('calc-result-volume');
  const resultEarnings = document.getElementById('calc-result-earnings');

  if (!agentCountInput || !avgDealsInput) return;

  function updateCalc() {
    const agents = parseInt(agentCountInput.value, 10) || 5;
    const deals = parseInt(avgDealsInput.value, 10) || 2;

    if (valAgents) valAgents.textContent = agents;
    if (valDeals) valDeals.textContent = `${deals} parcels/yr`;

    // Multi-tier compounding model
    const totalTransactions = agents * deals;
    const avgParcelPrice = 320000;
    const annualVolume = totalTransactions * avgParcelPrice;
    const networkOverrides = annualVolume * 0.0075; // 0.75% override pool

    if (resultVolume) resultVolume.textContent = `$${(annualVolume / 1000000).toFixed(1)}M`;
    if (resultEarnings) resultEarnings.textContent = `$${Math.round(networkOverrides).toLocaleString()}`;
  }

  agentCountInput.addEventListener('input', updateCalc);
  avgDealsInput.addEventListener('input', updateCalc);
  updateCalc();
}

/* ==========================================================================
   8. FORM VALIDATION & INTERACTION
   ========================================================================== */
function initContactForms() {
  const forms = document.querySelectorAll('.contact-form-validate');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const license = form.querySelector('[name="license"]');

      [name, email, license].forEach(field => {
        if (field && !field.value.trim()) {
          field.classList.add('invalid');
          isValid = false;
        } else if (field) {
          field.classList.remove('invalid');
        }
      });

      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('invalid');
        isValid = false;
      }

      if (isValid) {
        showToast("Success! Your private invitation request has been submitted.");
        form.reset();
      } else {
        showToast("Please complete all required fields correctly.");
      }
    });
  });
}

/* ==========================================================================
   9. AUTH MODALS & HELPERS
   ========================================================================== */
function initAuthModals() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('.modal-close-btn')) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(o => o.classList.remove('open'));
      document.body.style.overflow = '';
    }
  });
}

/* ==========================================================================
   10. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg style="width: 18px; height: 18px; color: var(--teal-primary); flex-shrink: 0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-leave');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   11. GLOBAL INITIALIZATION
   ========================================================================== */
function initAllModules() {
  initAuthState();
  initFaqAccordion();
  initDownlineCalculator();
  initContactForms();
  initAuthModals();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllModules);
} else {
  initAllModules();
}



// AI Concierge & Guided Tour Assistant is loaded via js/ai-assistant.js

/* ==========================================================================
   11. AUTHENTICATION & ACCESS CONTROL (Just My Team Documentation)
   ========================================================================== */

function getAuthUser() {
  const isLoggedIn = localStorage.getItem('jmt_logged_in') === 'true';
  if (!isLoggedIn) return null;

  const defaultUser = {
    name: 'Alex Morgan',
    email: 'agent@example.com',
    phone: '+1 (512) 555-0198',
    role: 'Agent',
    state: 'Texas',
    city: 'Austin Metro',
    referralCode: 'JMT-AGENT-4921'
  };

  try {
    const stored = localStorage.getItem('jmt_user_data');
    if (stored) {
      return Object.assign({}, defaultUser, JSON.parse(stored));
    }
  } catch (e) {}

  return defaultUser;
}

/* ==========================================================================
   ADMIN API & ROLE AUTHORIZATION SERVICE (BACKEND MOCK CONTROLLER)
   ========================================================================== */
const AdminAPI = {
  getMembershipPlans: function() {
    const defaultPlans = [
      {
        id: 'plan-starter',
        name: 'Starter Agent Plan',
        price: '$29/mo',
        billing: 'Monthly',
        features: 'Up to 10 property listings, 1-to-1 direct messaging, personal notes, basic referral tree.',
        status: 'Active'
      },
      {
        id: 'plan-pro',
        name: 'Pro Broker Plan',
        price: '$79/mo',
        billing: 'Monthly',
        features: 'Unlimited property listings, group deal channels, personal notes export, full downline hierarchy.',
        status: 'Active'
      },
      {
        id: 'plan-enterprise',
        name: 'Enterprise Team Plan',
        price: '$199/mo',
        billing: 'Annual',
        features: 'Multi-office management, verified email invitations, custom analytics, priority support advisor.',
        status: 'Active'
      }
    ];

    try {
      const stored = localStorage.getItem('jmt_membership_plans');
      if (stored) {
        return JSON.parse(stored);
      } else {
        localStorage.setItem('jmt_membership_plans', JSON.stringify(defaultPlans));
        return defaultPlans;
      }
    } catch (e) {
      return defaultPlans;
    }
  },

  // Enforce role === 'admin'
  _requireAdmin: function() {
    const user = getAuthUser();
    if (!user || !user.role || user.role.toLowerCase() !== 'admin') {
      throw new Error('403 Forbidden: User does not have administrative privileges.');
    }
    return user;
  },

  createMembershipPlan: function(planData) {
    this._requireAdmin();
    const plans = this.getMembershipPlans();
    const newPlan = {
      id: 'plan-' + Date.now(),
      name: planData.name,
      price: planData.price,
      billing: planData.billing || 'Monthly',
      features: planData.features || '',
      status: 'Active'
    };
    plans.push(newPlan);
    localStorage.setItem('jmt_membership_plans', JSON.stringify(plans));
    return newPlan;
  },

  updateMembershipPlan: function(planId, updatedData) {
    this._requireAdmin();
    const plans = this.getMembershipPlans();
    const idx = plans.findIndex(p => p.id === planId);
    if (idx !== -1) {
      plans[idx] = Object.assign({}, plans[idx], updatedData);
      localStorage.setItem('jmt_membership_plans', JSON.stringify(plans));
      return plans[idx];
    }
    throw new Error('404 Not Found: Membership plan does not exist.');
  },

  deleteMembershipPlan: function(planId) {
    this._requireAdmin();
    let plans = this.getMembershipPlans();
    plans = plans.filter(p => p.id !== planId);
    localStorage.setItem('jmt_membership_plans', JSON.stringify(plans));
    return true;
  }
};

function initAuthState() {
  const user = getAuthUser();
  const isLoggedIn = Boolean(user);
  const isAdmin = Boolean(user && user.role && user.role.toLowerCase() === 'admin');
  const currentPath = window.location.pathname.toLowerCase();

  // 1. Direct Route & Role Protection
  const isAdminPage = currentPath.includes('admin') || currentPath.endsWith('admin.html');
  const isProtectedPage = currentPath.endsWith('dashboard.html') || currentPath.endsWith('profile.html') || isAdminPage;
  const isAuthPage = currentPath.endsWith('login.html') || currentPath.endsWith('register.html');

  // Check for any queued authorization error toasts
  const authErr = sessionStorage.getItem('jmt_auth_error');
  if (authErr) {
    showToast(authErr, 4000);
    sessionStorage.removeItem('jmt_auth_error');
  }

  if (isProtectedPage && !isLoggedIn) {
    window.location.href = 'login.html';
    return;
  }

  // Reject normal Agent from directly accessing Admin pages/routes
  if (isAdminPage && !isAdmin) {
    sessionStorage.setItem('jmt_auth_error', '403 Forbidden: Access denied. Admin privileges required.');
    window.location.replace('dashboard.html');
    return;
  }

  if (isAuthPage && isLoggedIn) {
    window.location.href = 'dashboard.html';
    return;
  }

  // 2. Desktop Navbar Actions Rendering
  const desktopNavActions = document.querySelectorAll('.nav-actions-desktop');
  desktopNavActions.forEach(container => {
    if (isLoggedIn) {
      if (isAdmin) {
        container.innerHTML = `
          <a href="admin.html" class="btn btn-secondary btn-sm" id="btn-nav-admin" style="display: inline-flex; align-items: center; gap: 0.45rem; border-color: rgba(245, 158, 11, 0.4); color: #F59E0B;">
            <svg style="width: 15px; height: 15px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            <span>Admin</span>
          </a>
          <a href="profile.html" class="btn btn-primary btn-sm" id="btn-nav-profile" style="display: inline-flex; align-items: center; gap: 0.45rem;">
            <svg style="width: 15px; height: 15px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>Profile</span>
          </a>
        `;
      } else {
        container.innerHTML = `
          <a href="profile.html" class="btn btn-primary btn-sm" id="btn-nav-profile" style="display: inline-flex; align-items: center; gap: 0.45rem;">
            <svg style="width: 15px; height: 15px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span>Profile</span>
          </a>
        `;
      }
    } else {
      container.innerHTML = `
        <a href="login.html" class="btn btn-secondary btn-sm" id="btn-nav-login">Sign In</a>
        <a href="register.html" class="btn btn-primary btn-sm join-btn" id="btn-nav-join">
          Join <span class="btn-arrow" aria-hidden="true">&rarr;</span>
        </a>
      `;
    }
  });

  // 3. Mobile Drawer Auth Container Rendering
  const drawerAuthContainers = document.querySelectorAll('.mobile-drawer > div:last-child');
  drawerAuthContainers.forEach(container => {
    if (isLoggedIn) {
      if (isAdmin) {
        container.innerHTML = `
          <a href="dashboard.html" class="btn btn-secondary" style="width: 100%;">Dashboard</a>
          <a href="admin.html" class="btn btn-secondary" style="width: 100%; border-color: rgba(245, 158, 11, 0.4); color: #F59E0B;">Admin Console</a>
          <a href="profile.html" class="btn btn-primary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
            <svg style="width: 15px; height: 15px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Profile
          </a>
          <button type="button" class="btn btn-secondary jmt-logout-trigger" style="width: 100%; background: rgba(8, 119, 232, 0.1); border-color: rgba(8, 119, 232, 0.25); color: #0877E8;">
            Sign Out
          </button>
        `;
      } else {
        container.innerHTML = `
          <a href="dashboard.html" class="btn btn-secondary" style="width: 100%;">Dashboard</a>
          <a href="profile.html" class="btn btn-primary" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
            <svg style="width: 15px; height: 15px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Profile
          </a>
          <button type="button" class="btn btn-secondary jmt-logout-trigger" style="width: 100%; background: rgba(8, 119, 232, 0.1); border-color: rgba(8, 119, 232, 0.25); color: #0877E8;">
            Sign Out
          </button>
        `;
      }
    } else {
      container.innerHTML = `
        <a href="login.html" class="btn btn-secondary" style="width: 100%;">Agent Sign In</a>
        <a href="register.html" class="btn btn-primary" style="width: 100%;">Join Code</a>
      `;
    }
  });

  // 4. Attach Global Logout Handlers
  document.querySelectorAll('.jmt-logout-trigger').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      logoutUser();
    };
  });

  // 5. Page-Specific Population & Form Bindings
  if (document.getElementById('home-user-name')) {
    populateHomeDashboard(user);
  }

  if (isLoggedIn) {
    if (currentPath.endsWith('dashboard.html')) {
      populateDashboard(user);
    } else if (currentPath.endsWith('profile.html')) {
      populateProfile(user);
    } else if (currentPath.endsWith('admin.html')) {
      initAdminPanel(user);
    }
  }

  // 6. Bind Login Form Submission
  const loginForm = document.querySelector('form');
  if (loginForm && currentPath.endsWith('login.html')) {
    loginForm.onsubmit = (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('login-email');
      const email = emailInput ? emailInput.value.trim() : 'agent@example.com';
      const role = email.toLowerCase().includes('admin') ? 'Admin' : 'Agent';
      const namePart = email.split('@')[0].replace('.', ' ').replace(/(^|\s)\S/g, l => l.toUpperCase());

      const userData = {
        name: namePart || 'Alex Morgan',
        email: email,
        phone: '+1 (512) 555-0198',
        role: role,
        state: 'Texas',
        city: 'Austin Metro',
        referralCode: 'JMT-' + (role === 'Admin' ? 'ADMIN-1001' : 'AGENT-' + Math.floor(1000 + Math.random() * 9000))
      };

      localStorage.setItem('jmt_logged_in', 'true');
      localStorage.setItem('jmt_user_data', JSON.stringify(userData));
      showToast("Signed in successfully. Welcome to Just My Team!");

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 400);
    };
  }

  // 7. Bind Register Form Submission
  const regForm = document.querySelector('form');
  if (regForm && currentPath.endsWith('register.html')) {
    regForm.onsubmit = (e) => {
      e.preventDefault();
      const name = document.getElementById('reg-name')?.value.trim() || 'Alex Morgan';
      const email = document.getElementById('reg-email')?.value.trim() || 'agent@example.com';
      const state = document.getElementById('reg-state')?.value.trim() || 'Texas';
      const city = document.getElementById('reg-city')?.value.trim() || 'Austin Metro';
      const role = email.toLowerCase().includes('admin') ? 'Admin' : 'Agent';

      const userData = {
        name: name,
        email: email,
        phone: '+1 (512) 555-0198',
        role: role,
        state: state,
        city: city,
        referralCode: 'JMT-AGENT-' + Math.floor(1000 + Math.random() * 9000)
      };

      localStorage.setItem('jmt_logged_in', 'true');
      localStorage.setItem('jmt_user_data', JSON.stringify(userData));
      showToast("Account created successfully!");

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 400);
    };
  }
}

function logoutUser() {
  localStorage.removeItem('jmt_logged_in');
  localStorage.removeItem('jmt_user_data');
  showToast("You have been signed out.");
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 350);
}

/* ==========================================================================
   HOMEPAGE DASHBOARD DATA CONTROLLER
   ========================================================================== */
function getUserNotes() {
  const defaultNotes = [
    { id: "note-1", title: "Austin Commercial Follow-up", text: "Contact Pinal county zoning office regarding fast-track parcel utility permits.", date: "Today, 11:30 AM" },
    { id: "note-2", title: "Client Preference - Travis County", text: "Buyer seeking minimum 50+ acres with live spring water and ag exemption.", date: "Yesterday, 3:15 PM" },
    { id: "note-3", title: "Agent Onboarding Checklist", text: "Review referral tree structure and send direct link to Elena Rodriguez.", date: "2 days ago" },
    { id: "note-4", title: "Q2 Team Revenue Target", text: "Focus on land acquisitions and acreage syndication deals across Texas & NC.", date: "4 days ago" }
  ];
  try {
    const stored = localStorage.getItem('jmt_user_notes');
    if (stored) return JSON.parse(stored);
    localStorage.setItem('jmt_user_notes', JSON.stringify(defaultNotes));
    return defaultNotes;
  } catch (e) {
    return defaultNotes;
  }
}

function getUserActivities() {
  const defaultActivities = [
    {
      id: "act-1",
      type: "agent",
      title: "New Agent Joined",
      desc: "Sarah Jenkins joined your referral network",
      time: "15 mins ago"
    },
    {
      id: "act-2",
      type: "property",
      title: "New Property Added",
      desc: "Rolling Hills Ranch & Timberland listed in Texas",
      time: "2 hours ago"
    },
    {
      id: "act-3",
      type: "note",
      title: "Note Created",
      desc: "Austin Commercial Follow-up note saved",
      time: "5 hours ago"
    },
    {
      id: "act-4",
      type: "agent",
      title: "New Agent Joined",
      desc: "David Chen joined your commercial referral tree",
      time: "Yesterday"
    }
  ];
  try {
    const stored = localStorage.getItem('jmt_user_activities');
    if (stored) return JSON.parse(stored);
    localStorage.setItem('jmt_user_activities', JSON.stringify(defaultActivities));
    return defaultActivities;
  } catch (e) {
    return defaultActivities;
  }
}

function populateHomeDashboard(user) {
  const currentUser = user || getAuthUser() || { name: 'Alex Morgan' };
  
  // 1. User greeting
  const nameEl = document.getElementById('home-user-name');
  if (nameEl) nameEl.textContent = currentUser.name;

  // 2. Real counts
  const agents = getNetworkAgents();
  const notes = getUserNotes();
  const properties = (typeof MOCK_PROPERTIES !== 'undefined') ? MOCK_PROPERTIES : [1,2,3,4,5,6];

  const agentCountEl = document.getElementById('stat-connected-agents');
  if (agentCountEl) agentCountEl.textContent = agents.length;

  const propCountEl = document.getElementById('stat-properties-count');
  if (propCountEl) propCountEl.textContent = properties.length;

  const noteCountEl = document.getElementById('stat-notes-count');
  if (noteCountEl) noteCountEl.textContent = notes.length;

  const msgCountEl = document.getElementById('stat-messages-count');
  if (msgCountEl) msgCountEl.textContent = '8';

  // Additional stats
  const grpChatEl = document.getElementById('stat-group-chats');
  if (grpChatEl) grpChatEl.textContent = '2';

  const recAgentEl = document.getElementById('stat-recent-agents');
  if (recAgentEl) recAgentEl.textContent = agents.length;

  const unreadEl = document.getElementById('stat-unread-notifs');
  if (unreadEl) unreadEl.textContent = '3';

  // Donut status values
  const donutTotal = document.getElementById('donut-total-val');
  if (donutTotal) donutTotal.textContent = properties.length;

  const activeCountEl = document.getElementById('status-active-count');
  if (activeCountEl) activeCountEl.textContent = Math.max(1, properties.length - 1);

  const inactiveCountEl = document.getElementById('status-inactive-count');
  if (inactiveCountEl) inactiveCountEl.textContent = 1;

  // 3. Render Activities
  renderHomeActivities();

  // 4. Bind Quick Note Form
  const noteForm = document.getElementById('quick-note-form');
  if (noteForm) {
    noteForm.onsubmit = (e) => {
      e.preventDefault();
      const titleInput = document.getElementById('quick-note-title');
      const contentInput = document.getElementById('quick-note-content');
      const title = titleInput ? titleInput.value.trim() : '';
      const content = contentInput ? contentInput.value.trim() : '';

      if (!title || !content) {
        showToast("Please fill in note title and content.");
        return;
      }

      const currentNotes = getUserNotes();
      const newNote = {
        id: "note-" + Date.now(),
        title: title,
        text: content,
        date: "Just Now"
      };
      currentNotes.unshift(newNote);
      localStorage.setItem('jmt_user_notes', JSON.stringify(currentNotes));

      // Add to activities
      const currentActs = getUserActivities();
      currentActs.unshift({
        id: "act-" + Date.now(),
        type: "note",
        title: "Note Created",
        desc: `${title} note saved`,
        time: "Just Now"
      });
      localStorage.setItem('jmt_user_activities', JSON.stringify(currentActs));

      showToast("Personal note saved successfully!");
      noteForm.reset();
      closeAllModals();
      populateHomeDashboard(currentUser);
    };
  }
}

function renderHomeActivities() {
  const listEl = document.getElementById('dash-activity-list');
  if (!listEl) return;

  const activities = getUserActivities();
  if (activities.length === 0) {
    listEl.innerHTML = '<li style="padding: 2rem; text-align: center; color: var(--jmt-muted);">No recent activities yet.</li>';
    return;
  }

  listEl.innerHTML = activities.slice(0, 5).map(act => {
    let iconBg = 'icon-blue';
    let iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>';
    
    if (act.type === 'property') {
      iconBg = 'icon-green';
      iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>';
    } else if (act.type === 'note') {
      iconBg = 'icon-orange';
      iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line></svg>';
    } else if (act.type === 'chat') {
      iconBg = 'icon-purple';
      iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>';
    }

    return `
      <li class="dash-activity-item">
        <div class="dash-activity-left">
          <div class="dash-activity-icon ${iconBg}">
            ${iconSvg}
          </div>
          <div>
            <div class="dash-activity-title">${escapeHtml(act.title)}</div>
            <div class="dash-activity-desc">${escapeHtml(act.desc)}</div>
          </div>
        </div>
        <div class="dash-activity-time">${escapeHtml(act.time)}</div>
      </li>
    `;
  }).join('');
}

function openQuickNoteModal() {
  const modal = document.getElementById('modal-quick-note');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('quick-note-title')?.focus();
  }
}

function populateDashboard(user) {
  const isAdmin = user && user.role && user.role.toLowerCase() === 'admin';
  const nameEl = document.getElementById('dash-user-name');
  if (nameEl) nameEl.textContent = user.name;

  const roleEl = document.getElementById('dash-role-badge');
  if (roleEl) {
    roleEl.textContent = user.role + ' Role';
    roleEl.className = 'badge-tag ' + (isAdmin ? 'badge-gold' : 'badge-teal');
  }

  const locEl = document.getElementById('dash-user-location');
  if (locEl) locEl.textContent = user.state + ' • ' + user.city;

  const memDescEl = document.getElementById('dash-membership-desc');
  const adminCard = document.getElementById('dash-admin-card');

  if (isAdmin) {
    if (memDescEl) {
      memDescEl.textContent = 'Admins can create, edit, and delete platform membership plans.';
    }
    if (adminCard) {
      adminCard.style.display = 'flex';
    }
  } else {
    if (memDescEl) {
      memDescEl.textContent = 'View available membership plans on the platform.';
    }
    if (adminCard) {
      adminCard.style.display = 'none';
    }
  }

  // Bind View Available Plans modal trigger (Read-only for agents)
  const viewPlansBtn = document.getElementById('btn-view-agent-plans');
  if (viewPlansBtn) {
    viewPlansBtn.onclick = () => {
      openAvailablePlansModal();
    };
  }
}

function openAvailablePlansModal() {
  const modal = document.getElementById('modal-view-plans');
  const container = document.getElementById('agent-plans-container');
  if (!modal || !container) return;

  const plans = AdminAPI.getMembershipPlans();
  container.innerHTML = plans.map(plan => `
    <div style="padding: 1.5rem; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
          <h4 style="font-size: 1.1rem; color: #fff;">${escapeHtml(plan.name)}</h4>
          <span class="badge-tag badge-teal" style="font-size: 0.72rem;">${escapeHtml(plan.billing)}</span>
        </div>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--teal-primary); margin-bottom: 0.75rem;">
          ${escapeHtml(plan.price)}
        </div>
        <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.55;">
          ${escapeHtml(plan.features)}
        </p>
      </div>
      <div style="margin-top: 1.25rem; padding-top: 0.75rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
        <span class="badge-tag badge-green" style="font-size: 0.72rem;">● Active Plan</span>
        <span style="font-size: 0.8rem; color: var(--text-muted);">Standard Access</span>
      </div>
    </div>
  `).join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function initAdminPanel(user) {
  const isAdmin = user && user.role && user.role.toLowerCase() === 'admin';
  if (!isAdmin) {
    sessionStorage.setItem('jmt_auth_error', '403 Forbidden: Administrative role required.');
    window.location.replace('dashboard.html');
    return;
  }

  renderAdminPlansTable();

  // Bind Open Create Plan Modal
  const openCreateBtns = [
    document.getElementById('btn-open-create-plan'),
    document.getElementById('btn-create-plan-top')
  ];
  openCreateBtns.forEach(btn => {
    if (btn) {
      btn.onclick = () => {
        const modal = document.getElementById('modal-create-plan');
        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
          document.getElementById('create-plan-name')?.focus();
        }
      };
    }
  });

  // Bind Create Plan Form
  const formCreate = document.getElementById('form-create-plan');
  if (formCreate) {
    formCreate.onsubmit = (e) => {
      e.preventDefault();
      try {
        const name = document.getElementById('create-plan-name').value.trim();
        const price = document.getElementById('create-plan-price').value.trim();
        const billing = document.getElementById('create-plan-billing').value;
        const features = document.getElementById('create-plan-features').value.trim();

        AdminAPI.createMembershipPlan({ name, price, billing, features });
        showToast("Membership plan created successfully!");
        formCreate.reset();
        closeAllModals();
        renderAdminPlansTable();
      } catch (err) {
        showToast(err.message || "Failed to create plan.");
      }
    };
  }

  // Bind Edit Plan Form
  const formEdit = document.getElementById('form-edit-plan');
  if (formEdit) {
    formEdit.onsubmit = (e) => {
      e.preventDefault();
      try {
        const planId = document.getElementById('edit-plan-id').value;
        const name = document.getElementById('edit-plan-name').value.trim();
        const price = document.getElementById('edit-plan-price').value.trim();
        const billing = document.getElementById('edit-plan-billing').value;
        const features = document.getElementById('edit-plan-features').value.trim();

        AdminAPI.updateMembershipPlan(planId, { name, price, billing, features });
        showToast("Membership plan updated successfully!");
        formEdit.reset();
        closeAllModals();
        renderAdminPlansTable();
      } catch (err) {
        showToast(err.message || "Failed to update plan.");
      }
    };
  }
}

function renderAdminPlansTable() {
  const tbody = document.getElementById('admin-plans-tbody');
  const statCount = document.getElementById('stat-plan-count');
  if (!tbody) return;

  const plans = AdminAPI.getMembershipPlans();
  if (statCount) {
    statCount.textContent = `${plans.length} Active`;
  }

  if (plans.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2rem; color: var(--text-muted);">
          No platform membership plans configured yet. Click "+ Create New Plan" to add one.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = plans.map(plan => `
    <tr>
      <td>
        <div style="font-weight: 700; color: #fff;">${escapeHtml(plan.name)}</div>
      </td>
      <td>
        <span style="font-weight: 700; color: #F59E0B;">${escapeHtml(plan.price)}</span>
      </td>
      <td>
        <span class="badge-tag badge-teal" style="font-size: 0.75rem;">${escapeHtml(plan.billing)}</span>
      </td>
      <td>
        <div style="font-size: 0.82rem; color: var(--text-secondary); max-width: 320px; line-height: 1.4;">${escapeHtml(plan.features)}</div>
      </td>
      <td>
        <span class="badge-tag badge-green">● ${escapeHtml(plan.status || 'Active')}</span>
      </td>
      <td style="text-align: right;">
        <div style="display: inline-flex; gap: 0.5rem;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="openEditPlanModal('${plan.id}')" style="padding: 0.3rem 0.65rem; font-size: 0.78rem;">
            Edit
          </button>
          <button type="button" class="btn btn-secondary btn-sm" onclick="handleDeletePlan('${plan.id}')" style="padding: 0.3rem 0.65rem; font-size: 0.78rem; border-color: rgba(239, 68, 68, 0.35); color: #EF4444;">
            Delete
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openEditPlanModal(planId) {
  const plans = AdminAPI.getMembershipPlans();
  const plan = plans.find(p => p.id === planId);
  if (!plan) return;

  const modal = document.getElementById('modal-edit-plan');
  if (!modal) return;

  document.getElementById('edit-plan-id').value = plan.id;
  document.getElementById('edit-plan-name').value = plan.name;
  document.getElementById('edit-plan-price').value = plan.price;
  document.getElementById('edit-plan-billing').value = plan.billing || 'Monthly';
  document.getElementById('edit-plan-features').value = plan.features || '';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function handleDeletePlan(planId) {
  if (!confirm("Are you sure you want to delete this membership plan? This action cannot be undone.")) {
    return;
  }
  try {
    AdminAPI.deleteMembershipPlan(planId);
    showToast("Membership plan deleted.");
    renderAdminPlansTable();
  } catch (err) {
    showToast(err.message || "Failed to delete plan.");
  }
}

function populateProfile(user) {
  // 1. Dynamic User Identity & Initials
  const initialsEl = document.getElementById('prof-initials');
  if (initialsEl) {
    const parts = (user.name || 'Agent').trim().split(/\s+/);
    initialsEl.textContent = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : user.name.substring(0, 2).toUpperCase();
  }

  const displayNameEl = document.getElementById('prof-display-name');
  if (displayNameEl) displayNameEl.textContent = user.name;

  const displayEmailEl = document.getElementById('prof-display-email');
  if (displayEmailEl) displayEmailEl.textContent = user.email;

  const displayRoleEl = document.getElementById('prof-display-role');
  if (displayRoleEl) {
    displayRoleEl.textContent = user.role || 'Agent';
    displayRoleEl.className = 'badge-tag ' + (user.role === 'Admin' ? 'badge-gold' : 'badge-teal');
  }

  const locTextEl = document.getElementById('prof-meta-location-text');
  if (locTextEl) {
    locTextEl.textContent = (user.city && user.state) ? `${user.city}, ${user.state}` : (user.state || 'United States');
  }

  const refTextEl = document.getElementById('prof-meta-code-text');
  const refPreviewEl = document.getElementById('invite-ref-preview');
  const codeVal = user.referralCode || 'JMT-AGENT-4921';
  if (refTextEl) refTextEl.textContent = codeVal;
  if (refPreviewEl) refPreviewEl.textContent = codeVal;

  const pageRefEl = document.getElementById('page-prof-referral');
  if (pageRefEl) pageRefEl.textContent = codeVal;

  // 2. Populate Edit Form Inputs
  const nameInput = document.getElementById('page-prof-name');
  if (nameInput) nameInput.value = user.name;

  const emailInput = document.getElementById('page-prof-email');
  if (emailInput) emailInput.value = user.email;

  const phoneInput = document.getElementById('page-prof-phone');
  if (phoneInput) phoneInput.value = user.phone || '';

  const stateInput = document.getElementById('page-prof-state');
  if (stateInput) stateInput.value = user.state || 'Texas';

  const cityInput = document.getElementById('page-prof-city');
  if (cityInput) cityInput.value = user.city || 'Austin Metro';

  // 3. Render Connected Network Agents Table
  renderNetworkAgents();

  // 4. Bind Search Input Filter
  const searchInput = document.getElementById('network-search-input');
  if (searchInput) {
    searchInput.oninput = (e) => {
      renderNetworkAgents(e.target.value);
    };
  }

  // 5. Bind Personal Details Form Submission
  const profileForm = document.getElementById('profile-page-form');
  if (profileForm) {
    profileForm.onsubmit = (e) => {
      e.preventDefault();
      const updated = Object.assign({}, user, {
        name: document.getElementById('page-prof-name').value.trim(),
        email: document.getElementById('page-prof-email').value.trim(),
        phone: document.getElementById('page-prof-phone').value.trim(),
        state: document.getElementById('page-prof-state').value.trim(),
        city: document.getElementById('page-prof-city').value.trim()
      });

      localStorage.setItem('jmt_user_data', JSON.stringify(updated));
      showToast("Personal details updated successfully!");
      populateProfile(updated);
      initAuthState();
      closeAllModals();
    };
  }

  // 6. Bind Password Update Form Submission
  const passwordForm = document.getElementById('password-update-form');
  if (passwordForm) {
    passwordForm.onsubmit = (e) => {
      e.preventDefault();
      const currPass = document.getElementById('curr-pass').value;
      const newPass = document.getElementById('new-pass').value;
      const confPass = document.getElementById('conf-pass').value;

      if (!currPass) {
        showToast("Please enter your current password.");
        return;
      }
      if (newPass.length < 6) {
        showToast("New password must be at least 6 characters.");
        return;
      }
      if (newPass !== confPass) {
        showToast("New passwords do not match. Please re-enter.");
        return;
      }

      showToast("Password updated successfully!");
      passwordForm.reset();
      closeAllModals();
    };
  }

  // 7. Bind Invite Agent Form Submission (Email Validation)
  const inviteForm = document.getElementById('invite-agent-form');
  if (inviteForm) {
    inviteForm.onsubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById('invite-agent-email').value.trim();
      const name = document.getElementById('invite-agent-name').value.trim();
      const role = document.getElementById('invite-agent-role').value.trim();

      if (!email || !email.includes('@')) {
        showToast("Please enter a valid agent email address.");
        return;
      }

      const currentAgents = getNetworkAgents();
      const newAgent = {
        id: "agt-" + Date.now(),
        name: name || email.split('@')[0].replace('.', ' ').replace(/(^|\s)\S/g, l => l.toUpperCase()),
        email: email,
        role: role || 'Land & Acreage Specialist',
        location: user.city ? `${user.city}, ${user.state}` : 'Texas',
        phone: '+1 (555) ' + Math.floor(100 + Math.random() * 900) + '-' + Math.floor(1000 + Math.random() * 9000),
        status: 'Active',
        joinedDate: 'Just Now'
      };

      currentAgents.unshift(newAgent);
      saveNetworkAgents(currentAgents);

      showToast(`Invitation sent to ${email} via validated referral.`);
      inviteForm.reset();
      closeAllModals();
      renderNetworkAgents();
    };
  }
}

/* ==========================================================================
   NETWORK AGENTS & MODAL HELPERS
   ========================================================================== */
function getNetworkAgents() {
  const defaultAgents = [
    {
      id: "agt-101",
      name: "Sarah Jenkins",
      email: "sarah.jenkins@realtynet.com",
      role: "Senior Land Specialist",
      location: "Travis County, TX",
      phone: "+1 (512) 555-0144",
      status: "Active",
      joinedDate: "Mar 2026"
    },
    {
      id: "agt-102",
      name: "David Chen",
      email: "d.chen@commercialpartner.com",
      role: "Commercial Advisor",
      location: "Pinal County, AZ",
      phone: "+1 (480) 555-0182",
      status: "Active",
      joinedDate: "Feb 2026"
    },
    {
      id: "agt-103",
      name: "Elena Rodriguez",
      email: "elena.r@vineyardestates.com",
      role: "Acreage & Residential Broker",
      location: "San Luis Obispo, CA",
      phone: "+1 (805) 555-0199",
      status: "Active",
      joinedDate: "Jan 2026"
    }
  ];

  try {
    const stored = localStorage.getItem('jmt_network_agents');
    if (stored) {
      return JSON.parse(stored);
    } else {
      localStorage.setItem('jmt_network_agents', JSON.stringify(defaultAgents));
      return defaultAgents;
    }
  } catch (e) {
    return defaultAgents;
  }
}

function saveNetworkAgents(agents) {
  try {
    localStorage.setItem('jmt_network_agents', JSON.stringify(agents));
  } catch (e) {}
}

function renderNetworkAgents(filterQuery = '') {
  const tbody = document.getElementById('network-agents-tbody');
  const emptyState = document.getElementById('network-empty-state');
  const tableWrap = document.getElementById('network-table-wrap');
  const countBadge = document.getElementById('network-count-badge');
  if (!tbody) return;

  const agents = getNetworkAgents();
  const q = (filterQuery || '').trim().toLowerCase();

  const filtered = agents.filter(agent => {
    if (!q) return true;
    return (
      (agent.name && agent.name.toLowerCase().includes(q)) ||
      (agent.email && agent.email.toLowerCase().includes(q)) ||
      (agent.role && agent.role.toLowerCase().includes(q)) ||
      (agent.location && agent.location.toLowerCase().includes(q))
    );
  });

  if (countBadge) {
    countBadge.textContent = `${agents.length} Connected${agents.length === 1 ? ' Agent' : ' Agents'}`;
  }

  if (filtered.length === 0) {
    if (tableWrap) tableWrap.style.display = 'none';
    if (emptyState) {
      emptyState.style.display = 'block';
      const emptyTitle = document.getElementById('empty-state-title');
      const emptyDesc = document.getElementById('empty-state-desc');
      if (q) {
        if (emptyTitle) emptyTitle.textContent = 'No matching agents found';
        if (emptyDesc) emptyDesc.textContent = `No connected agents match "${filterQuery}".`;
      } else {
        if (emptyTitle) emptyTitle.textContent = 'No connected agents yet';
        if (emptyDesc) emptyDesc.textContent = 'Invite an agent to start building your referral network and growing your team on Just My Team.';
      }
    }
    tbody.innerHTML = '';
    return;
  }

  if (tableWrap) tableWrap.style.display = 'block';
  if (emptyState) emptyState.style.display = 'none';

  tbody.innerHTML = filtered.map(agent => {
    const parts = (agent.name || 'Agent').trim().split(/\s+/);
    const initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : agent.name.substring(0, 2).toUpperCase();
    return `
      <tr>
        <td>
          <div class="agent-cell-identity">
            <div class="agent-cell-avatar">${initials}</div>
            <div>
              <div class="agent-cell-name">${escapeHtml(agent.name)}</div>
              <div class="agent-cell-role">${escapeHtml(agent.role || 'Agent Specialist')} • ${escapeHtml(agent.location || 'Active Market')}</div>
            </div>
          </div>
        </td>
        <td>
          <span style="font-weight: 600; color: var(--jmt-navy);">${escapeHtml(agent.email)}</span>
        </td>
        <td>
          <span class="badge-tag badge-green">● ${escapeHtml(agent.status || 'Active')}</span>
        </td>
        <td style="text-align: right;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="openAgentProfileModal('${agent.id}')" style="padding: 0.35rem 0.85rem; font-size: 0.82rem;">
            View Profile
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function openEditProfileModal() {
  const modal = document.getElementById('modal-edit-profile');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    switchProfileTab('details');
  }
}

function openInviteModal() {
  const modal = document.getElementById('modal-invite-agent');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const emailInput = document.getElementById('invite-agent-email');
    if (emailInput) emailInput.focus();
  }
}

function openAgentProfileModal(agentId) {
  const agents = getNetworkAgents();
  const agent = agents.find(a => a.id === agentId);
  if (!agent) return;

  const modal = document.getElementById('modal-view-agent');
  if (!modal) return;

  const parts = (agent.name || 'Agent').trim().split(/\s+/);
  const initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : agent.name.substring(0, 2).toUpperCase();

  const avatarEl = document.getElementById('agent-modal-avatar');
  if (avatarEl) avatarEl.textContent = initials;

  const nameEl = document.getElementById('agent-modal-name');
  if (nameEl) nameEl.textContent = agent.name;

  const roleEl = document.getElementById('agent-modal-role');
  if (roleEl) roleEl.textContent = agent.role || 'Real Estate Agent Specialist';

  const locEl = document.getElementById('agent-modal-location');
  if (locEl) locEl.textContent = agent.location || 'Verified Partner';

  const emailEl = document.getElementById('agent-modal-email');
  if (emailEl) emailEl.textContent = agent.email;

  const phoneEl = document.getElementById('agent-modal-phone');
  if (phoneEl) phoneEl.textContent = agent.phone || '+1 (512) 555-0100';

  const statusEl = document.getElementById('agent-modal-status');
  if (statusEl) statusEl.textContent = '● ' + (agent.status || 'Active Agent');

  const joinedEl = document.getElementById('agent-modal-joined');
  if (joinedEl) joinedEl.textContent = agent.joinedDate || 'Recent';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAllModals() {
  document.querySelectorAll('.jmt-modal-overlay, .modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}

function switchProfileTab(tabName) {
  const detailsForm = document.getElementById('profile-page-form');
  const passwordForm = document.getElementById('password-update-form');
  const tabBtnDetails = document.getElementById('tab-btn-details');
  const tabBtnPass = document.getElementById('tab-btn-password');

  if (tabName === 'details') {
    if (detailsForm) detailsForm.style.display = 'block';
    if (passwordForm) passwordForm.style.display = 'none';
    if (tabBtnDetails) tabBtnDetails.classList.add('active');
    if (tabBtnPass) tabBtnPass.classList.remove('active');
  } else {
    if (detailsForm) detailsForm.style.display = 'none';
    if (passwordForm) passwordForm.style.display = 'block';
    if (tabBtnDetails) tabBtnDetails.classList.remove('active');
    if (tabBtnPass) tabBtnPass.classList.add('active');
  }
}

// Global modal overlay listeners for backdrop & Escape key
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.jmt-modal-overlay, .modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
});
