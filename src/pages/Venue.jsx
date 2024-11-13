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
  IonText,
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Venue.css';

const Venue = () => {
  return (
    <IonPage>
      <IonHeader>
        <div className="custom-header">
          <div className="logo">poZition</div>
          <nav className="navbar">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Venue</a>
            <a href="#" className="nav-link">Order</a>
            <a href="#" className="nav-link">Masuk/Daftar</a>
          </nav>
        </div>
      </IonHeader>

      <IonContent>
        <div className="venue-section">
          <div className="venue-header">
            <h2 className="venue-title">Venue</h2>
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
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonText className="footer-text">&copy; 2023 Sewa Venue</IonText>
        </IonToolbar>
      </IonFooter>
    </IonPage >
  );
};

export default Venue;
