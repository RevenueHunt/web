# PRD — revenuehunt.com HSTS preload submission

**Audience:** RevenueHunt team member owning revenuehunt.com infrastructure / DNS.
**Author:** Alex Diaz / Claude — drafted 2026-06-01.
**Source:** MetricSpot audit `17182`, 2026-06-01 (total 83). Report: https://app.metricspot.com/audits/17182 — PDF in `~/Downloads/revenuehunt.com-audit.pdf`. Failing check: `technical.hsts_preloaded` ("Domain is not on the HSTS preload list").
**Goal:** Get `revenuehunt.com` onto the Chromium HSTS preload list so the first `http://` request never leaves the browser. Closes `technical.hsts_preloaded`.
**Priority:** P1. Low effort, but the submit step is **near-irreversible** (removal takes months), so it needs a deliberate pre-flight, not a casual click.

---

## 0. Why this isn't "just code"

The HSTS *response header* is already correct and shipped. Preload is a one-time **registration** at https://hstspreload.org that bakes HTTPS-only into the browser binary itself. Once accepted and rolled into a Chrome release, **every** `*.revenuehunt.com` subdomain is HTTPS-only for all preload-list browsers, and you cannot quickly undo it.

Per the standing rule (`feedback_no_browser_automation`), the final submission is **Alex driving the browser, guided click-by-click** — not automated.

## 1. Current state (verified 2026-06-01)

- Apex header: `strict-transport-security: max-age=31536000; includeSubDomains; preload` — served via `public/_headers`, deployed through Cloudflare. ✓ meets the preload minimum (max-age ≥ 31536000, `includeSubDomains`, `preload` all present).
- HTTP → HTTPS redirect: ✓ (audit `technical.http_redirects_to_https` passes).
- Subdomain HTTPS reachability:
  | Subdomain | HTTPS | Note |
  |---|---|---|
  | `admin.revenuehunt.com` | 200 ✓ | App — fine |
  | `docs.revenuehunt.com` | 200 ✓ | Help center — fine |
  | `web.revenuehunt.com` | **no response (000)** | Staging host — see risk §3 |
  | `www.revenuehunt.com` | **no response (000)** | Does not serve HTTPS — see risk §3 |

## 2. Steps

1. **(Optional, code) Bump max-age to 2 years.** In `public/_headers`, change `max-age=31536000` → `max-age=63072000` on the `Strict-Transport-Security` line. The audit recommends 2 years; the preload list only requires 1, so this is best-practice polish, not a blocker. Push → Cloudflare deploys → re-verify the live header.
2. **Pre-flight every subdomain (blocker — do this first).** Enumerate every `*.revenuehunt.com` host that exists in DNS (Cloudflare dashboard). Confirm each either (a) serves valid HTTPS, or (b) is safe to become HTTPS-only. `includeSubDomains` + preload makes **all** of them HTTPS-only with no per-host opt-out.
3. **Resolve the `www` and `web` gaps (§3).**
4. **Submit at https://hstspreload.org** (Alex, guided): enter `revenuehunt.com`, confirm the eligibility checklist is all-green, accept the consequences, submit.
5. **Record** the submission date here and in the next checklist. Expect **weeks** before it lands in a stable Chrome release and the audit check flips.

## 3. Risks / blockers

- **`www.revenuehunt.com` does not serve HTTPS (000).** If anything ever links to `www.`, preload forces it to HTTPS and it will hard-fail. Either point `www` at the apex over HTTPS (Cloudflare CNAME + redirect to apex) **before** submitting, or confirm `www` is genuinely unused and will stay that way.
- **`web.revenuehunt.com` staging (000).** If staging is served HTTP-only or intermittently, preload breaks access to it from preload-list browsers. Confirm staging is HTTPS, or rename it off the `revenuehunt.com` zone, before submitting.
- **Irreversibility.** Removal from the preload list takes months to propagate. Treat submission as one-way. Do not submit until §2–§3 are all-clear.

## 4. Acceptance

- All in-use `*.revenuehunt.com` subdomains serve valid HTTPS.
- `revenuehunt.com` accepted at hstspreload.org (status: "pending inclusion" → later "preloaded").
- A later MetricSpot audit shows `technical.hsts_preloaded` passing (allow weeks for Chromium rollout).
