import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css'; // Importa los estilos

function Footer() {
  const iconColor = "black"; // Color negro

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social_icons}>
          <div className={styles.social_icon}>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} color={iconColor} /> {/* Establece el color negro */}
            </a>
            <label>YouTube</label>
          </div>
          <div className={styles.social_icon}>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color={iconColor} /> {/* Establece el color negro */}
            </a>
            <label>Instagram</label>
          </div>
          <div className={styles.social_icon}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} color={iconColor} /> {/* Establece el color negro */}
            </a>
            <label>Facebook</label>
          </div>
          <div className={styles.social_icon}>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} color={iconColor} /> {/* Establece el color negro */}
            </a>
            <label>TikTok</label>
          </div>
          <div className={styles.social_icon}>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} color={iconColor} /> {/* Establece el color negro */}
            </a>
            <label>WhatsApp</label>
          </div>
        </div>
        <div className={styles.company_info}><br/>
          
          <p>© 2023 CasaNegocios</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
