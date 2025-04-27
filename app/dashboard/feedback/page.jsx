"use client";
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("error");
  const recaptchaRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) {
      setAlertMessage("Mohon verifikasi reCAPTCHA terlebih dahulu");
      setAlertType("error");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    setSubmitting(true);
    const form = e.target;
    const formData = new FormData(form);
    formData.append("g-recaptcha-response", recaptchaValue);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          "g-recaptcha-response": recaptchaValue,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAlertMessage("Pesan Anda telah berhasil dikirim!");
        setAlertType("success");
        form.reset();
        recaptchaRef.current.reset();
      } else {
        throw new Error(
          data.message || "Terjadi kesalahan saat mengirim pesan"
        );
      }
    } catch (error) {
      setAlertMessage(error.message);
      setAlertType("error");
    } finally {
      setSubmitting(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Form Feedback</h1>

      {showAlert && (
        <div
          className={`mb-4 animate-fade-in-down ${
            alertType === "success"
              ? "bg-green-100 border-green-500"
              : "bg-red-100 border-red-500"
          } border-l-4 p-4 rounded-md shadow-md`}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {alertType === "success" ? (
                <svg
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
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
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{alertMessage}</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() => setShowAlert(false)}
                className="inline-flex rounded-md p-1.5 hover:bg-gray-200 focus:outline-none"
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
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nama Lengkap
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subjek
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Pesan
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            size="normal"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Mengirim..." : "Kirim Pesan"}
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
