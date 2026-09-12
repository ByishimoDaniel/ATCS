# ATCS Company Ltd website

Professional website for **ATCS Company Ltd**, a technology and digital services business in Gisenyi, Rubavu, Rwanda.

Built with Next.js, TypeScript and Tailwind CSS.

## 1. How to run it locally

1. Install [Node.js LTS](https://nodejs.org/) (includes npm).
2. Open a terminal in this folder (`ATCSLDT`).
3. Install dependencies (already done if this project was set up for you):

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000).

To create a production build on your computer:

```bash
npm run build
npm start
```

## 2. How to change the business information

Edit `src/data/company.ts`.

That file controls:

- Business name
- Location and map links
- Email and phone numbers
- WhatsApp number (`whatsapp.e164` must be country code + number with no `+` or spaces, for example `250796189550`)
- Mission and vision
- Social media URLs (leave empty until you have real profile links)

Navigation labels live in `src/data/content.ts`.
Service titles and descriptions live in `src/data/services.ts`.

## 3. How to add or edit products

Edit `src/data/products.ts`.

Each product uses this shape:

- `id`: unique slug, used in contact links
- `name`: product name
- `category`: one of the listed categories
- `description`: short text
- `price`: a string such as `"25,000 RWF"`, or `null` to show **Contact for price**
- `availability`: currently `"contact"` (the cards show **Ask about availability**)
- `image`: path under `public/`, for example `/images/products/laptops.svg`

Add a new object to the `products` array. No other files need to change unless you add a new category — then also update `productCategories`.

## 4. How to change images

- **Favicon / logo mark:** `public/favicon.svg` and the logo component in `src/components/Logo.tsx`
- **Product images:** files in `public/images/products/`. Replace an SVG with a JPG/PNG/WebP of the same name, or point `image` in `src/data/products.ts` to a new file such as `/images/products/my-laptop.jpg`
- Put new files in `public/` and reference them with a path starting at `/`

The hero uses a built-in illustration in `src/components/Hero.tsx`, not a photo file.

## 5. How to deploy it online

A simple option is [Vercel](https://vercel.com), which works well with Next.js:

1. Create a GitHub (or similar) repository and push this project.
2. Sign in at [vercel.com](https://vercel.com) and import the repository.
3. Set environment variables if you use them (`NEXT_PUBLIC_SITE_URL`, `FORMSPREE_FORM_ID`).
4. Deploy. Vercel will give you a URL such as `https://atcsldt.vercel.app`.

Other hosts that support Next.js (Netlify, Cloudflare Pages, a Node server) also work. After deploy, set `NEXT_PUBLIC_SITE_URL` to your live URL so SEO tags and the sitemap use the correct domain.

## 6. How to connect a custom domain

On Vercel:

1. Open the project → **Settings** → **Domains**.
2. Add your domain (for example `www.atcscompanyltd.com`).
3. At your domain registrar, add the DNS records Vercel shows (usually an A record or CNAME).
4. Wait for DNS to update, then set `NEXT_PUBLIC_SITE_URL` to `https://your-domain` and redeploy.

The same idea applies on other hosts: point DNS at the host, then set the public site URL.

## 7. How to configure the contact form

The form posts to `/api/contact`.

**Until an email service is connected:** a successful submit opens a mail draft to `atcscompanyltd@gmail.com`. Customers can also use the WhatsApp button or phone numbers.

**To receive submissions in your inbox without using the visitor’s email app:**

1. Create a free form at [Formspree](https://formspree.io).
2. Copy the form id (the part after `/f/` in the Formspree URL).
3. Create a `.env.local` file in this folder:

```
FORMSPREE_FORM_ID=yourFormIdHere
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Restart `npm run dev`.
5. Add the same `FORMSPREE_FORM_ID` in your host’s environment variables before deploying.

Do not commit `.env.local`. `.env.example` is a template only.

## Scripts

| Command        | Purpose                |
| -------------- | ---------------------- |
| `npm run dev`  | Local development      |
| `npm run build`| Production build       |
| `npm start`    | Run the production app |
| `npm run lint` | Lint the project       |
