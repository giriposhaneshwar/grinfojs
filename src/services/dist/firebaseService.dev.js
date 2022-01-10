"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.GR_INFO_APIKEY,
  authDomain: process.env.GR_INFO_AUTHDOMAIN,
  projectId: process.env.GR_INFO_PROJECTID,
  storageBucket: process.env.GR_INFO_STORAGEBUCKET,
  messagingSenderId: process.env.GR_INFO_MESSAGINGSENDERID,
  appId: process.env.GR_INFO_APPID
};

if (!_firebase["default"].app.length) {
  // Initialize Firebase
  _firebase["default"].initializeApp(firebaseConfig);
}

var _default = _firebase["default"];
exports["default"] = _default;