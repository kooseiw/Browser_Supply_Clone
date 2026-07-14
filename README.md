# Browser.supply Clone

Landing page clone of [browser.supply](https://browser.supply/) using Next.js, TypeScript, and Tailwind. Content comes from JSON files in `src/common/data/`.

---

## Additional Questions

### 1. If you use JSON data, how would you structure it to support future scalability and maintainability?

I split content by section (`hero.json`, `pricing.json`, etc.) so changes stay small and easy to find. Each item has a clear `id` and consistent fields. Components only read the data — they don’t hardcode copy. Later, if we need a CMS or API, we can swap the data source without rewriting the UI.

### 2. If you decide to create your own API, which technology or framework would you use and why?

For this project I’d start with Next.js API routes, since everything is already in one app and easy to deploy. If the backend grows (auth, payments, more logic), I’d move to a separate Node/TypeScript API with a real database like PostgreSQL.

### 3. How would you configure a custom domain (for example, www.clientwebsite.com) to point to your deployed project on Vercel?

Add the domain in Vercel project settings, then set the DNS records they give you (usually a CNAME for `www`). After DNS updates, Vercel handles SSL automatically. I’d also set a redirect so either `www` or the root domain is the main one.

### 4. If your project requires an admin panel to manage the website content, what technologies and approaches would you choose?

For a marketing site, a headless CMS (like Sanity) is usually enough — editors update content without touching code. If we need a custom admin, I’d build protected pages in Next.js with auth, and store content in a database with a simple draft/publish flow.

### 5. What techniques would you use to ensure the website loads quickly even on slow internet connections?

Serve as much as possible as static pages, compress assets, and lazy-load heavy media like images and videos below the fold. Keep the first screen light, use `next/image`, and avoid loading big scripts too early.

### 6. If you implement a form, how would you securely send the data to the backend server?

Send data over HTTPS with a POST request. Validate again on the server (don’t trust the client), keep API keys on the server only, and add basic rate limiting or bot protection for public forms.

### 7. What strategies do you use to optimize images for performance without sacrificing quality?

Use `next/image` for resizing and modern formats, export assets at a reasonable size before upload, and lazy-load anything that’s not above the fold. Give images proper dimensions so the layout doesn’t jump while they load.
