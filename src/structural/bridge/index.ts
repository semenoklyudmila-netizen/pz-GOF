import { AndroidUI } from './AndroidUI';
import { MobileBackend } from './MobileBackend';
const backend = new MobileBackend();
const android = new AndroidUI(backend);
android.render();
