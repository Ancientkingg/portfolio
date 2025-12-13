export function measure(node: HTMLElement, onResize: (rect: DOMRectReadOnly) => void) {
  const observer = new ResizeObserver(([entry]) => {
    console.log('Resize observed:', entry.contentRect);
    onResize(entry.contentRect);
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}