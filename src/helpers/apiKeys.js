const firebaseConfig = {
  weatherApiKey: process.env.REACT_APP_WEATHER_API_KEY,
  theOneApiKey: process.env.REACT_APP_THE_ONE_API_KEY,
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export default firebaseConfig;