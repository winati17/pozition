import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonCard,
  IonCardContent,
  IonAvatar,
  IonToolbar,
} from '@ionic/react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonAvatar slot="end" className="profile-avatar">
            <img src="./src/pages/profile.png" alt="Profile" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="search-container">
          <IonSearchbar placeholder="Cari venue" />
        </div>
        <div className="venue-card-container">
          <IonCard className="venue-card">
            <img src="./src/pages/venue.png" alt="Venue" />
            <IonCardContent>
              <p>Deskripsi Venue</p>
            </IonCardContent>
          </IonCard>
          {/* Duplicate IonCard for additional cards */}
          <IonCard className="venue-card">
            <IonCardContent>
              <p>Venue Lainnya</p>
            </IonCardContent>
          </IonCard>
          <IonCard className="venue-card">
            <IonCardContent>
              <p>Venue Lainnya</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
