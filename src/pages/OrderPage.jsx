import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import './OrderPage.css';

const Order = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Order Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Place your order here</h2>
        {/* Add more content or Ionic components for the order form */}
      </IonContent>
    </IonPage>
  );
};

export default Order;

