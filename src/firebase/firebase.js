import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC17ZK7zVyj0BrG7f3jk7fTPrGxMKwgraw",
    authDomain: "stpcomp225project.firebaseapp.com",
    projectId: "stpcomp225project",
    storageBucket: "stpcomp225project.appspot.com",
    messagingSenderId: "697691202665",
    appId: "1:697691202665:web:fe7635aa7850fe540deef8",
    measurementId: "G-VX71CP1G4X"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}