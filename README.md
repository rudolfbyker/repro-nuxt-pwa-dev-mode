# Reproduction for bug with Nuxt PWA in development mode

## Steps to reproduce

1. `yarn`
2. `yarn nuxt dev`
3. Clear site data for `localhost:3000` in your browser, or use incognito mode.
4. Open a new tab.
5. Open dev tools in the same tab and go to Application -> Service Workers.
6. Open http://localhost:3000/dev in the same tab.
7. Observe that it shows "dev" on the page.
8. Observe that the service worker gets installed.
9. Click the address bar, don't change the URL, and press enter.
10. Observe the bug: Get redirected to http://localhost:3000/ and see "index" instead of "dev" on the page.
11. Unregister the service worker.
12. Change the address back to http://localhost:3000/dev and press enter.
13. Repeat from step 7 ...
