import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonInput
} from '@ionic/react'

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../firebaseConfig'

const Login:React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login(){
        const res = await loginUser(username, password)
        if(res){
            toast('Anda Telah Masuk')
        }
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Masuk</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonInput placeholder="Username?" onIonChange={((e: any) => setUsername(e.target.value))}/>
                <IonInput type="password" placeholder="Password"  onIonChange={((e: any) => setPassword(e.target.value))}/>
                <IonButton routerLink='/LandingPage' onClick={login}>Login</IonButton>
                <p> Belum Punya Akun? <Link to="/register">Daftar</Link></p>
            </IonContent>
        </IonPage>
    )
}

export default Login