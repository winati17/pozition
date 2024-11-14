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
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonFooter,
  IonIcon,
  IonText,
  IonList,
  IonItem,
  IonRouterLink
} from '@ionic/react';
import './DetailVenue.css';
import venuePic from '../components/venuepic.png';
import iconStar from '../components/staricon.png';
import {icons} from '../components/icons';

const DetailVenue = () => {
  return (
    <IonPage>
      <IonHeader>
        <div className="custom-header">
          <div className="logo">poZition</div>
          <nav className="navbar">
            <IonRouterLink routerLink="/landing" className="nav-link">
              Home
            </IonRouterLink>
            <IonRouterLink routerLink="/venue" className="nav-link active">
              Venue
            </IonRouterLink>
            <IonRouterLink routerLink="/order" className="nav-link">
              Order
            </IonRouterLink>
            <IonRouterLink routerLink="/login" className="nav-link">
              Masuk/Daftar
            </IonRouterLink>
          </nav>
        </div>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="detailinfo">
          <div className="section">
            <div className="title">
              <h1>Upperhils Conventional Hall</h1>
              <p className="text">Jl. Metro Tj. Bunga No.995, Mattoangin, Kec. Mariso, Kota Makassar, Sulawesi Selatan 90224</p>
              <img src={venuePic} alt="venue" className="pic"/>
              <div className="rating">
                <img src={iconStar} alt="rate" className="rate"/>
                <h5>3.99</h5>
              </div>
            </div>
          </div>
          <h3 className="line">____________________</h3>
          <div className="section">
            <h3 className="sub_bab">
              Deskripsi
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ipsum molestias quis maxime. Neque quaerat nobis delectus, iusto quam doloremque sed voluptate? Eaque quidem, quibusdam rem enim minus dignissimos illo!</p>
          </div>
          <h3 className="line">____________________</h3>
          <div className="section">
            <h3 className="sub_bab">
              Fasilitas
            </h3>
            <IonGrid>
              <IonRow>
                <IonCol >
                  <div className="facility">
                    <img src={icons.parkir} alt="" className="icon"/>
                    <h5>Parkir Bebas</h5>
                  </div>
                </IonCol>
                <IonCol >
                  <div className="facility">
                    <img src={icons.wifi} alt="" className="icon"/>
                    <h5>Wifi Gratis</h5>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol >
                  <div className="facility">
                    <img src={icons.resto} alt="" className="icon"/>
                    <h5>Tersedia Resto</h5>
                  </div>
                </IonCol>
                <IonCol >
                  <div className="facility">
                    <img src={icons.toilet} alt="" className="icon"/>
                    <h5>Toilet</h5>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
          <h3 className="line">____________________</h3>
          <div className="section">
            <h3 className="sub_bab">
              Lokasi
            </h3>
          </div>
          <h3 className="line">____________________</h3>
          <div className="section">
            <h3 className="sub_bab">
              Pilih Jadwal Lapangan
            </h3>
            <IonGrid>
              <IonRow className="custom-row">
                <IonCol className="custom-col">
                  <h6 className="info">Jumat</h6>
                  <h5 className="info">11 Okt</h5>
                </IonCol>
                <IonCol className="custom-col">
                  <h6 className="info">Sabtu</h6>
                  <h5 className="info">12 Okt</h5>
                </IonCol>
                <IonCol className="custom-col">
                  <h6 className="info">Minggu</h6>
                  <h5 className="info">13 Okt</h5>
                </IonCol>
                <IonCol className="custom-col">
                  <h6 className="info">Senin</h6>
                  <h5 className="info">14 Okt</h5>
                </IonCol>
              </IonRow>
            </IonGrid>

            {/* <div className="tggl">
              <div className="box">
                <h6>Jumat</h6>
                <h5>11 Okt</h5>
              </div>
            </div> */}
          </div>
          
        </div>
        

      </IonContent>
    </IonPage>
  );
};

export default DetailVenue;
