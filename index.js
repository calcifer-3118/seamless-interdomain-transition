// seamless-portal-transition.js
// A lightweight function for smooth, inter-domain page transitions with customizable visuals

/**
 * Initiates a seamless visual transition before navigating to a new URL.
 *
 * @param {string} url - The destination URL to navigate to.
 * @param {Object} options - Optional configuration for the transition.
 * @param {string} [options.transitionType="fade"] - Type of transition (currently only "fade" is supported).
 * @param {number} [options.duration=1000] - Duration of the transition in milliseconds.
 * @param {string} [options.background="#000"] - Background color of the transition overlay.
 * @param {Function} [options.onBeforeNavigate] - Callback triggered just before navigation.
 */
export function transitionTo(url, options = {}) {
  const {
    transitionType = "fade",
    duration = 1000,
    background = "#000",
    onBeforeNavigate,
  } = options;

  if (!url || typeof url !== "string") {
    throw new Error("A valid URL string must be provided to transitionTo().");
  }

  // Create and style the overlay element
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${background};
    opacity: 0;
    z-index: 999999;
    pointer-events: none;
    transition: opacity ${duration}ms ease-in-out;
  `;

  document.body.appendChild(overlay);

  // Trigger animation frame to ensure transition applies
  requestAnimationFrame(() => {
    overlay.style.opacity = "1";
    setTimeout(() => {
      if (typeof onBeforeNavigate === "function") {
        onBeforeNavigate();
      }
      window.location.href = url;
    }, duration);
  });
}

// Future: support additional transition types (e.g., slide, zoom, wipe) for more expressive navigation.
