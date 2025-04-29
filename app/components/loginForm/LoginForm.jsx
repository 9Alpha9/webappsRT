"use client";

import { useState, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import imagePix from "../../../public/assets/img/plants.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import "./loginForm.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { setCookie } from "../../globalFunction";

export default function LoginForm() {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const recaptchaRef = useRef();
  const [image] = useState(imagePix);
  const [formData, setFormData] = useState({
    nik: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 8000);
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login",
        formData
      );
      setCookie("token", response.data.token, 1);
      window.location.replace("/dashboard");
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "Terjadi kesalahan. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="@container @relative">
      <div className="bg-slate-950 flex flex-row items-center justify-center w-full overflow-hidden">
        <div className="sectionImage h-screen w-full p-4">
          <section className="bg-slate-400 h-full rounded-md overflow-hidden relative">
            <Image
              src={image}
              alt="banner"
              className="object-cover h-full"
              quality={100}
            />
            <div className="absolute  bottom-0 z-10 flex  items-center bg-linear-to-b from-slate-0 h-full to-slate-950 text-white w-full">
              <span className="m-9 block">
                <h2 className="text-4xl font-bold">Sugeng Rawuh.</h2>
                <p className="text-sm pt-16 leading-6 text-gray-300">
                  wonten ing situs resmi RT 50. Situs punika nyedhiyakake
                  informasi warga, kabar RT, lan layanan administrasi online
                  kados pengajuan surat keterangan, domisili, lan sanesipun.
                  Mugi saget ndadosaken urusan warga langkung gampang, cepet,
                  lan tertata. Supados saged ngakses layanan online, monggo
                  kersa ndhaptar akun langkung rumiyin. Nggih mugi saget
                  dipun-ginakaken kanthi manfaat kangge panjenengan sedaya.
                </p>
              </span>
            </div>
          </section>
        </div>
        <section className="h-screen w-full">
          <div className="flex justify-between items-start sm:items-center align-middle m-8 sm:flex-row flex-col">
            <div className="bg-slate-800 text-indigo-100 p-2 px-8  text-sm flex items-center justify-center rounded-full flex-wrap">
              <Link href="/">
                <motion.span
                  className="flex items-center gap-2 relative"
                  whileHover="hover"
                >
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                    variants={{
                      hover: {
                        x: [-4, 0, -4],
                        transition: {
                          duration: 1,
                          ease: "linear",
                          repeat: Infinity,
                        },
                      },
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </motion.svg>
                  <span className="text-xs whitespace-nowrap">
                    Halaman utama
                  </span>
                </motion.span>
              </Link>
            </div>
            <span className="text-xs text-stone-200 block items-center py-4 sm:py-0">
              Apps Ver.0.0.1
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-extrabold text-stone-200 text-2xl">
              Login Dashboard
            </h2>

            <form
              onSubmit={onSubmit}
              className="mt-8 sm:w-8/12 w-full p-3 sm:p-8"
            >
              <div className="formWrapper relative space-y-6 bg-slate-900 p-6 rounded-lg shadow-md">
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
                <div className="sectionNik">
                  <span className="sectionInputItems">
                    <label
                      htmlFor="nik"
                      className="block text-sm font-medium text-stone-200 after:ml-0.5 after:text-red-500 after:content-['*']"
                    >
                      Nik
                    </label>
                    <input
                      id="nik"
                      name="nik"
                      type="number"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      // maxLength={16}
                      required
                      className="bg-slate-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none mt-2.5 block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-400 focus:border-indigo-400 text-slate-300"
                      value={formData.nik}
                      onChange={(e) => {
                        if (e.target.value.length <= 16) {
                          handleInputChange(e);
                        }
                      }}
                      onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </span>
                </div>

                <div className="sectionPassword">
                  <span className="sectionInputItems">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-stone-200 after:ml-0.5 after:text-red-500 after:content-['*']"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="mt-2.5 rounded-md text-slate-300 block w-full px-3 py-2 border border-slate-600 bg-slate-800  shadow-sm focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
                    />
                  </span>
                </div>
                <div className="flex justify-center mt-14">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    size="normal"
                  />
                </div>
                <div className="mt-16">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full cursor-pointer flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-600 hover:bg-slate-500 focus:outline-none  disabled:opacity-50 transition-all duration-300 ease-in-out"
                  >
                    {loading ? "Memproses..." : "Masuk"}
                  </button>
                </div>

                <div className="text-center">
                  <Link
                    href="/register"
                    className="text-xs sm:text-sm text-blue-200 hover:text-blue-300 transition-all duration-300 ease-in-out"
                  >
                    Belum punya akun? Daftar di sini
                  </Link>
                </div>
                {error && <div className="text-sm text-red-600">{error}</div>}
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
