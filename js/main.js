/*
 * AURNA Jewellery: site behaviour (all pages)
 * Reads js/site-config.js. No dependencies, no build step.
 */
(function () {
  'use strict';

  var C = window.AURNA_CONFIG || {};
  var doc = document;
  var root = doc.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  root.classList.add('js');

  function $(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var ICON = function (id, cls) {
    return '<svg class="icon' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#' + id + '"/></svg>';
  };

  /* ---------- Preview banner ---------- */
  if (C.preview) { var banner = $('#preview-banner'); if (banner) banner.hidden = false; }

  /* ---------- Images ---------- */
  function makeImg(src, alt, opts) {
    opts = opts || {};
    var img = doc.createElement('img');
    img.src = src;
    img.alt = alt || '';
    img.decoding = 'async';
    img.loading = opts.eager ? 'eager' : 'lazy';
    if (opts.eager) img.setAttribute('fetchpriority', 'high');
    if (opts.srcset) img.srcset = opts.srcset;
    if (opts.sizes) img.sizes = opts.sizes;
    if (opts.width) { img.width = opts.width; img.height = opts.height; }
    return img;
  }
  function placeholder(label) {
    var d = doc.createElement('div');
    d.className = 'ph';
    d.setAttribute('aria-hidden', 'true');
    d.textContent = label;
    return d;
  }
  // Site-root path for config image paths, so they work from inner pages too
  function rootPath(src) { return /^(https?:)?\/\//.test(src) || src.charAt(0) === '/' ? src : '/' + src; }

  // Preview-only stand-in photographs (never used when preview is false)
  var PV = C.preview ? (C.previewImages || {}) : {};
  var PREVIEW_ALT = 'Sample photograph for layout preview, not an AURNA design';

  // Hero (homepage)
  (function () {
    var slot = $('[data-hero-media]');
    if (!slot) return;
    var h = C.heroImage || {};
    var frame = doc.createElement('div');
    frame.className = 'hero__frame';
    if (h.src) {
      frame.appendChild(makeImg(rootPath(h.src), h.alt, {
        eager: true, srcset: h.srcset, width: h.width, height: h.height,
        sizes: '(min-width: 1024px) 520px, (min-width: 768px) 480px, 100vw'
      }));
    } else if (C.preview && PV.hero) {
      frame.appendChild(makeImg(rootPath(PV.hero), PREVIEW_ALT, { eager: true, width: 960, height: 1200 }));
    } else if (C.preview) {
      frame.appendChild(placeholder('Hero product photograph (4:5, gold or platinum piece)'));
    } else {
      slot.hidden = true;
      return;
    }
    slot.appendChild(frame);
  })();

  // Collection cards (homepage): hidden on the live site until a real photograph is set
  (function () {
    var cards = $$('[data-collection]');
    if (!cards.length) return;
    cards.forEach(function (card) {
      var id = card.getAttribute('data-collection');
      var cfg = (C.collections || {})[id] || {};
      var media = $('.cat-card__media', card);
      if (cfg.src) {
        media.appendChild(makeImg(rootPath(cfg.src), cfg.alt, { width: 800, height: 1000, sizes: '(min-width: 1024px) 384px, 50vw' }));
      } else if (C.preview && (PV.collections || {})[id]) {
        media.appendChild(makeImg(rootPath(PV.collections[id]), PREVIEW_ALT, { width: 960, height: 1200 }));
      } else if (C.preview) {
        media.appendChild(placeholder('Category photograph (4:5)'));
      } else {
        card.hidden = true;
      }
    });
    if (cards.every(function (c) { return c.hidden; })) {
      var sec = cards[0].closest('section');
      if (sec) sec.hidden = true;
    }
  })();

  /* ---------- Product cards ---------- */
  var METAL_NAMES = { yellow: 'yellow gold', white: 'white gold', rose: 'rose gold', platinum: 'platinum', silver: 'silver' };
  var VIEWS = [['hero', '45° view'], ['top', 'Top view'], ['side', 'Side view']];
  var ALL_PRODUCTS = C.products || [];

  function isReal(p) { return !p.sample && p.images && p.images.hero; }
  function visibleProducts() {
    return ALL_PRODUCTS.filter(function (p) { return C.preview || isReal(p); });
  }

  function productViews(p) {
    var imgs = p.images || {};
    var views = VIEWS.filter(function (v) { return imgs[v[0]]; }).map(function (v) {
      return { key: v[0], label: (p.viewLabels || {})[v[0]] || v[1], src: rootPath(imgs[v[0]]) };
    });
    if (!views.length && C.preview) {
      var configSamples = ALL_PRODUCTS.filter(function (x) { return x.sample; });
      var stand = p.previewSrc || (PV.products || [])[configSamples.indexOf(p)] || '';
      views = VIEWS.map(function (v, i) {
        return { key: v[0], label: v[1], src: i === 0 && stand ? rootPath(stand) : '', preview: i === 0 && !!stand };
      });
    }
    return views;
  }

  function viewAlt(p, view) {
    if (view.preview) return PREVIEW_ALT;
    return p.alt ? p.alt + ', ' + view.label : '';
  }

  function fillFrame(frame, p, view) {
    frame.innerHTML = '';
    if (view.src) frame.appendChild(makeImg(view.src, viewAlt(p, view), { width: 800, height: 800, sizes: '(min-width: 1024px) 288px, 50vw' }));
    else frame.appendChild(placeholder('Product photograph: ' + view.label));
  }

  function buildProductCard(p) {
    var views = productViews(p);
    var li = doc.createElement('li');
    li.className = 'product';

    var specs = [];
    if (p.shape) specs.push(esc(p.shape) + ' laboratory-grown diamond');
    if (p.carat) specs.push(esc(p.carat) + (p.caratBasis ? ' (' + esc(p.caratBasis) + ')' : ''));
    if (p.metal) specs.push(esc(p.metal));

    var metals = (p.metals || []).filter(function (m) { return METAL_NAMES[m]; });

    var thumbs = '';
    if (views.length > 1) {
      thumbs = '<div class="product__thumbs" role="group" aria-label="Views of ' + esc(p.code) + '">' +
        views.map(function (v, i) {
          return '<button type="button" class="product__thumb" data-view="' + i + '" aria-pressed="' + (i === 0) + '" aria-label="Show ' + esc(v.label.toLowerCase()) + '">' +
            (v.src ? '<img src="' + esc(v.src) + '" alt="" loading="lazy" width="88" height="88">' : '<span aria-hidden="true">' + esc(v.label.split(' ')[0]) + '</span>') +
            '</button>';
        }).join('') + '</div>';
    }

    li.innerHTML =
      '<div class="product__frame"></div>' + thumbs +
      '<div class="product__body">' +
        '<p class="code">' + esc(p.code) + '</p>' +
        '<h3 class="display-3 product__name">' + esc(p.name) + '</h3>' +
        (p.description ? '<p class="product__desc">' + esc(p.description) + '</p>' : '') +
        '<p class="product__specs">' + specs.join('<br>') + '</p>' +
        (p.availability ? '<p class="product__avail">' + esc(p.availability) + '</p>' : '') +
        (metals.length ? '<ul class="product__metals">' + metals.map(function (m) {
          return '<li class="metal-dot metal-dot--' + m + '"><span class="visually-hidden">Available in ' + METAL_NAMES[m] + '</span></li>';
        }).join('') + '</ul>' : '') +
        '<div class="product__actions">' +
          '<a class="link" href="#" data-wa="product" data-code="' + esc(p.code) + '">Ask on WhatsApp ' + ICON('i-arrow', 'icon--sm') + '</a>' +
          '<button type="button" class="link" data-enquire="" data-code="' + esc(p.code) + '">Ask about this design ' + ICON('i-arrow', 'icon--sm') + '</button>' +
        '</div>' +
      '</div>';

    var frame = $('.product__frame', li);
    if (views.length) fillFrame(frame, p, views[0]);

    $$('.product__thumb', li).forEach(function (btn) {
      btn.addEventListener('click', function () {
        fillFrame(frame, p, views[+btn.getAttribute('data-view')]);
        $$('.product__thumb', li).forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      });
    });
    return li;
  }

  // Homepage: Selected designs
  (function () {
    var list = $('[data-products]');
    if (!list) return;
    var products = visibleProducts();
    if (!products.length) { list.closest('section').hidden = true; return; }
    // Real designs first, taken in turn from each collection so every category is represented,
    // then samples; at most 8 (Blueprint 6: 6-8 selected designs)
    var real = products.filter(isReal), byCat = {}, cats = [], mixed = [];
    real.forEach(function (p) { if (!byCat[p.category]) { byCat[p.category] = []; cats.push(p.category); } byCat[p.category].push(p); });
    for (var round = 0; mixed.length < real.length; round++) {
      cats.forEach(function (c) { if (byCat[c][round]) mixed.push(byCat[c][round]); });
    }
    mixed.concat(products.filter(function (p) { return !isReal(p); })).slice(0, 8)
      .forEach(function (p) { list.appendChild(buildProductCard(p)); });
  })();

  // Collection pages (/collections/<name>/): real designs for that collection.
  // In preview, the grid is topped up to 12 clearly labelled samples so the layout can be reviewed.
  var SAMPLE_SETS = {
    'rings':               { prefix: 'AR', carats: ['0.50 ct', '0.75 ct', '1 ct onwards', '1.50 ct', '2 ct', '0.30 ct'], basis: ['centre stone', 'centre stone', 'centre stone', 'centre stone', 'centre stone', 'total weight'] },
    'earrings':            { prefix: 'AE', carats: ['0.25 ct', '0.50 ct', '1 ct', '0.40 ct', '0.60 ct', '2 ct'], basis: ['total weight'] },
    'pendants':            { prefix: 'AP', carats: ['0.30 ct', '0.50 ct', '0.75 ct', '1 ct onwards'], basis: ['centre stone'] },
    'necklaces':           { prefix: 'AN', carats: ['1 ct', '2 ct', '3 ct', '0.75 ct', '5 ct'], basis: ['total weight'] },
    'bracelets':           { prefix: 'AB', carats: ['2 ct', '3 ct', '5 ct', '1.50 ct', '4 ct'], basis: ['total weight'] },
    'everyday-essentials': { prefix: 'AX', carats: ['0.05 ct', '0.10 ct', '0.15 ct', '0.20 ct', '0.08 ct'], basis: ['total weight'], metals: [['9K gold', ['yellow', 'rose']], ['925 sterling silver', ['silver']], ['14K gold', ['yellow', 'white']]] }
  };
  var SAMPLE_SHAPES = ['Round', 'Oval', 'Pear', 'Emerald', 'Princess', 'Cushion', 'Marquise'];
  var SAMPLE_METALS = [['14K or 18K gold', ['yellow', 'white', 'rose']], ['18K gold', ['yellow', 'white']], ['9K or 14K gold', ['yellow', 'rose']], ['PT950 platinum', ['platinum']], ['925 sterling silver', ['silver']]];
  var SAMPLE_AVAIL = ['Ready stock', 'Made-to-order', 'Ready stock', ''];

  // Naming convention (same as real designs): "The <Shape> <Style>", e.g. "The Round Six-Prong Solitaire".
  // Description: one sentence on stone, setting and metal. {s} = shape in lower case, {S} = capitalised.
  var SHAPE_NAME = { Emerald: 'Emerald-Cut', Princess: 'Princess-Cut', Cushion: 'Cushion-Cut' };
  var SHAPE_TEXT = { Emerald: 'emerald-cut', Princess: 'princess-cut', Cushion: 'cushion-cut', Pear: 'pear-shaped' };
  var SAMPLE_STYLES = {
    'rings': [
      ['Solitaire', 'A {s} laboratory-grown diamond in a slim solitaire setting', 'SOL'],
      ['Halo', 'A {s} laboratory-grown diamond framed by a halo of smaller stones', 'HAL'],
      ['Three-Stone', 'A {s} laboratory-grown diamond between two smaller stones', 'TRI'],
      ['Eternity Band', '{S} laboratory-grown diamonds set all the way around a slim band', 'ETB'],
      ['Half-Eternity Band', '{S} laboratory-grown diamonds set across the front of a slim band', 'HEB'],
      ['Cluster Ring', 'A cluster of {s} laboratory-grown diamonds on a fine band', 'CLU']
    ],
    'earrings': [
      ['Studs', 'A pair of {s} laboratory-grown diamond studs', 'STD'],
      ['Halo Studs', 'Studs with a {s} laboratory-grown diamond framed by smaller stones', 'HAL'],
      ['Drops', '{S} laboratory-grown diamonds suspended below the ear', 'DRP'],
      ['Hoops', 'Hoops set with {s} laboratory-grown diamonds', 'HOP'],
      ['Cluster Studs', 'Studs with clusters of {s} laboratory-grown diamonds', 'CLU'],
      ['Huggies', 'Small hoops that sit close to the ear, set with {s} laboratory-grown diamonds', 'HUG']
    ],
    'pendants': [
      ['Solitaire Pendant', 'A single {s} laboratory-grown diamond on a fine chain', 'SOL'],
      ['Halo Pendant', 'A {s} laboratory-grown diamond framed by smaller stones', 'HAL'],
      ['Drop Pendant', 'A {s} laboratory-grown diamond in a drop-shaped setting', 'DRP'],
      ['Bar Pendant', '{S} laboratory-grown diamonds set in a slim bar', 'BAR']
    ],
    'necklaces': [
      ['Line Necklace', '{S} laboratory-grown diamonds set along the front of the necklace', 'LIN'],
      ['Station Necklace', '{S} laboratory-grown diamonds spaced along a fine chain', 'STA'],
      ['Riviera Necklace', 'A continuous line of {s} laboratory-grown diamonds', 'RIV'],
      ['Centrepiece Necklace', 'A {s} laboratory-grown diamond centrepiece on a fine chain', 'CEN']
    ],
    'bracelets': [
      ['Tennis Bracelet', 'A continuous line of {s} laboratory-grown diamonds', 'TEN'],
      ['Line Bracelet', '{S} laboratory-grown diamonds set along part of a fine chain', 'LIN'],
      ['Bangle', 'A slim bangle set with {s} laboratory-grown diamonds', 'BNG'],
      ['Station Bracelet', '{S} laboratory-grown diamonds spaced along a fine chain', 'STA']
    ],
    'everyday-essentials': [
      ['Petite Solitaire Ring', 'A small {s} laboratory-grown diamond on a slim band', 'RNG'],
      ['Mini Studs', 'Small {s} laboratory-grown diamond studs for daily wear', 'STD'],
      ['Petite Pendant', 'A small {s} laboratory-grown diamond on a fine chain', 'PND'],
      ['Fine Line Bracelet', 'A few {s} laboratory-grown diamonds set on a fine chain', 'BRC']
    ]
  };
  function sampleName(shape, style) { return 'The ' + (SHAPE_NAME[shape] || shape) + ' ' + style[0]; }
  function sampleDescription(shape, style, metal) {
    var s = SHAPE_TEXT[shape] || shape.toLowerCase();
    var S = s.charAt(0).toUpperCase() + s.slice(1);
    var text = style[1].replace('{s}', s).replace('{S}', S);
    if (/^A [aeiou]/i.test(text)) text = 'An' + text.slice(1);   // "An oval", "An emerald-cut"
    return text + ', in ' + metal + '.';
  }

  function makeSamples(cat, count) {
    var set = SAMPLE_SETS[cat];
    if (!set || count <= 0) return [];
    var pool = ((PV.byCategory || {})[cat] || []).filter(Boolean);
    var metals = set.metals || SAMPLE_METALS;
    var out = [];
    var styles = SAMPLE_STYLES[cat] || [['Design', 'A {s} laboratory-grown diamond design', 'DSN']];
    var counters = {};
    for (var i = 0; i < count; i++) {
      var m = metals[i % metals.length];
      var shape = SAMPLE_SHAPES[i % SAMPLE_SHAPES.length];
      var style = styles[i % styles.length];
      out.push({
        sample: true, generated: true, category: cat,
        // Preview samples use the real code pattern, numbered from 31 so they never clash with real designs
        code: set.prefix + '-' + (style[2] || 'DSN') + '-' + (counters[style[2]] = (counters[style[2]] || 30) + 1),
        name: sampleName(shape, style),
        description: sampleDescription(shape, style, m[0]),
        shape: shape,
        carat: set.carats[i % set.carats.length],
        caratBasis: set.basis[i % set.basis.length],
        metal: m[0], metals: m[1],
        availability: SAMPLE_AVAIL[i % SAMPLE_AVAIL.length],
        previewSrc: pool.length ? pool[i % pool.length] : ''
      });
    }
    return out;
  }

  $$('[data-collection-products]').forEach(function (list) {
    var cat = list.getAttribute('data-collection-products');
    var section = list.closest('section');
    var items = ALL_PRODUCTS.filter(function (p) { return p.category === cat && isReal(p); });
    // Real designs first, then preview samples up to 12 (samples disappear when preview is false)
    if (C.preview) items = items.concat(makeSamples(cat, 12 - items.length));
    var count = section && $('[data-product-count]', section);
    if (!items.length) {
      list.hidden = true;
      var note = section && $('[data-empty-note]', section);
      if (note) note.hidden = false;
      if (count) count.hidden = true;
      return;
    }
    var nSamples = items.filter(function (p) { return p.sample; }).length;
    if (count) count.textContent = items.length + (items.length === 1 ? ' design' : ' designs') +
      (nSamples ? ' (' + (nSamples === items.length ? 'preview samples' : nSamples + ' preview samples') + ')' : '');
    items.forEach(function (p) { list.appendChild(buildProductCard(p)); });
  });

  /* ---------- Links to pages that aren't live yet ---------- */
  var livePages = C.livePages || [];
  function isLive(url) { return livePages.indexOf(String(url).split('#')[0]) !== -1; }

  $$('[data-live]').forEach(function (a) {
    var url = a.getAttribute('data-live');
    if (isLive(url)) {
      a.setAttribute('href', url);
      a.removeAttribute('data-enquire');
      var wrap = a.closest('[data-live-wrap]');
      if (wrap) wrap.hidden = false;
    } else if (a.getAttribute('data-fallback') === 'hide') {
      var target = a.closest('li') && a.closest('nav, details') ? a.closest('li') : a;
      target.hidden = true;
    }
  });

  /* ---------- WhatsApp (Content & Copy 13.5) ---------- */
  var WA_TEXT = {
    general:   "Hi AURNA, I'd like to know more about working with you.",
    trade:     "Hi AURNA, I'm a jewellery retailer and I'd like to discuss a trade partnership.",
    catalogue: "Hi AURNA, I'd like to request the trade catalogue.",
    custom:    "Hi AURNA, I'd like to discuss a custom design for my store."
  };
  var waNumber = String(C.whatsappNumber || '').replace(/\D/g, '');

  function waHref(key, code) {
    var text = key === 'product' ? "Hi AURNA, I'd like details on " + code + '.' : (WA_TEXT[key] || WA_TEXT.general);
    if (waNumber) return 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text);
    if (C.preview) return 'https://wa.me/?text=' + encodeURIComponent(text);
    return null;
  }

  function applyWa(ctx) {
    $$('[data-wa]', ctx).forEach(function (a) {
      var href = waHref(a.getAttribute('data-wa'), a.getAttribute('data-code'));
      if (href) {
        a.href = href;
        a.target = '_blank';
        a.rel = 'noopener';
      } else {
        (a.closest('[data-wa-wrap]') || a).hidden = true;
      }
    });
  }
  applyWa(doc);

  /* ---------- Contact details, policies, identity ---------- */
  (function () {
    var items = [];
    var wa = waHref('general');
    if (wa) items.push('<li><a href="' + esc(wa) + '" target="_blank" rel="noopener">' + ICON('i-whatsapp') + 'WhatsApp</a></li>');
    if (C.email) items.push('<li><a href="mailto:' + esc(C.email) + '">' + ICON('i-mail') + esc(C.email) + '</a></li>');
    if (C.phone) items.push('<li><a href="tel:' + esc(String(C.phone).replace(/[^\d+]/g, '')) + '">' + ICON('i-phone') + esc(C.phone) + '</a></li>');
    if (C.instagramUrl) items.push('<li><a href="' + esc(C.instagramUrl) + '" target="_blank" rel="noopener">' + ICON('i-instagram') + 'Instagram</a></li>');
    if (C.threadsUrl) items.push('<li><a href="' + esc(C.threadsUrl) + '" target="_blank" rel="noopener">' + ICON('i-threads') + 'Threads</a></li>');
    if (C.youtubeUrl) items.push('<li><a href="' + esc(C.youtubeUrl) + '" target="_blank" rel="noopener">' + ICON('i-youtube') + 'YouTube</a></li>');
    $$('[data-connect]').forEach(function (list) {
      if (items.length) list.innerHTML = items.join('');
      else (list.closest('[data-connect-group]') || list).hidden = true;
    });

    var policies = C.policies || [];
    $$('[data-policies]').forEach(function (pol) {
      if (policies.length) {
        pol.innerHTML = policies.map(function (p) { return '<li><a href="' + esc(p.url) + '">' + esc(p.label) + '</a></li>'; }).join('');
      } else { pol.hidden = true; }
    });

    var L = C.legal || {};
    var parts = [L.entityName, L.gstin ? 'GSTIN ' + L.gstin : '', L.address].filter(Boolean);
    $$('[data-legal]').forEach(function (el) {
      if (parts.length) { el.textContent = parts.join(' · '); el.hidden = false; }
      else {
        var wrap = el.closest('[data-legal-wrap]');
        if (wrap) wrap.hidden = true;
      }
    });

    // Policy pages: legal name, email and the preview-only draft notice
    $$('[data-legal-name]').forEach(function (el) { if (L.entityName) el.textContent = L.entityName; });
    $$('[data-email-line]').forEach(function (el) {
      if (C.email) el.innerHTML = 'by email at <a href="mailto:' + esc(C.email) + '">' + esc(C.email) + '</a>, or ';
    });
    $$('[data-legal-address]').forEach(function (el) {
      if (L.address) { el.textContent = L.address; el.closest('[data-legal-address-wrap]').hidden = false; }
    });
    $$('[data-draft-notice]').forEach(function (el) { el.hidden = !C.preview; });

    $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  })();

  /* ---------- Config-driven form options ---------- */
  $$('[data-privacy]').forEach(function (a) {
    if (C.privacyUrl) a.href = C.privacyUrl;
    else a.replaceWith(doc.createTextNode(a.textContent));
  });
  if (C.offerLooseStones) $$('[data-flag="offerLooseStones"]').forEach(function (el) { el.hidden = false; });
  (function () {
    var ranges = C.volumeRanges || [];
    if (!ranges.length) return;
    $$('[data-volume-field]').forEach(function (wrap) {
      var sel = $('select', wrap);
      ranges.forEach(function (r) { var o = doc.createElement('option'); o.textContent = r; sel.appendChild(o); });
      wrap.hidden = false;
    });
  })();

  // Reference-image uploads: shown only when the endpoint can take files securely
  var UP = C.uploads || {};
  var UP_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
  var UP_MAX_MB = UP.maxSizeMB || 5;
  var UP_MAX_FILES = UP.maxFiles || 3;
  $$('[data-upload]').forEach(function (wrap) {
    if (!UP.enabled) { wrap.hidden = true; var alt = wrap.parentNode.querySelector('[data-upload-off]'); if (alt) alt.hidden = false; return; }
    var input = $('input[type="file"]', wrap);
    var hint = $('[data-upload-hint]', wrap);
    var thumbs = $('[data-upload-thumbs]', wrap);
    if (hint) hint.textContent = 'JPG, PNG or WEBP, up to ' + UP_MAX_FILES + ' images, ' + UP_MAX_MB + ' MB each.';
    input.addEventListener('change', function () {
      thumbs.innerHTML = '';
      Array.prototype.slice.call(input.files, 0, UP_MAX_FILES).forEach(function (f) {
        if (UP_TYPES.indexOf(f.type) === -1) return;
        var li = doc.createElement('li');
        var im = doc.createElement('img');
        im.alt = '';
        im.src = URL.createObjectURL(f);
        im.onload = function () { URL.revokeObjectURL(im.src); };
        li.appendChild(im);
        var cap = doc.createElement('span');
        cap.textContent = f.name;
        li.appendChild(cap);
        thumbs.appendChild(li);
      });
    });
  });

  /* ---------- Enquiry selectors (I'm a retailer / I'm buying for myself) ---------- */
  function setMode(scope, mode) {
    $$('[data-mode-btn]', scope).forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-mode-btn') === mode));
    });
    $$('[data-mode-panel]', scope).forEach(function (p) {
      p.hidden = p.getAttribute('data-mode-panel') !== mode;
    });
  }
  function firstInput(scope, mode) {
    return $('[data-mode-panel="' + mode + '"] input:not([type="hidden"]):not([tabindex="-1"])', scope);
  }
  $$('[data-mode-scope]').forEach(function (scope) {
    $$('[data-mode-btn]', scope).forEach(function (b) {
      b.addEventListener('click', function () {
        var mode = b.getAttribute('data-mode-btn');
        setMode(scope, mode);
        var target = firstInput(scope, mode);
        if (target) target.focus();
      });
    });
  });

  /* ---------- Dialogs ---------- */
  function openDialog(dlg) {
    if (typeof dlg.showModal === 'function') { if (!dlg.open) dlg.showModal(); }
    else dlg.setAttribute('open', '');
  }
  function closeDialog(dlg) {
    if (typeof dlg.close === 'function') dlg.close();
    else dlg.removeAttribute('open');
  }
  $$('dialog').forEach(function (dlg) {
    $$('[data-close]', dlg).forEach(function (b) { b.addEventListener('click', function () { closeDialog(dlg); }); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) closeDialog(dlg); });
  });

  // Mobile menu
  var menu = $('#menu');
  var menuBtn = $('#menu-btn');
  if (menu && menuBtn) {
    menuBtn.addEventListener('click', function () { openDialog(menu); menuBtn.setAttribute('aria-expanded', 'true'); });
    menu.addEventListener('close', function () { menuBtn.setAttribute('aria-expanded', 'false'); });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { closeDialog(menu); }); });
  }

  // Enquire panel
  var panel = $('#enquire');
  function openEnquire(mode, code) {
    setMode(panel, mode || null);
    if (code) {
      var c = $('[data-mode-panel="consumer"] [name="design_code"]', panel);
      if (c) c.value = code;
      var t = $('[data-mode-panel="trade"] [name="requirements"]', panel);
      if (t && !t.value) t.value = 'Design code: ' + code + '\n';
    }
    if (menu && menu.open) closeDialog(menu);
    openDialog(panel);
    var first = mode ? firstInput(panel, mode) : $('[data-mode-btn]', panel);
    if (first) first.focus();
  }
  if (panel) {
    doc.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-enquire]');
      if (!trigger) return;
      e.preventDefault();
      openEnquire(trigger.getAttribute('data-enquire') || null, trigger.getAttribute('data-code'));
    });
  }

  /* ---------- Forms (Content & Copy 13.1–13.4, 14.1) ---------- */
  var MSG = {
    email: 'Enter an email address in the format name@example.com.',
    tel: 'Enter a 10-digit mobile number.',
    telIntl: 'Enter a 10-digit mobile number, or an international number starting with +.',
    file: 'Upload a JPG, PNG or WEBP image under ' + UP_MAX_MB + ' MB.',
    files: 'Upload up to ' + UP_MAX_FILES + ' images.',
    fail: "Your enquiry couldn't be sent. Try again, or chat with us on WhatsApp."
  };

  function setError(el, msg) {
    var field = el.closest('.field');
    if (!field) return;
    var id = (el.id || el.name) + '-error';
    var err = doc.getElementById(id);
    if (msg) {
      if (!err) {
        err = doc.createElement('p');
        err.className = 'field__error';
        err.id = id;
        field.appendChild(err);
      }
      err.innerHTML = ICON('i-alert') + '<span>' + esc(msg) + '</span>';
      field.classList.add('field--error');
      el.setAttribute('aria-invalid', 'true');
      el.setAttribute('aria-describedby', id);
    } else {
      if (err) err.remove();
      field.classList.remove('field--error');
      el.removeAttribute('aria-invalid');
      el.removeAttribute('aria-describedby');
    }
  }

  function validateField(el) {
    var msg = '';
    if (el.type === 'file') {
      var files = Array.prototype.slice.call(el.files || []);
      if (files.length > UP_MAX_FILES) msg = MSG.files;
      else if (files.some(function (f) { return UP_TYPES.indexOf(f.type) === -1 || f.size > UP_MAX_MB * 1048576; })) msg = MSG.file;
      setError(el, msg);
      return !msg;
    }
    // Checkbox groups that need at least one choice
    if (el.tagName === 'FIELDSET') {
      if (!$$('input[type="checkbox"]', el).some(function (c) { return c.checked; })) msg = el.getAttribute('data-error') || 'Choose at least one option.';
      setError(el, msg);
      return !msg;
    }
    var v = el.type === 'checkbox' ? el.checked : el.value.trim();
    var tel = v && el.type === 'tel' ? v.replace(/[\s\-().]/g, '') : '';
    var telOk = /^(\+?91|0)?[6-9]\d{9}$/.test(tel) || (el.hasAttribute('data-intl') && /^\+(?!91)\d{7,15}$/.test(tel));
    if (el.required && !v) {
      msg = el.getAttribute('data-error') || 'Enter your ' + (el.getAttribute('data-label') || 'details') + '.';
    } else if (v && el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
      msg = MSG.email;
    } else if (v && el.type === 'tel' && !telOk) {
      msg = el.hasAttribute('data-intl') ? MSG.telIntl : MSG.tel;
    } else if (v && el.getAttribute('data-pattern') && !new RegExp(el.getAttribute('data-pattern'), 'i').test(v)) {
      msg = el.getAttribute('data-pattern-error') || 'Check the format of this field.';
    }
    setError(el, msg);
    return !msg;
  }

  function fieldsToValidate(form) {
    return $$('input, select, textarea, fieldset[data-required-group]', form).filter(function (el) {
      if (el.name === 'company_website' || el.closest('[hidden]')) return false;
      if (el.tagName === 'FIELDSET') return true;
      if (el.closest('fieldset[data-required-group]')) return false;
      return el.required || el.type === 'email' || el.type === 'tel' || el.type === 'file' || el.hasAttribute('data-pattern');
    });
  }

  function meta(form) {
    return { form: form.getAttribute('data-form'), page: location.pathname, submitted_at: new Date().toISOString() };
  }

  function collectJson(form) {
    var data = meta(form);
    new FormData(form).forEach(function (value, key) {
      if (key === 'company_website' || typeof value !== 'string') return;
      value = value.trim();
      if (value === '') return;
      if (Object.prototype.hasOwnProperty.call(data, key)) data[key] = [].concat(data[key], value);
      else data[key] = value;
    });
    return data;
  }

  function hasFiles(form) {
    return UP.enabled && $$('input[type="file"]', form).some(function (i) { return i.files && i.files.length && !i.closest('[hidden]'); });
  }

  function collectMultipart(form) {
    var fd = new FormData(form);
    fd.delete('company_website');
    var m = meta(form);
    Object.keys(m).forEach(function (k) { fd.append(k, m[k]); });
    return fd;
  }

  function showSuccess(form) {
    var box = doc.createElement('div');
    box.className = 'confirm';
    box.setAttribute('role', 'status');
    box.innerHTML = ICON('i-check') +
      '<h3 tabindex="-1">' + esc(form.getAttribute('data-success-heading')) + '</h3>' +
      '<p>' + esc(form.getAttribute('data-success-text')) + '</p>' +
      '<a class="link" href="#" data-wa="general">Chat on WhatsApp ' + ICON('i-arrow', 'icon--sm') + '</a>';
    form.hidden = true;
    form.parentNode.insertBefore(box, form.nextSibling);
    applyWa(box);
    $('h3', box).focus();
  }

  $$('form[data-form]').forEach(function (form) {
    var status = $('.form__status', form);
    var submit = $('button[type="submit"]', form);
    var submitLabel = submit.textContent;
    var failMsg = form.getAttribute('data-fail') || MSG.fail;

    function revalidate(e) {
      if (!form.getAttribute('data-tried') || !e.target.matches('input, select, textarea')) return;
      var group = e.target.closest('fieldset[data-required-group]');
      validateField(group || e.target);
    }
    form.addEventListener('input', revalidate);
    form.addEventListener('change', revalidate);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.setAttribute('data-tried', '1');
      status.textContent = '';

      var invalid = fieldsToValidate(form).filter(function (el) { return !validateField(el); });
      if (invalid.length) { invalid[0].focus(); return; }

      // Honeypot: bots fill hidden fields. Pretend success, send nothing.
      var hp = $('[name="company_website"]', form);
      if (hp && hp.value) { showSuccess(form); return; }

      if (!C.formEndpoint) {
        if (window.console) console.warn('AURNA: set formEndpoint in js/site-config.js so forms can be delivered.');
        status.textContent = failMsg;
        return;
      }

      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      submit.textContent = 'Sending…';

      var opts = hasFiles(form)
        ? { method: 'POST', headers: { 'Accept': 'application/json' }, body: collectMultipart(form) }
        : { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(collectJson(form)) };

      fetch(C.formEndpoint, opts).then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        showSuccess(form);
      }).catch(function () {
        status.textContent = failMsg;
      }).then(function () {
        submit.disabled = false;
        submit.removeAttribute('aria-busy');
        submit.textContent = submitLabel;
      });
    });
  });

  /* ---------- Trade Partnership helpers ---------- */
  // "Discuss white-label supply" and similar links tick the matching interest before scrolling to the form
  doc.addEventListener('click', function (e) {
    var t = e.target.closest('[data-preselect]');
    if (!t) return;
    var form = doc.getElementById(t.getAttribute('data-preselect-form'));
    var box = form && $('input[type="checkbox"][value="' + t.getAttribute('data-preselect') + '"]', form);
    if (box) { box.checked = true; box.dispatchEvent(new Event('change', { bubbles: true })); }
  });

  // State / country: "Outside India" reveals a required country field
  $$('[data-state-select]').forEach(function (sel) {
    var wrap = doc.getElementById(sel.getAttribute('data-state-select'));
    var input = wrap && $('input', wrap);
    if (!input) return;
    function sync() {
      var outside = sel.value === 'Outside India';
      wrap.hidden = !outside;
      input.required = outside;
      if (!outside) { input.value = ''; setError(input, ''); }
    }
    sel.addEventListener('change', sync);
    sync();
  });

  // FAQ accordion: one open at a time (native with details[name]; this covers older browsers)
  $$('.faq').forEach(function (list) {
    var items = $$('details', list);
    items.forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (d.open) items.forEach(function (o) { if (o !== d) o.open = false; });
      });
    });
  });

  /* ---------- Hide in-page links whose section is hidden ---------- */
  $$('a[href*="#"]').forEach(function (a) {
    var href = a.getAttribute('href');
    var path = href.split('#')[0];
    if (path && path !== location.pathname) return;
    var id = href.split('#')[1];
    if (!id || id === 'main' || id === 'enquire') return;
    var target = doc.getElementById(id);
    if (target && target.closest('[hidden]')) {
      var item = a.closest('nav li, details li, .anchor-nav li');
      (item || a).hidden = true;
    }
  });
  $$('.footer-group').forEach(function (g) {
    var items = $$('li', g);
    if (items.length && items.every(function (li) { return li.hidden; })) g.hidden = true;
  });

  /* ---------- Footer accordions: open on desktop ---------- */
  var desktop = window.matchMedia('(min-width: 1024px)');
  function syncFooter() { $$('.footer-group').forEach(function (d) { d.open = desktop.matches; }); }
  syncFooter();
  if (desktop.addEventListener) desktop.addEventListener('change', syncFooter);
  else if (desktop.addListener) desktop.addListener(syncFooter);

  /* ---------- Entry fade (once, 16 px) ---------- */
  if ('IntersectionObserver' in window && !reduceMotion) {
    root.classList.add('motion');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    $$('.reveal').forEach(function (el) { io.observe(el); });
  }
})();
