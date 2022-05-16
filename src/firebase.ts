import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import config from '../config/default';

let app;

if (getApps().length === 0) {
  app = initializeApp(config.firebase);
} else {
  app = getApp();
}

const auth = getAuth();
export { auth };
