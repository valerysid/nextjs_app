export const firebaseConfig = {
  apiKey: "AIzaSyCyNOybOoWfoZ1hU3zT0lM5DEa_lok06Zc",
  authDomain: "function-data-ff25d.firebaseapp.com",
  projectId: "function-data-ff25d",
  storageBucket: "function-data-ff25d.appspot.com",
  messagingSenderId: "910375701239",
  appId: "1:910375701239:web:932f9d345859f7be0de1f2"
};

export const uiConfig = firebase => {
  return {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    tosUrl: '/terms-of-service',
    privacyPolicyUrl: '/privacy-policy',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  }
}