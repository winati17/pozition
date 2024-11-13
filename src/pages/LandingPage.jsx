import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardContent,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  IonIcon,
  IonText,
  IonRouterLink,
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { star, peopleCircle, cash, searchOutline } from 'ionicons/icons';
import './LandingPage.css';
import Footer from '../components/Footer/Footer'

const LandingPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <div className="custom-header">
          <div className="logo">poZition</div>
          <nav className="navbar">
            <IonRouterLink routerLink="/landing" className="nav-link active">
              Home
            </IonRouterLink>
            <IonRouterLink routerLink="/venue" className="nav-link">
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

      <IonContent>
        {/* Hero Section */}
        <div className="hero-section">
    <h1 className="hero-title">TEMUKAN VENUE YANG TEPAT</h1>
    <div className="search-container">
      <input type="text" placeholder="Cari Venue" className="custom-input" />
      <button className="search-button">
      <IonIcon icon={searchOutline} className="search-icon" />
      </button>
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
            <IonRouterLink routerLink="/venue" className="view-more"> Lihat selengkapnya </IonRouterLink>
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
                    <p>Jl. A. Daeng Sirua No.108, Masale, Kec. Panakkukang, Sulawesi Selatan 90231</p>
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
                    <p>Jl. Masjid H Salimah, Tamalanrea Jaya, Kec. Tamalanrea, Sulawesi Selatan</p>
                    <p>Rp8.000.000,00/hari</p>
                    <button className="order-button">Pesan Sekarang</button>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
  
      <Footer/>
    </IonPage>
  );
};

export default LandingPage;
