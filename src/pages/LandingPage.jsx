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
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { star, peopleCircle, cash } from 'ionicons/icons';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonAvatar slot="end" className="profile-avatar">
            <img src="./src/pages/profile.png" alt="Profil" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="search-container">
          <IonSearchbar placeholder="Cari venue" className="custom-searchbar" />
        </div>
        {/* Hero Section */}
        <div className="hero-section">
          <img src="./src/pages/hero-image.jpg" alt="Hero" className="hero-image" />
          <div className="hero-text">
            <h1>Temukan Venue Sempurna Anda</h1>
            <p>Temukan dan pesan venue yang menakjubkan untuk acara Anda</p>
            <IonButton color="light" className="hero-button">Mulai Sekarang</IonButton>
          </div>
        </div>
        {/* Features Section */}
        <div className="features-section">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonIcon icon={star} size="large" />
                <h3>Venue Terbaik</h3>
                <p>Kami menawarkan venue dengan rating tertinggi.</p>
              </IonCol>
              <IonCol>
                <IonIcon icon={peopleCircle} size="large" />
                <h3>Host Terpercaya</h3>
                <p>Terhubung dengan pemilik venue yang terpercaya.</p>
              </IonCol>
              <IonCol>
                <IonIcon icon={cash} size="large" />
                <h3>Harga Terjangkau</h3>
                <p>Dapatkan penawaran terbaik untuk pemesanan venue.</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
        {/* Venue Cards */}
        <div className="venue-card-container">
          <IonCard className="venue-card">
            <img src="./src/pages/venue.png" alt="Venue" />
            <IonCardContent>
              <p>Deskripsi Venue</p>
            </IonCardContent>
          </IonCard>
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
        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2>Apa Kata Pelanggan Kami</h2>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <IonCard>
                <IonCardContent>
                  <p>"Pengalaman luar biasa, menemukan venue yang sempurna!"</p>
                  <p>- John Doe</p>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
            <SwiperSlide>
              <IonCard>
                <IonCardContent>
                  <p>"Mudah digunakan dan pilihan yang banyak."</p>
                  <p>- Jane Smith</p>
                </IonCardContent>
              </IonCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonText className="footer-text">&copy; 2023 Sewa Venue</IonText>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default LandingPage;
