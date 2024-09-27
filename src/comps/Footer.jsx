import styles from "../css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className={styles.contactInfo}>
        <p>Contact Us: contact@fashionhub.fake</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className={styles.links}>
        <a href="/customer-service">Customer Service</a>
        <a href="/about-us">About Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/faq">FAQ</a>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} FashionHub. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
