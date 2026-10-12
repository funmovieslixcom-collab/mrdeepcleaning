/* ============================================================
   MR. DEEP CLEANING — Language toggle + WhatsApp links
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '60146226011'; // 014-6226011, format antarabangsa tanpa '+'
  var WA_MESSAGE = {
    ms: 'Hai Mr. Deep Cleaning! Saya nak bertanya tentang servis cuci.',
    en: 'Hi Mr. Deep Cleaning! I would like to ask about your cleaning service.'
  };

  /* ---------- Translations ---------- */
  var I18N = {
    ms: {
      nav_services: 'Servis',
      nav_why: 'Kenapa Kami',
      nav_pricing: 'Harga',
      nav_gallery: 'Galeri',
      nav_feedback: 'Feedback',
      nav_contact: 'Hubungi',
      cta_whatsapp: 'WhatsApp Kami',
      hero_badge: '✦ Pakar Deep Cleaning KL & Selangor',
      hero_title: 'Tilam & Sofa Anda <span class="accent">Bersih Macam Baru</span>.',
      hero_sub: 'Kami singkir hama, tungau, noda & bau tak sedap dari tilam, sofa, kusyen kereta dan kerusi pejabat — guna mesin profesional & chemical selamat untuk keluarga.',
      hero_cta1: 'Tempah Sekarang',
      hero_cta2: 'Lihat Harga',
      trust1: 'Pelanggan Puas Hati',
      trust2: 'Rating Google',
      trust3: 'Tahun Pengalaman',
      img_hero: 'Ganti dengan gambar kerja cleaning',
      svc_kicker: 'PERKHIDMATAN KAMI',
      svc_title: 'Kami Cuci Apa Yang Orang Lain Tak Sangka Kotor.',
      svc_sub: 'Deep cleaning profesional untuk semua perkara lembut dalam hidup anda.',
      svc1_title: '🛏️ Cuci Tilam',
      svc1_desc: 'Singkir tungau, hama & noda kuning. Sesuai untuk bayi, kanak-kanak & alahan kulit.',
      svc2_title: '🛋️ Cuci Sofa & Kerusi',
      svc2_desc: 'Sofa kain & kulit, kerusi makan, pouf — kembali bersih, segar & bebas bau.',
      svc3_title: '🚗 Kusyen Kereta',
      svc3_desc: 'Detailing interior — kusyen, karpet, headliner & plafond. Bau hapak & kesat hilang.',
      svc4_title: '💼 Kerusi Pejabat',
      svc4_desc: 'Pakej korporat untuk office & pejabat. Bulk booking, kerja hujung minggu tersedia.',
      svc5_title: '🧶 Karpet & Permaidani',
      svc5_desc: 'Karpet besar, permaidani solat & rug hiasan — cuci mendalam, kering cepat.',
      svc6_title: '🍼 Barangan Bayi',
      svc6_desc: 'Stroller, car seat & baby cot. Chemical mesra bayi, selamat digunakan semula.',
      why_kicker: 'KENAPA MR. DEEP CLEANING?',
      why_title: 'Bukan Cuci Biasa. Ini Deep Cleaning.',
      f1_title: 'Mesin Profesional',
      f1_desc: 'Extraction machine & steam berkualiti tinggi — kotoran dikeluarkan, bukan disembunyikan.',
      f2_title: 'Chemical Selamat',
      f2_desc: 'Mesra kanak-kanak, bayi & haiwan peliharaan. Tanpa bau kimia yang keras.',
      f3_title: 'Datang Ke Rumah',
      f3_desc: 'Servis di lokasi anda seluruh KL & Selangor. Anda tak perlu ke mana-mana.',
      f4_title: 'Kering Cepat',
      f4_desc: 'Kuasa penghisap tinggi — tilam & sofa anda siap guna dalam beberapa jam.',
      proc_kicker: 'CARA KERJA',
      proc_title: 'Mudah. 3 Langkah Je.',
      s1_title: 'WhatsApp Kami',
      s1_desc: 'Hantar gambar item & lokasi anda. Kami bagi quote percuma.',
      s2_title: 'Pilih Masa',
      s2_desc: 'Kami datang ikut jadual anda — termasuk hujung minggu.',
      s3_title: 'Kami Cuci',
      s3_desc: 'Duduk diam, tengok barang anda jadi bersih & segar semula.',
      price_kicker: 'HARGA',
      price_title: 'Harga Berpatutan, Kualiti Premium.',
      price_note: '* Harga anggaran. Quote muktamad ikut saiz & keadaan item — WhatsApp untuk quote tepat.',
      pt_item: 'Item',
      pt_price: 'Harga (dari)',
      pt_tilam_s: 'Tilam Single',
      pt_tilam_d: 'Tilam Queen / King',
      pt_sofa_2: 'Sofa 2 tempat duduk',
      pt_sofa_3: 'Sofa 3 tempat duduk',
      pt_kerusi: 'Kerusi (pejabat / makan)',
      pt_kereta: 'Kusyen kereta (penuh)',
      pt_karpet: 'Karpet / permaidani',
      price_cta: 'Dapatkan Quote Percuma →',
      gal_kicker: 'GALERI',
      gal_title: 'Sebelum & Selepas.',
      fb_kicker: 'MAKLUM BALAS PELANGGAN',
      fb_title: 'Feedback Dari Rumah Yang Dah Bersih.',
      band_title: 'Baru sedar tilam & sofa anda kuning? 😅',
      band_sub: 'Jangan tunggu sampai alahan naik. WhatsApp sekarang — slot terhad setiap minggu.',
      band_cta: '💬 WhatsApp 014-6226011',
      foot_tag: 'Pakar deep cleaning tilam, sofa, kusyen kereta & kerusi pejabat di KL & Selangor.',
      foot_hubungi: 'Hubungi',
      foot_hours: '⏰ Setiap hari, 9pagi – 7malam',
      foot_area: 'Area Servis',
      foot_area_list: 'Kuala Lumpur • Shah Alam • Subang • Petaling Jaya • Klang • Puchong • Cheras • Ampang • Bangi • Kajang',
      foot_rights: 'Hak cipta terpelihara.'
    },
    en: {
      nav_services: 'Services',
      nav_why: 'Why Us',
      nav_pricing: 'Pricing',
      nav_gallery: 'Gallery',
      nav_feedback: 'Reviews',
      nav_contact: 'Contact',
      cta_whatsapp: 'WhatsApp Us',
      hero_badge: '✦ Deep Cleaning Specialists KL & Selangor',
      hero_title: 'Your Mattress & Sofa, <span class="accent">Fresh Like New</span>.',
      hero_sub: 'We remove dust mites, allergens, stains & odours from mattresses, sofas, car upholstery and office chairs — using professional machines and family-safe chemicals.',
      hero_cta1: 'Book Now',
      hero_cta2: 'View Pricing',
      trust1: 'Happy Customers',
      trust2: 'Google Rating',
      trust3: 'Years of Experience',
      img_hero: 'Replace with a cleaning job photo',
      svc_kicker: 'OUR SERVICES',
      svc_title: 'We Clean What You Never Knew Was Dirty.',
      svc_sub: 'Professional deep cleaning for everything soft in your life.',
      svc1_title: '🛏️ Mattress Cleaning',
      svc1_desc: 'Removes dust mites, allergens & yellow stains. Ideal for babies, kids & sensitive skin.',
      svc2_title: '🛋️ Sofa & Chair Cleaning',
      svc2_desc: 'Fabric & leather sofas, dining chairs, poufs — clean, fresh & odour-free again.',
      svc3_title: '🚗 Car Upholstery',
      svc3_desc: 'Interior detailing — seats, carpets, headliner & roof lining. Musty smells gone.',
      svc4_title: '💼 Office Chairs',
      svc4_desc: 'Corporate packages for offices. Bulk bookings, weekend slots available.',
      svc5_title: '🧶 Carpets & Rugs',
      svc5_desc: 'Large carpets, prayer mats & decorative rugs — deep cleaned, fast drying.',
      svc6_title: '🍼 Baby Items',
      svc6_desc: 'Strollers, car seats & baby cots. Baby-friendly chemicals, safe for reuse.',
      why_kicker: 'WHY MR. DEEP CLEANING?',
      why_title: 'Not Just Cleaning. This Is Deep Cleaning.',
      f1_title: 'Professional Machines',
      f1_desc: 'High-grade extraction & steam machines — dirt is removed, not hidden.',
      f2_title: 'Safe Chemicals',
      f2_desc: 'Safe for kids, babies & pets. No harsh chemical smells.',
      f3_title: 'We Come To You',
      f3_desc: 'On-site service across KL & Selangor. You never have to leave home.',
      f4_title: 'Fast Drying',
      f4_desc: 'Powerful suction — your mattress & sofa are ready within hours.',
      proc_kicker: 'HOW IT WORKS',
      proc_title: 'Easy. Just 3 Steps.',
      s1_title: 'WhatsApp Us',
      s1_desc: 'Send photos of your items & location. We give you a free quote.',
      s2_title: 'Pick a Time',
      s2_desc: 'We come according to your schedule — weekends included.',
      s3_title: 'We Clean',
      s3_desc: 'Sit back and watch your items become fresh & clean again.',
      price_kicker: 'PRICING',
      price_title: 'Affordable Prices, Premium Quality.',
      price_note: '* Estimated prices. Final quote depends on size & condition — WhatsApp us for an exact quote.',
      pt_item: 'Item',
      pt_price: 'Price (from)',
      pt_tilam_s: 'Single Mattress',
      pt_tilam_d: 'Queen / King Mattress',
      pt_sofa_2: '2-seater Sofa',
      pt_sofa_3: '3-seater Sofa',
      pt_kerusi: 'Chair (office / dining)',
      pt_kereta: 'Car upholstery (full)',
      pt_karpet: 'Carpet / rug',
      price_cta: 'Get a Free Quote →',
      gal_kicker: 'GALLERY',
      gal_title: 'Before & After.',
      fb_kicker: 'CUSTOMER FEEDBACK',
      fb_title: 'Real Feedback From Newly Cleaned Homes.',
      band_title: 'Just realised your mattress & sofa are yellowing? 😅',
      band_sub: "Don't wait until allergies kick in. WhatsApp now — limited slots weekly.",
      band_cta: '💬 WhatsApp 014-6226011',
      foot_tag: 'Deep cleaning specialists for mattresses, sofas, car upholstery & office chairs in KL & Selangor.',
      foot_hubungi: 'Contact',
      foot_hours: '⏰ Daily, 9am – 7pm',
      foot_area: 'Service Area',
      foot_area_list: 'Kuala Lumpur • Shah Alam • Subang • Petaling Jaya • Klang • Puchong • Cheras • Ampang • Bangi • Kajang',
      foot_rights: 'All rights reserved.'
    }
  };

  var currentLang = localStorage.getItem('mdc-lang') || 'ms';

  /* ---------- Apply language ---------- */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('mdc-lang', lang);
    document.documentElement.lang = lang;

    var dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.getElementById('langLabel').textContent = lang.toUpperCase();
    updateWaLinks();
  }

  /* ---------- WhatsApp helpers ---------- */
  function waLink() {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(WA_MESSAGE[currentLang]);
  }

  function updateWaLinks() {
    ['waNav', 'waHero', 'waPricing', 'waBand', 'waFooter', 'waFloat'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.href = waLink();
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    applyLang(currentLang);

    document.getElementById('langToggle').addEventListener('click', function () {
      applyLang(currentLang === 'ms' ? 'en' : 'ms');
    });

    // Navbar scroll state
    var navbar = document.getElementById('navbar');
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  });
})();
