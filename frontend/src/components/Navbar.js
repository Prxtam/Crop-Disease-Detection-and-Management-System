"use client";

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          {/* Try to load /images/logo.png (new file). If missing, fallback to logo_new.png */}
          <img
            src="/images/logo.png"
            alt="AgriGuard Logo"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/logo_new.png'; }}
          />
        </Link>
        <span className={styles.siteTitle}>AgriGuard</span>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/analyze">Crop Analysis</Link></li>
        <li><Link href="/alerts">Outbreak Alerts</Link></li>
        <li><Link href="/community">Community</Link></li>
        {/* Pharmacist locator removed from navbar for student project simplification */}
        <li><Link href="/education">Education</Link></li>
      </ul>
    </nav>
  );
}
