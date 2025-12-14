export function measure(node: HTMLElement, onResize: (rect: DOMRectReadOnly) => void) {
  const observer = new ResizeObserver(([entry]) => {
    onResize(entry.contentRect);
    observer.disconnect();
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}