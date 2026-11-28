# AURNA Jewellery website (soft launch)

A static site built to *design.md*, the *Website Blueprint* and *Content & Copy* (all in `guidelines/`). The homepage and all seven inner pages are built. Four policy pages (privacy, refunds, shipping, service terms) are written as **drafts for legal review**. It's plain HTML, CSS and JavaScript, with no build step, and runs on any static host.

## Files

| Path | What it is |
|---|---|
| `index.html` | The homepage |
| `collections/` | The Collections hub, linking to one page per collection: `collections/rings/`, `earrings/`, `pendants/`, `necklaces/`, `bracelets/`, `everyday-essentials/` |
| `privacy/`, `refunds/`, `shipping/`, `service-terms/` | Policy pages. **Drafts:** each shows a "Draft for legal review" notice while preview is on. Have them reviewed by a lawyer before launch. |
| `about/` | About us and Our philosophy |
| `customise/`, `the-science/`, `our-approach/`, `request-trade-catalogue/`, `contact/`, `trade-partnership/` | Inner pages, each an `index.html` at its Blueprint URL. Trade Partnership follows `guidelines/AURNA_Page_Trade_Partnership.md`. |
| `css/styles.css` | All styles. Tokens at the top match design.md Section 3 and 5. |
| `js/site-config.js` | **Every business fact the page needs.** Edit this file, not the HTML. |
| `js/main.js` | Forms, Enquire panel, mobile menu, WhatsApp links, product cards (all pages) |
| `img/logo/` | The AURNA logo kit: `aurna-logo.svg` (header, footer, menu), reversed and single-colour versions, the star mark, favicons and app icons. See `img/logo/README.md`. |
| `favicon.ico` | Copy of `img/logo/favicon.ico` at the site root, because browsers request `/favicon.ico` automatically |
| `404.html`, `robots.txt`, `sitemap.xml` | Hosting and SEO files |
| `guidelines/` | Internal documents. **Never upload this folder.** |

## Preview locally

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .claude/serve.ps1 -Port 8080
```

Then open http://localhost:8080. This uses a small PowerShell file server, so you don't need Python or Node. Preview mode is on, so a banner, sample products and grey image frames are shown.

## Shared header and footer

Every page carries its own copy of the header, footer, mobile menu, Enquire panel and catalogue band, so pages work without a build step. **If you change any of these, change them on every page.** The inner pages were generated from the homepage's versions, with links made absolute (`/#trade` instead of `#trade`).

## How the site avoids placeholder data

`js/site-config.js` holds the contact details, photographs, products and form endpoint. Anything left empty is **hidden** on the live site, never faked:

- **No WhatsApp number:** WhatsApp links and the floating button are removed.
- **No photograph:** that collection card is removed. Products need a real 45° photograph and must not be marked `sample`.
- **Collection pages:** each product needs a `category` (`rings`, `earrings`, `pendants`, `necklaces`, `bracelets` or `everyday-essentials`). A collection page lists every real product in its category. In preview, it is topped up to 12 labelled samples (codes like `SAMPLE-RG-01`) using the stand-in photos in `previewImages.byCategory`. On the live site, a collection with no real designs shows a short "being added" note with an enquiry link instead.

## Adding a design

1. Export three square views (1:1, on white): the 45° angle, the top view and the side view. Save them as JPEG or WebP, about 800 px and under 100 KB each, in `img/products/` named `<code>-45.jpg`, `<code>-top.jpg` and `<code>-side.jpg` (for example `ar-sol-01-45.jpg`).
2. Add an entry to `products` in `js/site-config.js`, following the naming convention described there:
   - **Code:** `AR-SOL-01` = AURNA Ring, Solitaire, 01. Prefixes: AR rings, AE earrings, AP pendants, AN necklaces, AB bracelets, AX Everyday Essentials.
   - **Name:** "The <Shape> <Style>", for example "The Round Six-Prong Solitaire" or "The Oval Halo".
   - **Description:** one plain sentence covering the stone and how it's set, then "Shown in <metal pictured>. Available in 9K, 14K and 18K gold, in yellow, rose and white."
3. The design appears on its collection page and in the homepage's Selected designs.

Real designs so far (source photos in `img/preview/Ring/`):

| Code | Name | Views |
|---|---|---|
| AR-SOL-01 | The Round Six-Prong Solitaire (1 ct) | 45°, top, side |
| AR-SOL-02 | The Round Leaf-Vine Solitaire (2 ct) | 45°, top, side |
| AR-SOL-03 | The Pear Five-Prong Solitaire (2 ct) | 45°, front, and a second 45° showing white-gold prongs (from `img/preview/Ring/Pear/`) |
| AR-HAL-01 | The Round Halo (1 ct) | 45°, top, side |
| AR-HAL-02 | The Pear Halo (2 ct) | 45°, profile, side (from `img/preview/Ring/Pear Halo/`) |
| ER-SOL-01 | The Round Four-Prong Studs (1 ct each) | front, side, on the model |
| ER-SOL-02 | The Round Six-Prong Studs (2 ct each) | front, side, on the model |
| ER-SOL-03 | The Pear Studs | front and side, on the model |
| ER-HAL-01 | The Cushion-Cut Halo Studs | front and side, on the model |
| ER-PEA-01 | The Pear Drop Earrings (folder `ER-PEAR-01`) | front and side, on the model |
| NK-SOL-01 | The Round Tennis Necklace (folder `necklace/AR-SOL-01`) | full view, on the model |
| NK-SOL-02 | The Pear-Drop Tennis Necklace (folder `necklace/AR-SOL-02`) | full view, on the model |
| PD-SOL-01 | The Round Solitaire Pendant | front, on the model |
| PD-EMR-02 | The Emerald-Cut Halo Pendant | front, on the model |
| PD-OVA-01 | The Oval Halo Pendant | front, on the model |

Product photos live in `img/products/<category>/<code>/` (listed in `reference/products.csv`). The web versions are `main.jpg`, `side.jpg` and `model.jpg`, 800 px square on white. The `main.png`, `side.png` and `top.png` files listed in the CSV are still the AURNA logo placeholder, so designs that only have those are not shown yet.

Any view can be left out of `images`; the card shows only the views it has. All five rings are shown in 14K yellow gold and offered in 9K, 14K and 18K yellow, rose and white gold. In preview, each collection page shows its real designs first, then samples up to 12. Preview samples use the same code pattern, numbered from 21 (config samples) and 31 (generated on collection pages), so they never clash with real designs. The homepage shows at most 8 designs, real ones first.
- **No email, phone or Instagram:** that line is left out of the footer.
- **No policies listed:** no policy links are shown.
- **Inner pages:** until a page is added to `livePages`, its links point to the matching homepage section, or are hidden if there isn't one (Our Approach, "Explore Trade Partnership", "Discover The Science").
- **`preview: true`:** sample products and grey frames are shown, with a banner. **Set it to `false` before launch.**

## Forms

Every form (catalogue request, trade enquiry, consumer enquiry, custom development, personal custom request) sends a JSON `POST` to `formEndpoint`. Each one validates in place, shows its confirmation in place, and includes consent and a honeypot spam field. Until `formEndpoint` is set, a submitted form shows the "couldn't be sent" message.

The endpoint must deliver to a **monitored inbox or CRM** (Blueprint 8.1). Formspree, Basin, Getform, a Google Apps Script web app or your own API all work. Turn on the service's own spam filtering or captcha as well: the honeypot only stops simple bots.

Every submission includes `form` (`catalogue_request`, `trade_enquiry`, `consumer_enquiry`, `custom_development` or `personal_custom_request`), `page` and `submitted_at`, plus the fields.

**Reference-image uploads** (Customise page) are off by default. Turn on `uploads.enabled` only if your endpoint accepts files (`multipart/form-data`) and stores them securely. With uploads on, a form with images attached is sent as multipart instead of JSON. While uploads are off, the field is replaced by a note offering WhatsApp.

## Before launch

### Configuration (`js/site-config.js`)
- [ ] `preview: false`
- [ ] `whatsappNumber`, `email`, `phone`, `instagramUrl` confirmed
- [ ] `formEndpoint` set; send a test from every form on every page and confirm it arrives
- [ ] The four policy pages reviewed and approved by a lawyer, including the DPDP Act wording in the privacy notice and the governing-law clause in the service terms
- [ ] Refund and shipping practice confirmed: the pages refer to each order's written confirmation for return windows, cancellation charges and delivery costs, so those must actually be stated there
- [ ] `policies` lists only approved policy pages (all four are listed now)
- [ ] `legal` entity name, GSTIN and address decided
- [ ] `heroImage`, all six `collections` photographs and 6–8 real `products` added (codes, names, carat values and availability confirmed by the owner)

### Brand files
- [x] Approved logo in place (`img/logo/aurna-logo.svg`)
- [x] Favicons and app icons in place
- [ ] Photographs exported as WebP or AVIF, hero under 200 KB on mobile, product images 1:1, collection images 4:5

### Claims that must be confirmed (Blueprint 7.3)
- [ ] **Proof strip:** "IGI certified" and "IGI certificate supplied with each stone". If not every stone is certified, change the label to "Laboratory-grown diamonds with IGI certificates".
- [ ] **Proof strip:** HUID on every gold piece; platinum and silver purity documented.
- [ ] **Quality card 2:** the documents supplied with each piece.
- [ ] **Trade partnership:** the four "How it works" steps match the real process.
- [ ] **Retailer support:** all four services exist. Delete any list item that doesn't.
- [ ] **The Science, "What comes with each piece":** the same IGI and HUID claim as the homepage.
- [ ] **The Science:** technical explanations (HPHT, CVD, 4Cs, IGI reports, BIS hallmarking) checked by someone qualified before launch.
- [ ] **Customise, "How requests are reviewed":** the four steps match the real process, including "work starts only after you approve".
- [ ] **Customise, "What can be customised":** rose and white gold, platinum and silver are all actually offered.
- [ ] **Our Approach:** the description of who AURNA works with is accurate.
- [ ] **About us:** the "Who we are" description and the four philosophy principles reflect how AURNA wants to describe itself.
- [ ] **Request Trade Catalogue, "What happens next":** the three steps match how requests are handled.
- [ ] **Trade Partnership FAQ 1:** any partner requirement, such as GST registration (still **[CONFIRM]** in the page document).
- [ ] **Trade Partnership FAQ 9:** whether samples or detailed specifications can be arranged (the default answer is published for now).
- [ ] **Certification wording across pages:** Trade Partnership says "IGI or SGL certificate for every solitaire" (owner-confirmed). The homepage proof strip and quality card, and The Science "What comes with each piece", still say "IGI certificate" for each stone. Align them.

### Domain and SEO
- [ ] **Replace `YOUR-DOMAIN` everywhere.** It appears in every page's canonical link, `og:url`, structured data, and in `robots.txt` and `sitemap.xml`. Run this once from the site folder, with your domain in place of `www.example.com`:

  ```powershell
  Get-ChildItem -Recurse -Include *.html,*.xml,*.txt -Exclude README.md | Where-Object { $_.FullName -notmatch '\\(guidelines|reference|\.claude)\\' } | ForEach-Object { $t = [IO.File]::ReadAllText($_.FullName); if ($t.Contains('YOUR-DOMAIN')) { [IO.File]::WriteAllText($_.FullName, $t.Replace('YOUR-DOMAIN', 'www.example.com'), (New-Object Text.UTF8Encoding $false)) } }
  ```

- [ ] Add a share image (1200 × 630 px, a real AURNA product photo) as `og:image` and `twitter:image` on each page, and switch `twitter:card` to `summary_large_image`
- [x] Homepage Organization data uses the logo PNG (`img/logo/aurna-logo-horizontal@2x.png`)
- [ ] Add the site to Google Search Console, submit the sitemap, and check the structured data with Google's Rich Results Test
- [ ] Analytics added only alongside a privacy disclosure

### SEO already in place
- A unique title (60 characters or fewer) and description (155 or fewer) on every page, all using "laboratory-grown diamond"
- One H1 per page, headings in order, alt text on every image
- Canonical link, Open Graph and Twitter card tags on every page
- Structured data: Organization and WebSite (homepage, with Instagram, Threads and YouTube), BreadcrumbList (every inner page) and FAQPage (Trade Partnership)
- `sitemap.xml` lists every indexable page with a last-modified date; `404.html` is `noindex`

### Fonts
The page loads the six approved font styles from Google Fonts. design.md 4.1 prefers self-hosting, which is faster and doesn't send visitor IPs to Google. To self-host, download the WOFF2 files, put them in `fonts/`, replace the Google Fonts `<link>` with `@font-face` rules using `font-display: swap`, and mention fonts in the privacy notice if you keep Google Fonts.

### Catalogue
- [ ] The updated Edition 01 catalogue (white background, "laboratory-grown diamond" wording) is ready before the catalogue form goes live (Blueprint 8.2).

## Deploying

Upload these files only: `index.html`, `404.html`, `robots.txt`, `sitemap.xml`, `css/`, `js/`, `img/`, and the seven page folders, including all of `collections/` and its subfolders (`collections/`, `customise/`, `the-science/`, `our-approach/`, `request-trade-catalogue/`, `contact/`, `trade-partnership/`) `about/`, and the four policy folders (`privacy/`, `refunds/`, `shipping/`, `service-terms/`). **Don't upload `guidelines/`, `.claude/`, `reference/`, `img/preview/` or this README.** `img/preview/` holds preview-only stand-in photos (see `img/preview/SOURCES.md`) that are never shown once `preview` is `false`.

- **Netlify or Cloudflare Pages:** drag and drop a folder that contains only the files above. Both serve `404.html` automatically.
- **Shared hosting (cPanel):** upload the files to `public_html/`. Add `ErrorDocument 404 /404.html` to `.htaccess`.
- Turn on HTTPS on the host.

## Adding pages later

1. Create the page at its URL, for example `privacy/index.html`, copying the header, footer and panels from an inner page.
2. If other pages should link to it, add its path to `livePages` in `js/site-config.js`.
3. Add the page to `sitemap.xml` and the upload list above.
