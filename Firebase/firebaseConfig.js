// FIREBASE
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth/react-native";
import { getDatabase } from "firebase/database";

// CONSTANTS
import Constants from "expo-constants";
// ASYNC
import AsyncStorage from "@react-native-async-storage/async-storage";
// Config
const firebaseConfig = {
  // API
};

// Initialize Firebase
let app;
let auth;
let database;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = getApp();
  auth = getAuth(app);
  database = getDatabase(app);
}

export { auth, database };
