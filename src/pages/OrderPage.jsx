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
  IonButton,
  IonCard,
  IonCardContent,
  IonText,
} from '@ionic/react';
import './OrderPage.css';

const OrderPage = () => {
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1); // Default to 1 guest
  const pricePerGuest = 20; // Example price per guest
  const totalCost = guests * pricePerGuest;

  const handleOrder = () => {
    if (!venue || !date || !time || guests <= 0) {
      alert("Please fill out all fields correctly.");
      return;
    }
    const formattedDateTime = `${date} at ${time}`;
    alert(`Booking confirmed for ${venue} on ${formattedDateTime} for ${guests} guests. Total cost: $${totalCost}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Venue Booking</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid className="booking-grid">
          <IonRow>
            {/* Input Form Section */}
            <IonCol size="12" size-md="8">
              <IonCard className="container">
                <IonCardContent>
                  <h3>Book Your Venue</h3>

                  <IonItem>
                    <IonLabel position="stacked">Venue Name</IonLabel>
                    <IonInput
                      value={venue}
                      placeholder="Enter venue name"
                      onIonChange={(e) => setVenue(e.detail?.value || '')}
                    />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="stacked">Select Date</IonLabel>
                    <IonInput
                      type="date"
                      value={date}
                      placeholder="Select Date"
                      onIonChange={(e) => setDate(e.detail?.value || '')}
                    />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="stacked">Select Time</IonLabel>
                    <IonInput
                      type="time"
                      value={time}
                      placeholder="Select Time"
                      onIonChange={(e) => setTime(e.detail?.value || '')}
                    />
                  </IonItem>

                  <IonItem>
                    <IonLabel position="stacked">Number of Guests</IonLabel>
                    <IonInput
                      type="number"
                      value={guests}
                      placeholder="Enter number of guests"
                      onIonChange={(e) => setGuests(Number(e.detail?.value) || 1)}
                    />
                  </IonItem>

                  <IonButton expand="full" color="primary" onClick={handleOrder}>
                    Confirm Booking
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            {/* Total Cost Section */}
            <IonCol size="12" size-md="4">
              <IonCard className="container total-cost-container">
                <IonCardContent>
                  <IonText className="total-cost">
                    <p>Total Cost</p>
                    <h2>${totalCost}</h2>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default OrderPage;
