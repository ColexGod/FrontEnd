import React from "react";
import "../globals.css";

const FooterComponent = ({ phoneNumber, email }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="contact-details">
          <p>Contactez-nous : {phoneNumber}</p>
          <p>
            Email : <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </div>
      <p>Tous droits réservés &copy; {currentYear} - 420-Films</p>
    </footer>
  );
};

export default FooterComponent;
