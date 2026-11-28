/*
 * AURNA Jewellery: site configuration
 * --------------------------------------------------------------
 * Every business fact the homepage needs lives here, so the page
 * itself never carries placeholder data.
 *
 * Rules (Blueprint 7.3, design.md 1.5):
 *  - Leave a value empty ("") until the owner has confirmed it.
 *    Empty values are hidden on the live site, never faked.
 *  - Set `preview: false` before launch. Preview mode shows sample
 *    products and grey image frames so the layout can be reviewed;
 *    with preview off, anything marked `sample` or missing a real
 *    photograph is removed from the page.
 */
window.AURNA_CONFIG = {
  /* Turn OFF before launch. */
  preview: false,

  /* Full site address, no trailing slash, e.g. "https://www.aurnajewellery.com" [DECIDE] */
  siteUrl: "https://aurna.co",

  /* WhatsApp Business number: digits only, with country code, e.g. "919800000000" [CONFIRM] */
  whatsappNumber: "",

  /* Footer contact details [CONFIRM]. Empty = not shown. */
  email: "",
  phone: "",          // as displayed, e.g. "+91 98000 00000"
  instagramUrl: "https://www.instagram.com/aurna.jewellery/",
  threadsUrl: "https://www.threads.com/@aurna.jewellery",
  youtubeUrl: "https://www.youtube.com/@Aurna.Jewellery",

  /* Business identity for the footer bottom row [DECIDE]. Empty = not shown. */
  legal: {
    entityName: "",
    gstin: "",
    address: ""
  },

  /*
   * Where every form is sent (POST, JSON body). Must deliver to a
   * monitored inbox or CRM (Blueprint 8.1). Works with Formspree,
   * Basin, Getform, a Google Apps Script web app or your own API.
   * Example: "https://formspree.io/f/xxxxxxx"
   * While empty, forms show the "couldn't be sent" message.
   */
  formEndpoint: "",

  /* Privacy notice linked from every consent checkbox. Must exist before launch. */
  privacyUrl: "/privacy/",

  /*
   * Footer policy links. Add each one only after it has been
   * reviewed and published, e.g. { label: "Privacy", url: "/privacy/" }
   */
  policies: [
    { label: "Privacy", url: "/privacy/" },
    { label: "Refunds", url: "/refunds/" },
    { label: "Shipping", url: "/shipping/" },
    { label: "Service terms", url: "/service-terms/" }
  ],

  /*
   * Inner pages that are live. Until a page is listed here, homepage
   * links point to the matching homepage section (or are hidden).
   * Add as pages launch: "/collections/", "/customise/", "/the-science/",
   * "/our-approach/", "/about/", "/trade-partnership/", "/request-trade-catalogue/", "/contact/"
   */
  livePages: ["/collections/", "/customise/", "/the-science/", "/our-approach/", "/about/", "/request-trade-catalogue/", "/contact/", "/trade-partnership/",
    "/collections/rings/", "/collections/earrings/", "/collections/pendants/", "/collections/necklaces/", "/collections/bracelets/", "/collections/everyday-essentials/"],

  /*
   * Reference-image uploads on the Customise page (Blueprint 9.3: only where
   * they can be handled securely). Turn on only if formEndpoint accepts file
   * uploads (multipart/form-data), e.g. a paid Formspree plan. While off, the
   * upload field is replaced by a note offering WhatsApp instead.
   */
  uploads: { enabled: false, maxFiles: 3, maxSizeMB: 5 },

  /* Trade enquiry form options [DECIDE] */
  offerLooseStones: false,
  volumeRanges: [],   // e.g. ["Up to 25 pieces", "25–100 pieces", "100+ pieces"]

  /*
   * Hero photograph (design.md 6.4, 7.1): one real product, gold or
   * platinum leading, 4:5, under 200 KB on mobile. Paths relative to the site root.
   */
  heroImage: {
    src: "img/hero/hero-portrait.jpg",   // from "Radiant Ring Close-Up Portrait.png", 1000 x 1000 px, 128 KB
    srcset: "",
    width: 1000,
    height: 1000,
    alt: "Woman wearing a yellow-gold ring with a round laboratory-grown diamond on a stone-set band, and round stud earrings"
  },

  /*
   * PREVIEW-ONLY stand-in photographs (Unsplash licence, not AURNA pieces).
   * Used only while preview is true, and only where no real photograph is set
   * above or below. They can never appear on the live site.
   * Delete img/preview/ once real photography is in place.
   */
  previewImages: {
    hero: "img/preview/hero.webp",   /* not shown while heroImage.src above is set */
    collections: {
      "rings":               "img/preview/rings-card.jpg",
      "earrings":            "img/preview/earrings-card.jpg",
      "pendants":            "img/preview/pendants-card.jpg",
      "necklaces":           "img/preview/necklaces-card.jpg",
      "bracelets":           "img/preview/bracelets-card.jpg",
      "everyday-essentials": "img/preview/everyday-essentials-card.jpg"
    },
    products: [
      "img/preview/product-1.webp",
      "img/preview/product-2.webp",
      "img/preview/product-3.webp",
      "img/preview/product-4.webp",
      "img/preview/product-5.webp",
      "img/preview/product-6.webp"
    ],
    /* Stand-in photos rotated through the 12 preview samples on each collection page */
    byCategory: {
      "rings":               ["img/preview/rings-card.jpg", "img/preview/product-1.webp", "img/preview/product-2.webp", "img/preview/product-4.webp", "img/preview/product-5.webp", "img/preview/hero.webp"],
      "earrings":            ["img/preview/earrings-card.jpg", "img/preview/everyday-essentials-card.jpg"],
      "pendants":            ["img/preview/pendants-card.jpg", "img/preview/product-3.webp"],
      "necklaces":           ["img/preview/necklaces-card.jpg", "img/preview/product-6.webp"],
      "bracelets":           ["img/preview/bracelets-card.jpg"],
      "everyday-essentials": ["img/preview/everyday-essentials-card.jpg", "img/preview/earrings-card.jpg", "img/preview/product-3.webp"]
    }
  },

  /* Collection card photographs, 4:5, product on white. Empty = card hidden on the live site. */
  collections: {
    "rings":               { src: "img/collections/rings.jpg", alt: "Six-prong solitaire ring in yellow gold with a round laboratory-grown diamond and a stone-set band" },
    "earrings":            { src: "", alt: "" },
    "pendants":            { src: "", alt: "" },
    "necklaces":           { src: "", alt: "" },
    "bracelets":           { src: "", alt: "" },
    "everyday-essentials": { src: "", alt: "" }
  },

  /*
   * Products: real designs, every value confirmed by the owner.
   *  category:     "rings", "earrings", "pendants", "necklaces", "bracelets" or "everyday-essentials"
   *  code:         <collection letters>-<style>-<number>, e.g. AR-SOL-01 (AURNA Ring, Solitaire, 01).
   *                Prefixes: AR rings, AE earrings, AP pendants, AN necklaces, AB bracelets, AX Everyday Essentials.
   *  name:         "The <Shape> <Style>", e.g. "The Round Six-Prong Solitaire", "The Oval Halo",
   *                "The Emerald-Cut Tennis Bracelet". Keep every new design to this pattern.
   *  description:  one plain sentence: the stone, how it is set, and the metal. No adjectives that can't be checked.
   *  shape:        "Round"            -> "Round laboratory-grown diamond"
   *  carat:        "1 ct" or "1 ct onwards"
   *  caratBasis:   "centre stone" or "total weight" (always state which)
   *  metal:        "14K yellow gold", "14K or 18K gold", "PT950 platinum", "925 sterling silver"
   *  availability: "Ready stock", "Made-to-order" or "" (only where confirmed)
   *  metals:       colour dots, only metals actually offered: "yellow", "white", "rose", "platinum", "silver"
   *  images:       hero (45° view), top, side: 1:1, on white, in img/products/
   *  alt:          description used for all views; the view name is added automatically
   *
   * Entries marked sample: true (codes numbered 21 and up) are for layout review only and are removed
   * automatically when preview is false. Replace them with real designs.
   */
  products: [
    {
      category: "rings", code: "AR-SOL-01",
      name: "The Round Six-Prong Solitaire",
      description: "A round laboratory-grown diamond held in a classic six-prong crown on a plain polished band. Shown in 14K yellow gold. Available in 9K, 14K and 18K gold, in yellow, rose and white.",
      shape: "Round", carat: "1 ct", caratBasis: "centre stone", metal: "9K, 14K or 18K gold",
      availability: "", metals: ["yellow", "rose", "white"],
      images: {
        hero: "img/products/rings/AR-SOL-01/ar-sol-01-45.jpg",
        top:  "img/products/rings/AR-SOL-01/ar-sol-01-top.jpg",
        side: "img/products/rings/AR-SOL-01/ar-sol-01-side.jpg"
      },
      alt: "Six-prong solitaire ring in 14K yellow gold with a 1 ct round laboratory-grown diamond"
    },
    {
      category: "rings", code: "AR-SOL-02",
      name: "The Round Leaf-Vine Solitaire",
      description: "A round laboratory-grown diamond in a six-prong setting, on a twisted vine band set with marquise laboratory-grown diamond leaves. Shown in 14K yellow gold. Available in 9K, 14K and 18K gold, in yellow, rose and white.",
      shape: "Round", carat: "2 ct", caratBasis: "centre stone", metal: "9K, 14K or 18K gold",
      availability: "", metals: ["yellow", "rose", "white"],
      images: {
        hero: "img/products/rings/AR-SOL-02/ar-sol-02-45.jpg",
        top:  "img/products/rings/AR-SOL-02/ar-sol-02-top.jpg",
        side: "img/products/rings/AR-SOL-02/ar-sol-02-side.jpg"
      },
      alt: "Solitaire ring in 14K yellow gold with a 2 ct round laboratory-grown diamond on a twisted band set with marquise accent stones"
    },
    {
      category: "rings", code: "AR-SOL-03",
      name: "The Pear Five-Prong Solitaire",
      description: "A pear-shaped laboratory-grown diamond held by five prongs, with a V-prong protecting the point, on a plain polished band. Shown in 14K yellow gold. Available in 9K, 14K and 18K gold, in yellow, rose and white.",
      shape: "Pear", carat: "2 ct", caratBasis: "centre stone", metal: "9K, 14K or 18K gold",
      availability: "", metals: ["yellow", "rose", "white"],
      images: {
        hero: "img/products/rings/AR-SOL-03/ar-sol-03-side.jpg",
        top:  "img/products/rings/AR-SOL-03/ar-sol-03-top.jpg",
        side: "img/products/rings/AR-SOL-03/ar-sol-03-45.jpg"
      },
      viewLabels: { hero: "45° view", top: "Front view", side: "45° view, white-gold prongs" },
      alt: "Five-prong solitaire ring in 14K yellow gold with a 2 ct pear-shaped laboratory-grown diamond"
    },
    {
      category: "rings", code: "AR-HAL-01",
      name: "The Round Halo",
      description: "A round laboratory-grown diamond in a four-prong setting, framed by a halo of smaller laboratory-grown diamonds, on a pavé-set band. Shown in 14K yellow gold. Available in 9K, 14K and 18K gold, in yellow, rose and white.",
      shape: "Round", carat: "1 ct", caratBasis: "centre stone", metal: "9K, 14K or 18K gold",
      availability: "", metals: ["yellow", "rose", "white"],
      images: {
        hero: "img/products/rings/AR-HAL-01/main.jpg",
        top:  "img/products/rings/AR-HAL-01/top.jpg",
        side: "img/products/rings/AR-HAL-01/side.jpg"
      },
      alt: "Halo ring in 14K yellow gold with a 1 ct round laboratory-grown diamond and a pavé-set band"
    },
    {
      category: "rings", code: "AR-HAL-02",
      name: "The Pear Halo",
      description: "A pear-shaped laboratory-grown diamond framed by a halo of smaller stones, above an open scrollwork gallery, with stone-set shoulders. Shown in 14K yellow gold. Available in 9K, 14K and 18K gold, in yellow, rose and white.",
      shape: "Pear", carat: "2 ct", caratBasis: "centre stone", metal: "9K, 14K or 18K gold",
      availability: "", metals: ["yellow", "rose", "white"],
      images: {
        hero: "img/products/rings/AR-HAL-02/ar-hal-02-45.jpg",
        top:  "img/products/rings/AR-HAL-02/ar-hal-02-front.jpg",
        side: "img/products/rings/AR-HAL-02/ar-hal-02-side.jpg"
      },
      viewLabels: { top: "Profile view" },
      alt: "Halo ring in 14K yellow gold with a 2 ct pear-shaped laboratory-grown diamond, scrollwork gallery and stone-set shoulders"
    },

    /* ---------- Earrings (img/products/earring/<code>/) ---------- */
    {
      category: "earrings", code: "ER-SOL-01",
      name: "The Round Four-Prong Studs",
      description: "A pair of round laboratory-grown diamonds, each held by four prongs in a basket setting on a post, shown in 14K yellow gold.",
      shape: "Round", carat: "1 ct", caratBasis: "each", metal: "14K yellow gold",
      availability: "", metals: ["yellow"],
      images: { hero: "img/products/earring/ER-SOL-01/main.jpg", top: "img/products/earring/ER-SOL-01/side.jpg", side: "img/products/earring/ER-SOL-01/model.jpg" },
      viewLabels: { hero: "Front view", top: "Side view", side: "On the model" },
      alt: "Four-prong stud earrings in 14K yellow gold with 1 ct round laboratory-grown diamonds"
    },
    {
      category: "earrings", code: "ER-SOL-02",
      name: "The Round Six-Prong Studs",
      description: "A pair of round laboratory-grown diamonds, each held by six white-gold prongs on a yellow-gold post, shown in 14K gold.",
      shape: "Round", carat: "2 ct", caratBasis: "each", metal: "14K yellow and white gold",
      availability: "", metals: ["yellow", "white"],
      images: { hero: "img/products/earring/ER-SOL-02/main.jpg", top: "img/products/earring/ER-SOL-02/side.jpg", side: "img/products/earring/ER-SOL-02/model.jpg" },
      viewLabels: { hero: "Front view", top: "Side view", side: "On the model" },
      alt: "Six-prong stud earrings in 14K gold with 2 ct round laboratory-grown diamonds"
    },
    {
      category: "earrings", code: "ER-SOL-03",
      name: "The Pear Studs",
      description: "A pair of pear-shaped laboratory-grown diamonds in prong-set baskets on posts, shown in yellow gold.",
      shape: "Pear", carat: "", caratBasis: "", metal: "Yellow gold",
      availability: "", metals: ["yellow"],
      images: { hero: "img/products/earring/ER-SOL-03/main.jpg", side: "img/products/earring/ER-SOL-03/model.jpg" },
      viewLabels: { hero: "Front and side view", side: "On the model" },
      alt: "Pear-shaped laboratory-grown diamond stud earrings in yellow gold"
    },
    {
      category: "earrings", code: "ER-HAL-01",
      name: "The Cushion-Cut Halo Studs",
      description: "A pair of cushion-cut laboratory-grown diamonds, each framed by a halo of smaller laboratory-grown diamonds, on screw-back posts, shown in yellow and white gold.",
      shape: "Cushion", carat: "", caratBasis: "", metal: "Yellow and white gold",
      availability: "", metals: ["yellow", "white"],
      images: { hero: "img/products/earring/ER-HAL-01/main.jpg", side: "img/products/earring/ER-HAL-01/model.jpg" },
      viewLabels: { hero: "Front and side view", side: "On the model" },
      alt: "Cushion-cut halo stud earrings with laboratory-grown diamonds"
    },
    {
      category: "earrings", code: "ER-PEA-01",
      name: "The Pear Drop Earrings",
      description: "A round laboratory-grown diamond stud with a pear-shaped laboratory-grown diamond drop below it, on screw-back posts, shown in yellow gold.",
      shape: "Pear", carat: "", caratBasis: "", metal: "Yellow gold",
      availability: "", metals: ["yellow"],
      images: { hero: "img/products/earring/ER-PEAR-01/main.jpg", side: "img/products/earring/ER-PEAR-01/model.jpg" },
      viewLabels: { hero: "Front and side view", side: "On the model" },
      alt: "Drop earrings in yellow gold with a round laboratory-grown diamond above a pear-shaped laboratory-grown diamond"
    },

    /* ---------- Necklaces (img/products/necklace/<folder>/) ---------- */
    {
      category: "necklaces", code: "NK-SOL-01",
      name: "The Round Tennis Necklace",
      description: "A continuous line of round laboratory-grown diamonds, each prong-set, shown in white gold.",
      shape: "Round", carat: "", caratBasis: "", metal: "White gold",
      availability: "", metals: ["white"],
      images: { hero: "img/products/necklace/AR-SOL-01/main.jpg", side: "img/products/necklace/AR-SOL-01/model.jpg" },
      viewLabels: { hero: "Full view", side: "On the model" },
      alt: "Tennis necklace in white gold with round laboratory-grown diamonds"
    },
    {
      category: "necklaces", code: "NK-SOL-02",
      name: "The Pear-Drop Tennis Necklace",
      description: "A line of round laboratory-grown diamonds with a single pear-shaped laboratory-grown diamond at the centre, shown in yellow gold.",
      shape: "Round", carat: "", caratBasis: "", metal: "Yellow gold",
      availability: "", metals: ["yellow"],
      images: { hero: "img/products/necklace/AR-SOL-02/main.jpg", side: "img/products/necklace/AR-SOL-02/model.jpg" },
      viewLabels: { hero: "Full view", side: "On the model" },
      alt: "Tennis necklace in yellow gold with round laboratory-grown diamonds and a pear-shaped laboratory-grown diamond drop"
    },

    /* ---------- Pendants (img/products/pendants/<code>/) ---------- */
    {
      category: "pendants", code: "PD-SOL-01",
      name: "The Round Solitaire Pendant",
      description: "A round laboratory-grown diamond held by six prongs below a V-shaped bail, on a fine chain, shown in yellow gold.",
      shape: "Round", carat: "", caratBasis: "", metal: "Yellow gold",
      availability: "", metals: ["yellow"],
      images: { hero: "img/products/pendants/PD-SOL-01/main.jpg", side: "img/products/pendants/PD-SOL-01/model.jpg" },
      viewLabels: { hero: "Front view", side: "On the model" },
      alt: "Six-prong solitaire pendant in yellow gold with a round laboratory-grown diamond"
    },
    {
      category: "pendants", code: "PD-EMR-02",
      name: "The Emerald-Cut Halo Pendant",
      description: "An emerald-cut laboratory-grown diamond framed by a halo of smaller laboratory-grown diamonds, below a stone-set bail, shown in yellow gold.",
      shape: "Emerald", carat: "", caratBasis: "", metal: "Yellow gold",
      availability: "", metals: ["yellow"],
      images: { hero: "img/products/pendants/PD-EMR-02/main.jpg", side: "img/products/pendants/PD-EMR-02/model.jpg" },
      viewLabels: { hero: "Front view", side: "On the model" },
      alt: "Halo pendant in yellow gold with an emerald-cut laboratory-grown diamond"
    },
    {
      category: "pendants", code: "PD-OVA-01",
      name: "The Oval Halo Pendant",
      description: "An oval laboratory-grown diamond framed by a halo of smaller laboratory-grown diamonds, below a stone-set bail, shown in yellow gold.",
      shape: "Oval", carat: "", caratBasis: "", metal: "Yellow gold",
      availability: "", metals: ["yellow"],
      images: { hero: "img/products/pendants/PD-OVA-01/main.jpg", side: "img/products/pendants/PD-OVA-01/model.jpg" },
      viewLabels: { hero: "Front view", side: "On the model" },
      alt: "Halo pendant in yellow gold with an oval laboratory-grown diamond"
    },
    { sample: true, category: "rings", code: "AR-HAL-21", name: "The Cushion-Cut Halo", description: "A cushion-cut laboratory-grown diamond framed by a halo of smaller stones, in 14K or 18K gold.", shape: "Cushion", carat: "1 ct onwards", caratBasis: "centre stone", metal: "14K or 18K gold", availability: "Ready stock", metals: ["yellow", "white", "rose"], images: {}, alt: "" },
    { sample: true, category: "rings", code: "AR-TRI-21", name: "The Oval Three-Stone", description: "An oval laboratory-grown diamond between two smaller stones, in 18K gold.", shape: "Oval", carat: "0.50 ct", caratBasis: "total weight", metal: "18K gold", availability: "Made-to-order", metals: ["yellow", "white"], images: {}, alt: "" },
    { sample: true, category: "pendants", code: "AP-HAL-21", name: "The Round Halo Pendant", description: "A round laboratory-grown diamond framed by smaller stones, in 9K or 14K gold.", shape: "Round", carat: "0.25 ct", caratBasis: "total weight", metal: "9K or 14K gold", availability: "Ready stock", metals: ["yellow", "rose"], images: {}, alt: "" },
    { sample: true, category: "rings", code: "AR-SOL-21", name: "The Pear Solitaire", description: "A pear-shaped laboratory-grown diamond in a slim solitaire setting, in PT950 platinum.", shape: "Pear", carat: "0.75 ct", caratBasis: "centre stone", metal: "PT950 platinum", availability: "", metals: ["platinum"], images: {}, alt: "" },
    { sample: true, category: "rings", code: "AR-ETB-21", name: "The Round Eternity Band", description: "Round laboratory-grown diamonds set all the way around a slim band, in 14K or 18K gold.", shape: "Round", carat: "2 ct", caratBasis: "total weight", metal: "14K or 18K gold", availability: "Made-to-order", metals: ["yellow", "white"], images: {}, alt: "" },
    { sample: true, category: "necklaces", code: "AN-STA-21", name: "The Emerald-Cut Station Necklace", description: "Emerald-cut laboratory-grown diamonds spaced along a fine chain, in 925 sterling silver.", shape: "Emerald", carat: "0.10 ct", caratBasis: "total weight", metal: "925 sterling silver", availability: "Ready stock", metals: ["silver"], images: {}, alt: "" }
  ]
};
