"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  InformationCircleIcon,
  XMarkIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  PencilIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import {
  UsersIcon,
  CheckBadgeIcon as CheckBadgeIconSolid,
  PencilIcon as PencilIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";

const SuratKeteranganKurangMampu = () => {
  const [job, setJob] = useState("");
  const [otherJob, setOtherJob] = useState("");
  const [isOther, setIsOther] = useState(false);

  const [rupiah, setRupiah] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    nomorNIK: "",
    tanggalLahir: "",
    tempatLahir: "",
    agama: "",
    pekerjaan: "",
    alamat: "",
    totalPenghasilan: "",
    status: "",
    fotoRumah: "",
    alasanPengajuanSKTM: "",
  });

  const formatRupiah = (angka) => {
    const numberString = angka.replace(/[^,\d]/g, "").toString();
    const split = numberString.split(",");
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
    return rupiah;
  };

  const handleChange = (e) => {
    setRupiah(formatRupiah(e.target.value));
  };

  const handleOtherJobChange = (e) => {
    setOtherJob(e.target.value);
    setFormData((prev) => ({
      ...prev,
      pekerjaan: e.target.value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isOther) {
      setJob(e.target.value);
    }
  };

  const jobOptions = [
    "Pelajar",
    "Mahasiswa",
    "Karyawan",
    "Wirausaha",
    "Lainnya",
  ];

  const handleJobChange = (e) => {
    const selected = e.target.value;
    if (selected === "Lainnya") {
      setIsOther(true);
      setJob("");
    } else {
      setIsOther(false);
      setJob(selected);
      setOtherJob("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // TODO: Implement API call
      console.log("Form data:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <title>Pengajuan Surat Keterangan Tidak Mampu</title>
      <div className="bg-gray-100 p-5 rounded-lg">
        <div className="flex items-center justify-between border-b border-gray-900/10 pb-4 md:flex-col lg:flex-row flex-col">
          <span className="block py-4 ">
            <h2 className="text-base/7 md:text-3xl font-semibold text-dashboard-primary">
              Pengajuan Surat Keterangan Tidak Mampu
            </h2>
            <p className="mt-2 md:text-xs lg:text-md text-xs text-gray-500 font-light md:max-w-md">
              Silakan isi formulir pengajuan surat tidak mampu dengan data
              lengkap dan benar.
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
              <div className="flex items-center gap-3 ">
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
                            Isi formulir pengajuan surat kurang mampu dengan
                            benar dan lengkap. Harap diperhatikan jika terdapat
                            data yang salah, maka surat pengajuan kurang mampu
                            akan lama di proses mengingat pengurus dan Ketua RT
                            akan memverifikasi data yang telah diisi.
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
                            Setelah data diisi, maka surat pengajuan kurang
                            mampu akan di proses oleh pengurus dan Ketua RT.
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
                            Surat pengajuan kurang mampu dapat diambil atau
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
        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <section className="my-6 border-b border-gray-900/10 pb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label
                    htmlFor="nama"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Nama Lengkap
                  </label>
                  <div className="mt-2">
                    <input
                      id="nama"
                      name="nama"
                      type="text"
                      value={formData.nama}
                      onChange={handleInputChange}
                      required
                      placeholder="Masukkan Nama Lengkap"
                      className=" w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="nomorNIK"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    NIK
                  </label>
                  <div className="mt-2">
                    <input
                      id="nomorNIK"
                      name="nomorNIK"
                      type="number"
                      pattern="[0-9]*"
                      // maxLength={16}
                      inputMode="numeric"
                      required
                      aria-required="true"
                      placeholder="Nomor NIK"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      value={formData.nomorNIK}
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
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="tanggalLahir"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Tanggal Lahir
                  </label>
                  <div className="mt-2">
                    <input
                      id="tanggalLahir"
                      name="tanggalLahir"
                      type="date"
                      value={formData.tanggalLahir}
                      onChange={handleInputChange}
                      required
                      placeholder="Masukkan tanggal lahir almarhum/almarhumah"
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
                      placeholder="Masukkan Tempat Lahir"
                      className="w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
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
                      placeholder="Masukkan Agama"
                      className=" w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 appearance-none pr-10"
                    >
                      <option value="SelectAgama">Pilih Agama</option>
                      <option value="Islam">Islam</option>
                      <option value="Kristen">Kristen</option>
                      <option value="Katolik">Katolik</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-black" />
                  </div>
                </div>

                <div className="col-span-1">
                  <label
                    htmlFor="pekerjaan"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Pekerjaan
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="pekerjaan"
                      name="pekerjaan"
                      value={isOther ? "Lainnya" : job}
                      onChange={handleJobChange}
                      required
                      className="w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 appearance-none pr-10"
                    >
                      <option value="">Pilih Pekerjaan</option>
                      {jobOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-black" />
                  </div>

                  {isOther && (
                    <div className="mt-2">
                      <input
                        type="text"
                        value={otherJob}
                        onChange={handleOtherJobChange}
                        placeholder="Masukkan pekerjaan lainnya"
                        className="w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  )}
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="status"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Status
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      placeholder="Masukkan Status"
                      className=" w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 appearance-none pr-10"
                    >
                      <option value="SelectStatus">Pilih Status</option>
                      <option value="Menikah">Menikah</option>
                      <option value="Belum Menikah">Belum Menikah</option>
                      <option value="Cerai Mati">Cerai Mati</option>
                      <option value="Cerai Hidup">Cerai Hidup</option>
                    </select>
                    <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-black" />
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="totalPenghasilan"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Rata-rata Total Penghasilan
                  </label>
                  <div className="mt-2 relative overflow-hidden rounded-md">
                    <input
                      id="totalPenghasilan"
                      name="totalPenghasilan"
                      type="text"
                      value={rupiah}
                      onChange={handleChange}
                      required
                      placeholder="Penghasilan perbulan"
                      className=" w-full rounded-md bg-white px-12 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-dashboard-button-primary px-2 py-2 items-center justify-center flex">
                      Rp
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <label
                    htmlFor="fotoRumah"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Upload Foto Rumah
                  </label>
                  <div className="mt-2 relative">
                    <input
                      id="fotoRumah"
                      name="fotoRumah"
                      value={formData.fotoRumah}
                      onChange={handleInputChange}
                      required
                      type="file"
                      accept="image/*"
                      placeholder="Masukkan Foto Rumah"
                      className=" w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 appearance-none pr-10"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Ukuran file maksimal 10MB dan format file jpg, jpeg, png!
                    </p>
                  </div>
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
                <div className="col-span-1 md:col-span-2">
                  <label
                    htmlFor="alasanPengajuanSKTM"
                    className="block text-sm/6 font-medium text-gray-900 after:text-red-500 after:content-['*'] after:ml-0.5"
                  >
                    Alasan Pengajuan SKTM
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="alasanPengajuanSKTM"
                      name="alasanPengajuanSKTM"
                      type="text"
                      value={formData.alasanPengajuanSKTM}
                      onChange={handleInputChange}
                      required
                      placeholder="Masukkan Alasan Pengajuan SKTM"
                      className=" w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 resize-none h-32 md:h-24 overflow-y-auto"
                    />
                  </div>
                </div>
              </div>
            </section>
            <div className="mt-6 flex items-center justify-start gap-x-6">
              <button
                type="submit"
                className="rounded-md cursor-pointer bg-dashboard-button-primary px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-dashboard-button-hover transition-all duration-300 ease-in-out"
              >
                Ajukan SKTM
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
      </div>
    </>
  );
};

export default SuratKeteranganKurangMampu;
