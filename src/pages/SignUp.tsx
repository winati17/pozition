import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonToast,
  IonLoading,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { useEffect, useState } from "react";
// import { showToast } from "../toast";
import { signUpUser } from "../firebaseConfig";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState<boolean>(false);

  async function signUp() {
    setBusy(true);
    const res = await signUpUser(username, password);

    if (password !== cPassword) {
      return setToastMessage("Kata sandi tidak sama.");
    }
    if (username.trim() === "" || password.trim() === "") {
      return setToastMessage("Masukkan email/password");
    }

    if (!res) {
      setToastMessage("Pendaftaran gagal");
    } else {
      setToastMessage("Pendaftaran berhasil");
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonLoading message="Mohon tunggu..." duration={0} isOpen={busy} />
        <IonInput
          placeholder="Masukkan nama pengguna"
          onIonChange={(e: any) => setName(e.target.value!)}
        />
        <IonInput
          placeholder="Email atau ponsel"
          onIonChange={(e: any) => setUsername(e.target.value!)}
        />
        <IonInput
          type="password"
          placeholder="Masukkan kata sandi Anda"
          onIonChange={(e: any) => setPassword(e.target.value!)}
        />
        <IonInput
          type="password"
          placeholder="Konfirmasi kata sandi Anda"
          onIonChange={(e: any) => setCPassword(e.target.value!)}
        />
        <IonButton onClick={signUp}>Buat Akun</IonButton>
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

export default SignUp;
