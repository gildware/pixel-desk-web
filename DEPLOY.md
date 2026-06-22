# Production deploy (pixel-desk-web)

## Same-origin API proxy (recommended)

Set `NEXT_PUBLIC_USE_API_PROXY=true` so browser requests go to `/api/proxy/...` on your app host. The Next.js route handler forwards only allowlisted paths to `NEXT_PUBLIC_API_URL`.

This avoids cross-origin session cookie issues between the web app and API.

## Required build / runtime env

| Variable | Example | Purpose |
|----------|---------|---------|
| `NEXT_PUBLIC_API_URL` | `https://api.pixeldesk.in` | Upstream API (proxy target) |
| `NEXT_PUBLIC_USE_API_PROXY` | `true` | Enable `/api/proxy` in production |
| `NEXT_PUBLIC_BASE_URL` | `https://app.pixeldesk.in` | Server-side session checks via proxy |

## Docker build example

```bash
docker build --progress=plain \
  --build-arg NEXT_PUBLIC_API_URL=https://api.pixeldesk.in \
  --build-arg NEXT_PUBLIC_BASE_URL=https://app.pixeldesk.in \
  --build-arg NEXT_PUBLIC_USE_API_PROXY=true \
  -t pixel-desk-web:latest .
```

## Backend cookie domain

If the API sets `Domain=api.pixeldesk.in` on session cookies, the browser will not send them to your web app host. Prefer **`Domain=.pixeldesk.in`** (leading dot) so cookies work across subdomains, or omit `Domain` when using the proxy (cookie scoped to app host).

## HSTS

Enable `Strict-Transport-Security` at your TLS terminator (CDN / load balancer), not on plain HTTP nginx.
