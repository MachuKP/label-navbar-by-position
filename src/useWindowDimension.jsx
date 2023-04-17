import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height, scrollY: posionY } = window;
  return {
    width,
    height,
    posionY
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export function useCurrentPossition() {
    const [currentPosition, setCurrentPosition] = useState(getWindowDimensions().posionY);
  
    useEffect(() => {
      function onScroll() {
        setCurrentPosition(getWindowDimensions().posionY)
      }
  
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  
    return currentPosition;
}

