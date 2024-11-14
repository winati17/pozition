import React from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonText,
} from '@ionic/react';
import { mailOutline, logoInstagram, logoWhatsapp, logoLinkedin } from 'ionicons/icons';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <section className="footer" style={{ backgroundColor: 'white' }}>
      <IonGrid>
        <IonRow className="footer-content">
          <IonCol size="12">
            <IonText className="footer-title">
              <h2>Contact Us!</h2>
            </IonText>
            <div className="contact-info">
              <div className="contact-item">
                <IonIcon icon={mailOutline} className="contact-icon" />
                <IonText>pozition@gmail.com</IonText>
              </div>
              <div className="contact-item">
                <IonIcon icon={logoWhatsapp} className="contact-icon" />
                <IonText>08123456789</IonText>
              </div>
              <div className="contact-item">
                <IonIcon icon={logoInstagram} className="contact-icon" />
                <IonText>@pozition</IonText>
              </div>
              <div className="contact-item">
                <IonIcon icon={logoLinkedin} className="contact-icon" />
                <IonText>pozition</IonText>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
      <div className="footer-bottom-bar"></div>
    </section>
  );
};

export default Footer;
