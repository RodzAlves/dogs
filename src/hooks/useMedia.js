import React, { useState, useEffect } from 'react';

const useMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function handleChangeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    handleChangeMatch();

    window.addEventListener('resize', handleChangeMatch);

    return () => {
      window.removeEventListener('resize', handleChangeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
