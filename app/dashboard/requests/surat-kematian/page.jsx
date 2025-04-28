"use client";
import { useState } from "react";
import React from "react";
import {
  UsersIcon,
  CheckBadgeIcon as CheckBadgeIconSolid,
  PencilIcon as PencilIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  InformationCircleIcon,
  CheckCircleIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import { umurList } from "./umurList";

const SuratKematian = () => {
  const [lastJob, setLastJob] = useState("");
  const [otherLastJob, setOtherLastJob] = useState("");
  const [isOtherLastJob, setIsOtherLastJob] = useState(false);

  const [showDialog, setShowDialog] = useState(false);

  const [formData, setFormData] = useState({
    namaLengkap: "",
    binBinti: "",
    tanggalLahir: "",
    nomorTelp: "",
    tempatLahir: "",
    agama: "",
    jenisKelamin: "",
    hari: "",
    waktuKematian: "",
    tanggalKematian: "",
    sebabAkibatKematian: "",
    pekerjaanTerakhir: "",
    kewarganegaraan: "",
    alamat: "",
  });

  // const [umur, setUmur] = useState("");

  const [waktuKematian, setWaktuKematian] = useState("");

  const waktuOptions = [
    { value: "subuh", label: "Subuh (03:00 - 05:00)" },
    { value: "pagi", label: "Pagi (05:00 - 11:00)" },
    { value: "siang", label: "Siang (11:00 - 15:00)" },
    { value: "sore", label: "Sore (15:00 - 18:00)" },
    { value: "malam", label: "Malam (18:00 - 03:00)" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isOtherLastJob) {
      setLastJob(e.target.value);
    }
  };

  const handleOtherLastJobChange = (e) => {
    setOtherLastJob(e.target.value);
    setFormData((prev) => ({
      ...prev,
      pekerjaanTerakhir: e.target.value,
    }));
  };

  const handleLastJobChange = (e) => {
    const selected = e.target.value;
    if (selected === "Lainnya") {
      setIsOtherLastJob(true);
      setLastJob("");
    } else {
      setIsOtherLastJob(false);
      setLastJob(selected);
      setOtherLastJob("");
    }
  };

  const lastJobOptions = [
    "Karyawan",
    "Wiraswasta",
    "Pengacara",
    "Dokter",
    "Pengusaha",
    "Pengajar",
    "TNI",
    "Polisi",
    "Pensiunan",
    "Lainnya",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implement API call
      console.log("Form data:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <title>Pengajuan Surat Kematian</title>
      <div className="bg-gray-100 p-5 rounded-lg">
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-gray-900/10 pb-4">
          <span className="block py-4 ">
            <h2 className="text-base/7 md:text-3xl font-semibold text-gray-900">
              Pengajuan Surat Kematian
            </h2>
            <p className="mt-2 md:text-xs lg:text-md text-xs text-gray-500 font-light md:max-w-md">
              Silakan isi formulir pengajuan surat kematian dengan data lengkap
              dan benar.
            </p>
          </span>
          <div className="informationDialogue">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6 cursor-pointer hover:bg-blue-100 transition-all duration-300 ease-in-out"
              onClick={() => setShowDialog(true)}
            >
              <div className="flex  items-center gap-3">
                <InformationCircleIcon className="h-6 w-6 text-blue-500" />
                <h3 className="text-xs md:text-md font-semibold text-blue-800">
                  Informasi Penting
                </h3>
              </div>
              <p className="mt-2 text-xs text-blue-600  md:hidden lg:hidden xl:block">
                Klik untuk melihat informasi lengkap.
              </p>
            </motion.div>

            <AnimatePresence>
              {showDialog && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 h-screen"
                  // onClick={() => setShowDialog(false)}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className=" bg-white fixed top-0 mt-18 p-6 rounded-lg shadow-xl max-w-xs md:max-w-2xl w-full mx-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative mb-4">
                      <span className="absolute top-0 right-0">
                        <button
                          onClick={() => setShowDialog(false)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <XMarkIcon className="h-6 w-6 cursor-pointer" />
                        </button>
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-2">
                          <PencilIconSolid className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-xs md:text-sm">
                            1. Pengisian Formulir
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 my-2">
                            Isi formulir pengajuan surat kematian dengan data
                            lengkap dan benar. Harap diperhatikan jika terdapat
                            data yang salah, maka surat pengajuan kematian akan
                            lama di proses mengingat pengurus dan Ketua RT akan
                            memverifikasi data yang telah diisi.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 rounded-full p-2">
                          <CheckBadgeIconSolid className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-xs md:text-sm">
                            2. Verifikasi Data
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 my-2">
                            Sistem akan secara otomatis memverifikasi data yang
                            telah diisi, jika ada data yang salah, maka surat
                            pengajuan kematian akan mengalami penundaan
                            pengajuan.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-2">
                          <UserIconSolid className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-xs md:text-sm">
                            3. Pengambilan Surat
                          </h3>
                          <p className="text-xs md:text-sm text-gray-600 my-2">
                            Surat pengajuan kematian dapat diambil atau
                            diserahkan secara langsung oleh Ketua RT 50 kepada
                            yang bersangkutan, setelah data yang di isi oleh
                            pemohon sesuai dengan data yang ada di keluarga
                            almarhum/almarhumah.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="border-b border-gray-900/10 pb-12 mt-18">
            <section className="my-6 sectionDateKematian border-b border-gray-900/10 pb-16">
              <span className="block font-bold text-gray-900 py-4 border-b border-gray-900/10">
                <h2>Hari / Tanggal Kematian Almarhum/Almarhumah</h2>
                <p className="text-sm/6 text-gray-400 font-light">
                  Silakan isi hari dan tanggal kematian dengan benar.
                </p>
              </span>
              <div className="dateKematian grid grid-cols-1 md:grid-cols-2 gap-6 col-span-3 mt-6">
                <div className="col-span-1">
                  <label
                    htmlFor="hari"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Hari
                  </label>
                  <div className="mt-2">
                    <input
                      id="hari"
                      name="hari"
                      type="text"
                      value={formData.hari}
                      onChange={handleInputChange}
                      required
                      placeholder="Senin / Soma"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="waktuKematian"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Waktu Kematian Almarhum/Almarhumah
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="waktuKematian"
                      name="waktuKematian"
                      value={waktuKematian}
                      onChange={(e) => setWaktuKematian(e.target.value)}
                      required
                      className="w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 appearance-none pr-10"
                    >
                      <option value="">Pilih Waktu Kematian</option>
                      {waktuOptions.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-black" />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="tanggalKematian"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Tanggal
                  </label>
                  <div className="mt-2">
                    <input
                      id="tanggalKematian"
                      name="tanggalKematian"
                      type="date"
                      value={formData.tanggalKematian}
                      onChange={handleInputChange}
                      required
                      placeholder="Masukkan tanggal kematian almarhum/almarhumah"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="lokasiKematian"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Lokasi Kematian Almarhum/Almarhumah
                  </label>
                  <div className="mt-2">
                    <input
                      id="lokasiKematian"
                      name="lokasiKematian"
                      type="text"
                      value={formData.lokasiKematian}
                      onChange={handleInputChange}
                      required
                      placeholder="Rumah Sakit, Puskesmas, atau tempat lainnya"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1 mt-6">
                  <span className="block font-bold text-gray-900 py-4 border-gray-900/10">
                    <h2>Nomor Telepon</h2>
                    <p className="text-sm/6 text-gray-400 font-light">
                      Silakan isi nomor telepon kerabat terdekat
                      almarhum/almarhumah.
                    </p>
                  </span>
                  <div className="col-span-1">
                    <label
                      htmlFor="nomorTelp"
                      className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                    >
                      Nomor Telepon / WhatsApp
                    </label>
                    <div className="mt-2">
                      <input
                        id="nomorTelp"
                        name="nomorTelp"
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        required
                        aria-required="true"
                        placeholder="Nomor kerabat terdekat"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        value={formData.nomorTelp}
                        onChange={(e) => {
                          if (e.target.value.length <= 12) {
                            handleInputChange(e);
                          }
                        }}
                        onKeyPress={(e) => {
                          if (!/[0-9]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="my-6 mt-18 sectionDataDiri">
              <span className="block font-bold text-gray-900 py-4 border-b border-gray-900/10">
                <h2>Informasi Data Diri Almarhum/Almarhumah</h2>
                <p className="text-sm/6 text-gray-400 font-light">
                  Silakan isi data diri almarhum/almarhumah dengan benar.
                </p>
              </span>
              <div className="dateKematian grid grid-cols-1 md:grid-cols-2 gap-6 col-span-3 mt-6">
                <div className="col-span-1">
                  <label
                    htmlFor="namaLengkap"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Nama Lengkap
                  </label>
                  <div className="mt-2">
                    <input
                      id="namaLengkap"
                      name="namaLengkap"
                      type="text"
                      value={formData.namaLengkap}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap almarhum/almarhumah"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="binBinti"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Bin / Binti
                  </label>
                  <div className="mt-2">
                    <input
                      id="binBinti"
                      name="binBinti"
                      type="text"
                      value={formData.binBinti}
                      onChange={handleInputChange}
                      required
                      placeholder="Masukkan bin/binti almarhum/almarhumah"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="jenisKelamin"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Jenis Kelamin
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="jenisKelamin"
                      name="jenisKelamin"
                      value={formData.jenisKelamin}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md bg-white px-3 py-[8.8px] text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 appearance-none pr-10"
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="agama"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Agama
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="agama"
                      name="agama"
                      value={formData.agama}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md bg-white px-3 py-[8.8px] text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 appearance-none pr-10"
                    >
                      <option value="">Pilih Agama</option>
                      <option value="Islam">Islam</option>
                      <option value="Kristen">Kristen</option>
                      <option value="Katolik">Katolik</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Buddha">Buddha</option>
                      <option value="Konghucu">Konghucu</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="tanggalLahir"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Tanggal / Bulan / Tahun Lahir
                  </label>
                  <div className="mt-2">
                    <input
                      id="tanggalLahir"
                      name="tanggalLahir"
                      type="date"
                      value={formData.tanggalLahir}
                      onChange={handleInputChange}
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="tempatLahir"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Tempat Lahir
                  </label>
                  <div className="mt-2">
                    <input
                      id="tempatLahir"
                      name="tempatLahir"
                      type="text"
                      value={formData.tempatLahir}
                      onChange={handleInputChange}
                      required
                      placeholder="Sidoarjo, Jawa Timur, Indonesia"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="usia"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Usia
                  </label>
                  <div className="mt-2">
                    <input
                      id="usia"
                      name="usia"
                      type="text"
                      value={formData.usia}
                      onChange={handleInputChange}
                      required
                      placeholder="70 Tahun"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="kewarganegaraan"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Kewarganegaraan
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="kewarganegaraan"
                      name="kewarganegaraan"
                      value={formData.kewarganegaraan}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md bg-white px-3 py-[8.8px] text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 appearance-none pr-10"
                    >
                      <option value="">Pilih Kewarganegaraan</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Asing">Asing</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black" />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="sebabAkibatKematian"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Sebab / Akibat Kematian
                  </label>
                  <div className="mt-2">
                    <input
                      id="sebabAkibatKematian"
                      name="sebabAkibatKematian"
                      type="text"
                      value={formData.sebabAkibatKematian}
                      onChange={handleInputChange}
                      placeholder="Optional"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="pekerjaanTerakhir"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Pekerjaan Terakhir
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="pekerjaanTerakhir"
                      name="pekerjaanTerakhir"
                      value={isOtherLastJob ? "Lainnya" : lastJob}
                      onChange={handleLastJobChange}
                      required
                      className="w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 appearance-none pr-10"
                    >
                      <option value="">Pilih Pekerjaan</option>
                      {lastJobOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-black" />
                  </div>

                  {isOtherLastJob && (
                    <div className="mt-2">
                      <input
                        type="text"
                        value={otherLastJob}
                        onChange={handleOtherLastJobChange}
                        placeholder="Masukkan pekerjaan lainnya"
                        className="w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  )}
                </div>

                <div className="col-span-1 md:col-span-2">
                  <label
                    htmlFor="alamat"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Alamat
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="alamat"
                      name="alamat"
                      type="text"
                      value={formData.alamat}
                      onChange={handleInputChange}
                      required
                      placeholder="Masukkan Alamat"
                      className=" w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 resize-none h-32 md:h-24 overflow-y-auto"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="mt-6 flex items-center justify-start  gap-x-6">
            <button
              type="submit"
              className="rounded-md cursor-pointer bg-dashboard-button-primary px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-dashboard-button-hover transition-all duration-300 ease-in-out"
            >
              Ajukan SKK
            </button>
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900 cursor-pointer"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SuratKematian;
