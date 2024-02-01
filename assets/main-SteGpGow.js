(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const r of t.addedNodes) r.tagName === 'LINK' && r.rel === 'modulepreload' && l(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
      t
    );
  }
  function l(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
})();
const h = 'modulepreload',
  p = function (n, o) {
    return new URL(n, o).href;
  },
  f = {},
  d = function (o, i, l) {
    let e = Promise.resolve();
    if (i && i.length > 0) {
      const t = document.getElementsByTagName('link');
      e = Promise.all(
        i.map((r) => {
          if (((r = p(r, l)), r in f)) return;
          f[r] = !0;
          const c = r.endsWith('.css'),
            m = c ? '[rel="stylesheet"]' : '';
          if (!!l)
            for (let a = t.length - 1; a >= 0; a--) {
              const u = t[a];
              if (u.href === r && (!c || u.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${r}"]${m}`)) return;
          const s = document.createElement('link');
          if (
            ((s.rel = c ? 'stylesheet' : h),
            c || ((s.as = 'script'), (s.crossOrigin = '')),
            (s.href = r),
            document.head.appendChild(s),
            c)
          )
            return new Promise((a, u) => {
              s.addEventListener('load', a),
                s.addEventListener('error', () => u(new Error(`Unable to preload CSS for ${r}`)));
            });
        }),
      );
    }
    return e
      .then(() => o())
      .catch((t) => {
        const r = new Event('vite:preloadError', { cancelable: !0 });
        if (((r.payload = t), window.dispatchEvent(r), !r.defaultPrevented)) throw t;
      });
  };
async function y() {
  if (document.querySelector('#test')) {
    const { default: n } = await d(() => import('./test-HkEA9561.js'), __vite__mapDeps([]), import.meta.url),
      o = new n(10, 10);
    console.log(o.area), console.log(n);
  }
  if (document.querySelector('#hello')) {
    const { default: n } = await d(() => import('./webcomponents-M3x7VAO9.js'), __vite__mapDeps([]), import.meta.url);
    customElements.define('hello-world', n);
  }
}
y();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
