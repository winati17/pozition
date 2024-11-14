import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LandingPage from './pages/LandingPage';
import OrderPage from './pages/OrderPage';
import DetailVenue from './pages/DetailVenue';

import '@ionic/react/css/core.css';
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path = "/detail" component={DetailVenue} />
        <Redirect exact from="/" to="/detail" />

        <Route exact path="/landing" component={LandingPage} />
        <Redirect exact from="/" to="/landing" />
        <Route exact path="/order" component={OrderPage} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

