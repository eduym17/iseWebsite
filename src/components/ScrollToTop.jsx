import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.href.includes('#')) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;
