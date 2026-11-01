/**
 * MoveMate PikUp - Application Logic
 * Live Pickup Base: Bokaro & Dhanbad.
 * Delivery Territory: Anywhere in Jharkhand, Bihar & West Bengal.
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.BUSINESS_CONFIG || {};

  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileDrawer.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = isExpanded ? 'menu' : 'close';
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
        if (icon) icon.textContent = 'menu';
      });
    });
  }

  // 2. Interactive Route & Location Checker (Live in Bokaro & Dhanbad -> Jharkhand, Bihar, WB)
  const postcodeForm = document.getElementById('postcode-checker-form');
  const postcodeInput = document.getElementById('postcode-input');
  const postcodeResult = document.getElementById('coverage-result');

  if (postcodeForm && postcodeInput && postcodeResult) {
    postcodeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = postcodeInput.value.trim().toLowerCase();

      if (!query || query.length < 2) {
        postcodeInput.focus();
        return;
      }

      // Bokaro & Dhanbad live pickup keywords
      const bokaroDhanbadKeywords = [
        'bokaro', 'dhanbad', 'chas', 'jharia', 'katras', 'govindpur', 'nirsa', 'sindri',
        'bermo', 'phusro', 'gomia', 'gomoh', 'saraidhela', 'bank more', 'hirapur', 'barwadda',
        'putki', 'chandankiyari', 'sector 4', 'sector 1', 'sector 2', 'sector 3', 'sector 5',
        'sector 6', 'sector 8', 'sector 9', 'sector 11', 'sector 12', 'co-operative', 'city centre'
      ];
      // Bokaro & Dhanbad PIN codes start with 827 (Bokaro) or 826 / 828 (Dhanbad)
      const isLiveOriginPin = /^(826|827|828)/.test(query);
      const isLiveOriginName = bokaroDhanbadKeywords.some(kw => query.includes(kw));

      // Supported delivery destinations across Jharkhand, Bihar, West Bengal
      const allDeliveryNames = [
        // Jharkhand
        'jharkhand', 'ranchi', 'jamshedpur', 'tatanagar', 'hazaribagh', 'giridih', 'deoghar',
        'ramgarh', 'koderma', 'chaibasa', 'daltonganj', 'dumka', 'adityapur',
        // West Bengal
        'west bengal', 'bengal', 'wb', 'asansol', 'durgapur', 'kolkata', 'calcutta', 'howrah',
        'purulia', 'bankura', 'raniganj', 'bardhaman', 'burdwan', 'siliguri', 'kharagpur', 'haldia',
        // Bihar
        'bihar', 'gaya', 'patna', 'muzaffarpur', 'bhagalpur', 'darbhanga', 'purnia', 'begusarai',
        'arrah', 'bihar sharif', 'katihar', 'munger', 'samastipur'
      ];
      // PIN codes for Jharkhand (81-83), Bihar (80-85), West Bengal (70-74)
      const isTriStatePin = /^(70|71|72|73|74|80|81|82|83|84|85)\d{4}$/.test(query) ||
                            /^(70|71|72|73|74|80|81|82|83|84|85)/.test(query);
      const isDeliveryNameMatch = allDeliveryNames.some(name => query.includes(name) || name.includes(query));

      postcodeResult.classList.remove('hidden');

      if (isLiveOriginPin || isLiveOriginName) {
        // MATCH: Live Pickup Hub
        postcodeResult.className = 'mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3';
        postcodeResult.innerHTML = `
          <div class="flex items-start gap-2.5">
            <span class="material-symbols-outlined text-emerald-600 text-[24px]">verified</span>
            <div>
              <p class="font-bold text-sm text-emerald-900">Live Pickup Base! (${postcodeInput.value.trim()})</p>
              <p class="text-xs text-emerald-700 mt-0.5">Vehicles are stationed live in Bokaro & Dhanbad. Average driver arrival <strong>20–35 minutes</strong>. Deliveries available locally or to ANY destination across Jharkhand, Bihar, and West Bengal.</p>
            </div>
          </div>
          <a href="https://wa.me/${config.business?.whatsappNumber || '919876543210'}?text=${encodeURIComponent('Namaste MoveMate! I need a live pickup in ' + postcodeInput.value.trim() + '. Please share driver arrival time and quote.')}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition flex items-center gap-1.5 whitespace-nowrap shadow-sm">
            <span class="material-symbols-outlined text-[16px]">chat</span>
            <span>Book Live Driver</span>
          </a>
        `;
      } else if (isTriStatePin || isDeliveryNameMatch) {
        // MATCH: Supported Delivery Destination
        postcodeResult.className = 'mt-4 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3';
        postcodeResult.innerHTML = `
          <div class="flex items-start gap-2.5">
            <span class="material-symbols-outlined text-blue-600 text-[24px]">local_shipping</span>
            <div>
              <p class="font-bold text-sm text-blue-900">Direct Delivery Destination! (${postcodeInput.value.trim()})</p>
              <p class="text-xs text-blue-700 mt-0.5">We pick up from Bokaro & Dhanbad and deliver directly to <strong>${postcodeInput.value.trim()}</strong>. Same-day to nearby districts (Asansol, Ranchi, Durgapur, Purulia) and express overnight statewide.</p>
            </div>
          </div>
          <a href="https://wa.me/${config.business?.whatsappNumber || '919876543210'}?text=${encodeURIComponent('Namaste MoveMate! I want to transport goods from Bokaro/Dhanbad to ' + postcodeInput.value.trim() + '. Please provide your flat rate quote.')}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition flex items-center gap-1.5 whitespace-nowrap shadow-sm">
            <span class="material-symbols-outlined text-[16px]">chat</span>
            <span>Get Route Quote</span>
          </a>
        `;
      } else {
        // OUT OF SERVICE
        postcodeResult.className = 'mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3';
        postcodeResult.innerHTML = `
          <div class="flex items-start gap-2.5">
            <span class="material-symbols-outlined text-amber-600 text-[24px]">info</span>
            <div>
              <p class="font-bold text-sm text-amber-900">Service Coverage Clarification</p>
              <p class="text-xs text-amber-700 mt-0.5">Our live pickup fleet is stationed in <strong>Bokaro and Dhanbad</strong>, delivering anywhere within <strong>Jharkhand, Bihar, and West Bengal</strong>. If your move originates in Bokaro/Dhanbad, message us directly!</p>
            </div>
          </div>
          <a href="https://wa.me/${config.business?.whatsappNumber || '919876543210'}?text=${encodeURIComponent('Hi MoveMate, I have a pickup enquiry involving ' + postcodeInput.value.trim() + '. Can you check feasibility?')}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition flex items-center gap-1.5 whitespace-nowrap shadow-sm">
            <span class="material-symbols-outlined text-[16px]">chat</span>
            <span>Ask Dispatch</span>
          </a>
        `;
      }
    });
  }

      // Show confirmation modal
      if (confirmationModal) {
        confirmationModal.classList.remove('hidden');
        confirmationModal.classList.add('flex');
      }

      // Reset form
      enquiryForm.reset();
    });
  }

  if (modalCloseBtn && confirmationModal) {
    modalCloseBtn.addEventListener('click', () => {
      confirmationModal.classList.add('hidden');
      confirmationModal.classList.remove('flex');
    });
  }

  // 5. FAQ Accordion Interaction
  const faqButtons = document.querySelectorAll('.faq-toggle');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');

      // Close other open faqs
      faqButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherContent = otherBtn.nextElementSibling;
          const otherIcon = otherBtn.querySelector('.faq-icon');
          if (otherContent) otherContent.classList.add('hidden');
          if (otherIcon) otherIcon.textContent = 'add';
        }
      });

      // Toggle current
      btn.setAttribute('aria-expanded', !isExpanded);
      if (content) content.classList.toggle('hidden');
      if (icon) icon.textContent = isExpanded ? 'add' : 'remove';
    });
  });

  // 6. Privacy & Terms Modals
  const termsTrigger = document.getElementById('open-terms-modal');
  const privacyTrigger = document.getElementById('open-privacy-modal');
  const legalModal = document.getElementById('legal-modal');
  const legalModalTitle = document.getElementById('legal-modal-title');
  const legalModalBody = document.getElementById('legal-modal-body');
  const legalModalClose = document.getElementById('legal-modal-close');

  if (termsTrigger && legalModal) {
    termsTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      legalModalTitle.textContent = 'Terms of Transport Service (Bokaro & Dhanbad Hubs)';
      legalModalBody.innerHTML = `
        <p class="mb-3">MoveMate PikUp operates dedicated goods pickup stationed in Bokaro Steel City and Dhanbad, providing local shifting and direct deliveries anywhere across Jharkhand, Bihar, and West Bengal.</p>
        <h4 class="font-bold text-slate-900 mt-2 mb-1">1. Quoting & Toll Charges</h4>
        <p class="mb-3">All quotes provided over phone or WhatsApp are transparent flat rates in INR (₹) covering vehicle hire, fuel, driver assistance, and standard state road taxes. Any state entry permits or commercial e-Way bills will be verified prior to dispatch.</p>
        <h4 class="font-bold text-slate-900 mt-2 mb-1">2. Excluded Goods</h4>
        <p class="mb-3">We strictly do not transport prohibited contraband, hazardous chemicals, flammable gas cylinders, or unauthorized commercial items.</p>
        <h4 class="font-bold text-slate-900 mt-2 mb-1">3. Care & Packaging</h4>
        <p>All items are secured with moving blankets and ropes. Customers are advised to pre-disconnect water inlets on washing machines and defrost refrigerators prior to loading.</p>
      `;
      legalModal.classList.remove('hidden');
      legalModal.classList.add('flex');
    });
  }

  if (privacyTrigger && legalModal) {
    privacyTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      legalModalTitle.textContent = 'Privacy & Enquiry Handling Policy';
      legalModalBody.innerHTML = `
        <p class="mb-3">We respect customer privacy. Contact details submitted through our website or WhatsApp are used solely to quote, coordinate, and execute your pickup and delivery job from Bokaro or Dhanbad.</p>
        <h4 class="font-bold text-slate-900 mt-2 mb-1">No Unsolicited Marketing</h4>
        <p class="mb-3">Your phone number, pickup, and delivery addresses are never shared with third-party brokers or advertisers.</p>
        <h4 class="font-bold text-slate-900 mt-2 mb-1">Direct Driver Coordination</h4>
        <p>Your details are shared only with the assigned verified driver upon final trip confirmation.</p>
      `;
      legalModal.classList.remove('hidden');
      legalModal.classList.add('flex');
    });
  }

  if (legalModalClose && legalModal) {
    legalModalClose.addEventListener('click', () => {
      legalModal.classList.add('hidden');
      legalModal.classList.remove('flex');
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
