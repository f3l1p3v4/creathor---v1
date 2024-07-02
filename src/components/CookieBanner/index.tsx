'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { getLocalStorage, setLocalStorage } from '../../lib/storageHelper';
import './styles.css';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const controls = useAnimation();
  const isIntroDone = true;

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', false);

    setCookieConsent(storedCookieConsent);
    setShowBanner(!storedCookieConsent); // Ocultar o banner se houver consentimento salvo
  }, []);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      'analytics_storage': newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);

    if (cookieConsent) {
      setShowBanner(false); // Se o usuário aceitou, ocultar o banner permanentemente
    }
  }, [cookieConsent]);

  useEffect(() => {
    if (isIntroDone) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 1 },
      });
    }
  }, [controls, isIntroDone]);

  const handleAccept = () => {
    setCookieConsent(true);
  };

  const handleDecline = () => {
    setShowBanner(false);
  };

  if (!isIntroDone || !showBanner) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={controls} className="cookie-wrapper">
      <div className="cookie-content">
        <p className="cookie-description">Utilizamos cookies 🍪 para fornecer uma melhor experiência para nossos usuários</p>

        <div className="cookie-group-btn">
          <button className="cookie-btn-decline" onClick={handleDecline}>
            Depois
          </button>
          <button className="cookie-btn-allow" onClick={handleAccept}>
            Aceitar
          </button>
        </div>
      </div>
    </motion.div>
  );
}
