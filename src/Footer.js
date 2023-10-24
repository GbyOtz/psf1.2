import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css'; // Importa los estilos
import { MdHome } from 'react-icons/md';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social_icons}>
          <div className={styles.social_icon}>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
            <label>YouTube</label>
          </div>
          <div className={styles.social_icon}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <label>Instagram</label>
          </div>
          <div className={styles.social_icon}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <label>Facebook</label>
          </div>
          <div className={styles.social_icon}>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} />
            </a>
            <label>TikTok</label>
          </div>
          <div className={styles.social_icon}>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} />
            </a>
            <label>WhatsApp</label>
          </div>
        </div>
        <div className={styles.company_info}>
          <MdHome size={24} /> {/* Icono de casa */}
          <p>© 2023 GabyCorporation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
