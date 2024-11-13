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
        <div className="custom-header">
          <div className="logo">po<span className="highlight">Zition</span></div>
          <nav className="navbar">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Venue</a>
            <a href="#" className="nav-link">Order</a>
            <a href="#" className="nav-link">Masuk/Daftar</a>
          </nav>
        </div>
      </IonHeader>

      <IonContent>
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-title">TEMUKAN VENUE YANG TEPAT</h1>
          <div className="search-container">
            <IonSearchbar placeholder="Cari Venue" className="custom-searchbar" />
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
        <div className="venue-section">
          <div className="venue-header">
            <h2 className="venue-title">Venue Populer</h2>
            <a href="#" className="view-more">Lihat selengkapnya</a>
          </div>
          <IonGrid className="venue-card-container">
            <IonRow>
              <IonCol size="12" sizeMd="6">
                <IonCard className="venue-card">
                  <div className="image-container">
                    <img src="./src/components/event1.jpg" alt="Upperhills Convention Hall" />
                    <div className="category-tags">
                      <span className="tag">Pesta</span>
                      <span className="tag">Dine-in</span>
                    </div>
                  </div>
                  <IonCardContent className="venue-card-content">
                    <h3>Upperhills Convention Hall</h3>
                    <p>Jl. Metro Tj. Bunga No.995, Maccini, Kec. Makassar, Sulawesi Selatan 90242</p>
                    <p>Rp8.000.000,00/hari</p>
                    <button className="order-button">Pesan Sekarang</button>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="12" sizeMd="6">
                <IonCard className="venue-card">
                  <div className="image-container">
                    <img src="./src/components/event2.jpg" alt="Lasaran Garden" />
                    <div className="category-tags">
                      <span className="tag">Pesta</span>
                      <span className="tag">Dine-in</span>
                    </div>
                  </div>
                  <IonCardContent className="venue-card-content">
                    <h3>Lasaran Garden</h3>
                    <p>Jl. Abdullah Daeng Sirua No.108, Masale, Kec. Panakkukang, Kota Makassar, Sulawesi Selatan 90231</p>
                    <p>Rp8.000.000,00/hari</p>
                    <button className="order-button">Pesan Sekarang</button>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="12" sizeMd="6">
                <IonCard className="venue-card">
                  <div className="image-container">
                    <img src="./src/components/event3.jpg" alt="The Culture Club Makassar" />
                    <div className="category-tags">
                      <span className="tag">Pesta</span>
                      <span className="tag">Dine-in</span>
                    </div>
                  </div>
                  <IonCardContent className="venue-card-content">
                    <h3>The Culture Club Makassar</h3>
                    <p>Jl. Gontang Raya No.15, Tamalate, Kota Makassar, Sulawesi Selatan 90242</p>
                    <p>Rp8.000.000,00/hari</p>
                    <button className="order-button">Pesan Sekarang</button>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="12" sizeMd="6">
                <IonCard className="venue-card">
                  <div className="image-container">
                    <img src="./src/components/event4.jpeg" alt="Four.venue" />
                    <div className="category-tags">
                      <span className="tag">Pesta</span>
                      <span className="tag">Dine-in</span>
                    </div>
                  </div>
                  <IonCardContent className="venue-card-content">
                    <h3>Four.venue</h3>
                    <p>Jl. Masjid H Salimah, Tamalanrea Jaya, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245</p>
                    <p>Rp8.000.000,00/hari</p>
                    <button className="order-button">Pesan Sekarang</button>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
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
    </IonPage >
  );
};

export default LandingPage;
