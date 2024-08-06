import React, { useEffect, useState } from 'react';
import './PrivacyPolicy.css';
import Header from 'Components/Molecules/navBars/header';
import Footer from 'Components/Molecules/footer/footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount
  }, []);
  
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header id="header" />
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
        </header>
        <main className="privacy-content">
          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              Welcome to BloodHub. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
            </p>
          </section>
          <section className="privacy-section">
            <h2>Information Collection</h2>
            <p>
              We collect personal information that you voluntarily provide to us when registering on the BloodHub platform. This includes your name, contact details, and blood type.
            </p>
            <ul>
              <li>Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Blood Type</li>
              <li>Location</li>
            </ul>
          </section>
          <section className="privacy-section">
            <h2>Use of Information</h2>
            <p>
              The information we collect is used to connect donors with seekers, improve our services, and communicate with you about updates and promotions.
            </p>
          </section>
          <section className="privacy-section">
            <h2>Sharing of Information</h2>
            <p>
              We do not share your personal information with third parties without your consent, except to comply with legal obligations, protect our rights, or as part of a merger or acquisition.
            </p>
          </section>
          <section className="privacy-section">
            <h2>Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>
          <section className="privacy-section">
            <h2>Cookies</h2>
            <p>
              Our website uses cookies to enhance your experience. Cookies are small files placed on your device that help us analyze web traffic and improve our services. You can choose to accept or decline cookies through your browser settings.
            </p>
          </section>
          <section className="privacy-section">
            <h2>Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us at digitalgurucse@gmail.com.
            </p>
          </section>
          <section className="privacy-section">
            <h2>Changes to this Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this policy periodically for any updates.
            </p>
          </section>
          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about our privacy policy, please contact us at digitalgurucse@gmail.com.
            </p>
          </section>
        </main>
        <footer className="privacy-footer">
          <p>© 2024 BloodHub. All rights reserved.</p>
        </footer>
      </div>
      <Footer color="var(--c-theme2)" />
    </>
  );
};

export default PrivacyPolicy;
