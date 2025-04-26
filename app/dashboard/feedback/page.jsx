// For more help visit https://formspr.ee/react-help

//UNTUK MELIHAT HASIL FEEDBACK KLIK DISINI : https://formspr.ee/xanonojw dan ada di email pendaftar akun @gilangramaddhann@gmail.com
"use client";
import React, { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  //   console.log(secretKey);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  //   console.log(siteKey);
  const [state, handleSubmit] = useForm("xanonojw");
  const recaptchaRef = useRef();
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) {
      setShowAlert(true);
      // Sembunyikan alert setelah 8 detik
      setTimeout(() => {
        setShowAlert(false);
      }, 8000);
      return;
    }

    const formDataWithRecaptcha = {
      ...formData,
      "g-recaptcha-response": recaptchaValue,
    };

    await handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">
            Terima kasih atas partisipasi Anda!
          </strong>
          <span className="block sm:inline">
            {" "}
            Masukan yang Anda berikan akan menjadi bahan evaluasi dan
            pengembangan website <strong>lingkunganrt50.com</strong> ke depan.
            Salam hangat dari Karang Taruna & Pengurus RT 50.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">Form Feedback</h1>
      {/* Alert Notification */}
      {showAlert && (
        <div className="mb-4 animate-fade-in-down">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">
                  Mohon verifikasi reCAPTCHA terlebih dahulu
                </p>
              </div>
              <div className="ml-auto pl-3">
                <div className="-mx-1.5 -my-1.5">
                  <button
                    onClick={() => setShowAlert(false)}
                    className="inline-flex rounded-md p-1.5 text-red-500 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 cursor-pointer"
                  >
                    <span className="sr-only">Dismiss</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1 after:text-red-500 after:content-['*'] after:ml-0.5"
          >
            Nama Lengkap
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white "
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1 after:text-red-500 after:content-['*'] after:ml-0.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1 after:text-red-500 after:content-['*'] after:ml-0.5"
          >
            Subjek
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1 after:text-red-500 after:content-['*'] after:ml-0.5"
          >
            Pesan / Kesan
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} size="normal" />
        </div>

        <div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-dashboard-button-primary text-white py-2 px-4 rounded-md hover:bg-dashboard-button-hover focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer animate-fade-in-down transition-all duration-300 ease-in-out"
          >
            {state.submitting ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <ContactForm />
    </div>
  );
}
