(() => {
  "use strict";

  if (!window.onKwcWebComponentLoaded) {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const loadCustomElementScript = new Promise((resolve, reject) => {
      const supportsCustomElementsV1 = "customElements" in window;
      if (!supportsCustomElementsV1) {
        loadScript("../../custom-elements/custom-elements.min.js")
          .then(resolve)
          .catch(reject);
      } else {
        resolve();
      }
    });

    const loadShadowDomScript = new Promise((resolve, reject) => {
      const supportsShadowDOMV1 = !!HTMLElement.prototype.attachShadow;
      if (!supportsShadowDOMV1) {
        loadScript("../../shadydom/shadydom.min.js")
          .then(() => loadScript("../../shadycss/shadycss.min.js"))
          .then(resolve)
          .catch(reject);
      } else {
        resolve();
      }
    });

    window.onKwcWebComponentLoaded = Promise.all([loadCustomElementScript, loadShadowDomScript]);
  }
})();