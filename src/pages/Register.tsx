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
import { homedir } from 'os'

import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { toast } from '../toast'
import { registerUser } from '../firebaseConfig'

const Register:React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    async function register(){
        if (password !== cpassword){
            return toast('Password tidak sesuai')
        }
        if (username.trim()==='' || password.trim() ==='') {
            return toast('Masukkan Username dan Password')
        }

        const res = await registerUser(username, password)
        if(res){
            toast('Registrasi Berhasil')
        }
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Daftar</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <IonInput placeholder="Username?" onIonChange={((e: any) => setUsername(e.target.value))}/>
                <IonInput type="password" placeholder="Password"  onIonChange={((e: any) => setPassword(e.target.value))}/>
                <IonInput type="password" placeholder="CPassword"  onIonChange={((e: any) => setCPassword(e.target.value))}/>    
                <IonButton onClick={register}>Register</IonButton>
                <p> Sudah punya akun? <Link to ="/login">Login</Link></p>
            </IonContent>
        </IonPage>
    )
}

export {}