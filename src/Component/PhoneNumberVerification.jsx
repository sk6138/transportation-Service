import React, { useState } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANqlsydTnNeUdIpNG3MpAhSuc1uub7dKQ",
    authDomain: "login-with-otp-e02ed.firebaseapp.com",
    projectId: "login-with-otp-e02ed",
    storageBucket: "login-with-otp-e02ed.appspot.com",
    messagingSenderId: "662156890843",
    appId: "1:662156890843:web:fc65b36e21991dd1ccf2fe",
    measurementId: "G-066V0BLNES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const PhoneNumberVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [message, setMessage] = useState("");

  // Set up Recaptcha (must be called before sending OTP)
  const setUpRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible", // You can change to 'normal' if you want a visible CAPTCHA
          callback: (response) => {
            console.log("Recaptcha verified:", response);
          },
        },
        auth
      );
    }
  };

  // Function to send OTP
  const sendOtp = (e) => {
    e.preventDefault();
    setUpRecaptcha(); // Set up Recaptcha before sending OTP

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        setMessage("OTP sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending OTP:", error);
        setMessage("Error sending OTP: " + error.message);
      });
  };

  // Function to verify OTP
  const verifyOtp = (e) => {
    e.preventDefault();

    if (!verificationId) {
      setMessage("Please request an OTP first.");
      return;
    }

    const credential = window.firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      otp
    );

    auth
      .signInWithCredential(credential)
      .then((result) => {
        setMessage("Phone number verified successfully!");
      })
      .catch((error) => {
        setMessage("OTP verification failed: " + error.message);
      });
  };

  return (
    <div>
      <h2>Phone Number OTP Verification</h2>
      <form onSubmit={sendOtp}>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Send OTP</button>
      </form>

      <form onSubmit={verifyOtp}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
        />
        <button type="submit">Verify OTP</button>
      </form>

      <div id="recaptcha-container"></div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PhoneNumberVerification;
