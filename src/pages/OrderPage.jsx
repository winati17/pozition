import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonButton,
  IonText,
  IonFooter,
} from '@ionic/react';
import './OrderPage.css';

const OrderPage = () => {
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleOrder = () => {
    if (!venue || !date || !time || !guests) {
      alert("Please fill out all fields.");
      return;
    }
    alert(`Booking Confirmed for ${venue} on ${date} at ${time} for ${guests} guests.`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="order-title">Order Venue</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="order-container">
          <IonRow>
            <IonCol>
              <IonItem className="order-input-item">
                <IonLabel position="stacked">Venue Name</IonLabel>
                <IonInput
                  value={venue}
                  placeholder="Enter venue name"
                  onIonChange={(e) => setVenue(e.detail?.value || '')}
                  className="order-input"
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem className="order-input-item">
                <IonLabel position="stacked">Select Date</IonLabel>
                <IonDatetime
                  displayFormat="YYYY-MM-DD"
                  placeholder="Select Date"
                  onIonChange={(e) => setDate(e.detail?.value || '')}
                  className="order-input"
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem className="order-input-item">
                <IonLabel position="stacked">Select Time</IonLabel>
                <IonDatetime
                  displayFormat="HH:mm"
                  pickerFormat="HH:mm"
                  placeholder="Select Time"
                  onIonChange={(e) => setTime(e.detail?.value || '')}
                  className="order-input"
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem className="order-input-item">
                <IonLabel position="stacked">Number of Guests</IonLabel>
                <IonInput
                  type="number"
                  value={guests}
                  placeholder="Enter number of guests"
                  onIonChange={(e) => setGuests(e.detail?.value || '')}
                  className="order-input"
                />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton expand="full" color="primary" onClick={handleOrder} className="order-button">
                Confirm Booking
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonText className="footer-text">&copy; 2024 Pozition</IonText>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default OrderPage;
