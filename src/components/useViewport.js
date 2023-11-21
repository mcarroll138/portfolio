import React, { useState, useEffect } from "react";

export function useViewport() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width < 740;

  // eslint-disable-next-line no-unused-vars
  const forceRerender = React.useState()[1];

  return { width, isMobile };
}
