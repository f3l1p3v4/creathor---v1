'use client';
import React, { useEffect, useState } from 'react';

import { Popup } from './PopUp';

export const ExitPopupClient: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasCanceled, setHasCanceled] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (!hasCanceled && event.clientY <= 0 && isVisible === false) {
        setIsVisible(true);
      }
    };

    window.addEventListener('mouseout', handleMouseLeave);

    return () => window.removeEventListener('mouseout', handleMouseLeave);
  }, [isVisible, hasCanceled]);

  const handleClosePopup = () => {
    setIsVisible(false);
    setHasCanceled(true);
  };

  return <Popup isVisible={isVisible} onClose={handleClosePopup} />;
};
