import { useLayoutEffect, useState } from 'react';

/**
 * useFooterHeight - a custom hook that tracks the height of a referenced footer element.
 *
 * It listens for changes using ResizeObserver and window resize events.
 * Returns the current pixel height of the footer, which updates reactively.
 *
 * @param {React.RefObject} ref - a ref pointing to the DOM element (e.g., a footer)
 * @returns {number} height - the current height of the element in pixels
 */
export default function useFooterHeight(ref) {
  // Store the current height of the referenced element
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    // Measure and update the footer's height
    const updateFooterHeight = () => {
      setHeight(ref.current.offsetHeight);
    };

    // Initial measurement
    updateFooterHeight();

    // Watch for element size changes
    const ro = new ResizeObserver(updateFooterHeight);
    ro.observe(ref.current);

    // Watch for window resize
    window.addEventListener('resize', updateFooterHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateFooterHeight);
    };
  }, [ref]);

  return height;
}