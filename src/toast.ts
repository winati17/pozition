export async function showToast(message: string, duration: number) {
  const toast = document.createElement('ion-toast');
  toast.message = message;
  toast.duration = duration;

  document.body.appendChild(toast);
  // await toast.componentOnReady();  
  await toast.present();  
}

