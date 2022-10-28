import { useCallback, useEffect, useState } from 'react';

export default function useWindowSize() {
  const isClient = typeof window === 'object';


  const getSize = useCallback(() => {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  // @ts-ignore
  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize, isClient]); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

/*
// Usage
function App() {
  const size = useWindowSize();

  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
}
 */
