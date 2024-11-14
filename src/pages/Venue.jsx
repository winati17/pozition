import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterLink,
} from '@ionic/react';
import 'swiper/css';
import './Venue.css';
import Footer from '../components/Footer/Footer'

const Venue = () => {
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

      <IonContent>
        <div className="page-title">
          <h1>Venue</h1>
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
        <Footer/>
      </IonContent>
    </IonPage >
  );
};

export default Venue;
