import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonToast,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../firebaseConfig";
// import { showToast } from "../toast";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  async function login() {
    const res = await loginUser(username, password);
    if (!res) {
      setToastMessage("Username/password salah.");
    } else {
      setToastMessage("Login berhasil.");
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonInput
          placeholder="Email atau ponsel"
          onIonChange={(e: any) => setUsername(e.target.value!)}
        />
        <IonInput
          type="password"
          placeholder="Masukkan kata sandi Anda"
          onIonChange={(e: any) => setPassword(e.target.value!)}
        />

        <IonButton onClick={login}>Lanjutkan</IonButton>

        <p>
          Belum punya akun? <Link to="/SignUp">Daftar</Link>
        </p>

        <IonToast
          isOpen={!!toastMessage}
          message={toastMessage || ""}
          duration={5000}
          onDidDismiss={() => setToastMessage(null)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
