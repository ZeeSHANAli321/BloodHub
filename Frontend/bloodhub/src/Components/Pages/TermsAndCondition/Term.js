// src/Pages/PrivacyPolicy.js
import React, { useEffect, useState } from 'react';
import './Term.css';
import Header from 'Components/Molecules/navBars/header';
import Footer from 'Components/Molecules/footer/footer';

const Term = () => {
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
      <div className="terms-container">
        <header className="terms-header">
          <h1>Terms and Conditions</h1>
        </header>
        <main className="terms-content">
          <section className="terms-section">
            <h2>Introduction</h2>
            <p>
              Welcome to BloodHub. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, you accept these terms and conditions in full.
            </p>
          </section>
          <section className="terms-section">
            <h2>Eligibility</h2>
            <p>
              To use BloodHub, you must be at least 18 years old and legally capable of entering into binding contracts. By using this website, you warrant that you meet these eligibility requirements.
            </p>
          </section>
          <section className="terms-section">
            <h2>User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
            </p>
          </section>
          <section className="terms-section">
            <h2>Prohibited Activities</h2>
            <p>
              Users are prohibited from engaging in activities that violate any laws, infringe on any third-party rights, or interfere with the operation of the website. This includes, but is not limited to, unauthorized access, distribution of malware, and harassment of other users.
            </p>
          </section>
          <section className="terms-section">
            <h2>Limitation of Liability</h2>
            <p>
              BloodHub will not be liable for any damages arising out of or in connection with your use of this website. This includes, but is not limited to, direct, indirect, incidental, and consequential damages.
            </p>
          </section>
          <section className="terms-section">
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website following the posting of changes constitutes your acceptance of those changes.
            </p>
          </section>
          <section className="terms-section">
            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of our country. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts.
            </p>
          </section>
          <section className="terms-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these terms and conditions, please contact us at digitalgurucse@gmail.com.
            </p>
          </section>
        </main>
      </div>
      <Footer color="var(--c-white)" />
    </>
  );
};

export default Term;
