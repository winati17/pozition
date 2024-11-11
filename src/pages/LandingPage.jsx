
import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonText
} from '@ionic/react';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Penyewaan Venue</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="landing-content">
        <IonImg src="assets/venue.jpg" />
        <IonText color="primary">
          <h1>Temukan Venue Terbaik untuk Acara Anda</h1>
        </IonText>
        <IonText>
          <p>Kami menyediakan berbagai pilihan venue untuk memenuhi kebutuhan acara Anda.</p>
        </IonText>
        <IonButton expand="block" routerLink="/daftar-venue">
          Lihat Daftar Venue
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
