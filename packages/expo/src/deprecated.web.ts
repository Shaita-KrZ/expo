// Importing these modules from the 'expo' package was deprecated in SDK 33.
// Please import them from the each individual unimodule package instead.

import Constants from 'expo-constants';
import * as Amplitude from 'expo-analytics-amplitude';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Calendar from 'expo-calendar';
import * as DocumentPicker from 'expo-document-picker';
import * as Font from 'expo-font';
import * as Location from 'expo-location';
import * as SMS from 'expo-sms';
import * as Speech from 'expo-speech';
import * as TaskManager from 'expo-task-manager';
import * as Facebook from 'expo-facebook';
import * as MailComposer from 'expo-mail-composer';
import * as SecureStore from 'expo-secure-store';
import { BlurView } from 'expo-blur';
import * as Brightness from 'expo-brightness';
import * as FileSystem from 'expo-file-system';
import * as Haptics from 'expo-haptics';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from 'expo-image-manipulator';
import * as IntentLauncher from 'expo-intent-launcher';
import * as LocalAuthentication from 'expo-local-authentication';
import * as FacebookAds from 'expo-ads-facebook';
import * as Sensors from 'expo-sensors';
import * as WebBrowser from 'expo-web-browser';
import * as Segment from 'expo-analytics-segment';
import * as AppAuth from 'expo-app-auth';
import * as Contacts from 'expo-contacts';
import * as FaceDetector from 'expo-face-detector';
import * as GL from 'expo-gl';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as ImagePicker from 'expo-image-picker';
import * as Localization from 'expo-localization';
import * as Crypto from 'expo-crypto';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import * as Print from 'expo-print';
import * as GestureHandler from 'react-native-gesture-handler';
import * as Random from 'expo-random';
export { default as Animated, Easing, Transitioning, Transition } from './Animated';
export { default as takeSnapshotAsync } from './takeSnapshotAsync/captureRef';
export { AdMobBanner, AdMobInterstitial, AdMobRewarded, PublisherBanner } from 'expo-ads-admob';
export { Segment };
export { Asset } from 'expo-asset';
export { AppAuth };
export { BackgroundFetch };
export { BarCodeScanner } from 'expo-barcode-scanner';
export { Calendar };
export { Camera } from 'expo-camera';
export { Constants };
export { Contacts };
export { DocumentPicker };
export { FaceDetector };
export { FileSystem };
export { Font };
const GLView = GL.GLView;
export { GL, GLView };
export { GoogleSignIn };
export { ImageManipulator };
export { Haptics, Haptics as Haptic };
export { ImagePicker };
export { LocalAuthentication };
export { IntentLauncher, IntentLauncher as IntentLauncherAndroid };
export { Localization };
export { Crypto };
export { Location };
export { MediaLibrary };
export { Permissions };
export { Print };
export { Sensors };
export {
  Accelerometer,
  Barometer,
  Gyroscope,
  Magnetometer,
  MagnetometerUncalibrated,
} from 'expo-sensors';
export { SQLite } from 'expo-sqlite';
export { SMS };
export { Speech };
export { TaskManager };
export { GestureHandler };
export { default as MapView } from './Maps/MapView';
export { Amplitude };
export { Brightness };
export { Facebook };
export { Random };
export { Sharing };
export { default as KeepAwake, activate, deactivate } from 'expo-keep-awake';
export { MailComposer };
export { SecureStore };
export { default as Svg } from './Svg';
export { WebBrowser };
export { Audio, Video } from 'expo-av';
export { BlurView };
export { LinearGradient } from 'expo-linear-gradient';
export { FacebookAds };
export { WebView } from './WebView';

