"use client";

import React, { useState, useMemo } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  TrashIcon,
  PencilIcon,
  InformationCircleIcon,
  XMarkIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/solid";

import { motion, AnimatePresence } from "framer-motion";

const UserData = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [formData, setFormData] = useState({
    nik: "",
    telepon: "",
  });
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // Data contoh
  const [data, setData] = useState([
    {
      id: 1,
      nama: "John Doe",
      nik: "1234567890123456",
      alamat: "Jl. Contoh No. 123",
      blokRumah: "AI 01",
    },
    {
      id: 2,
      nama: "Jane Smith",
      nik: "6543210987654321",
      alamat: "Jl. Sample No. 456",
      blokRumah: "AI 02",
    },
    {
      id: 3,
      nama: "Brim",
      nik: "98766423681263867",
      alamat: "Jl. Sample No. 234",
      blokRumah: "AI 03",
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Filter dan sort data
  const filteredAndSortedData = useMemo(() => {
    // Filter data berdasarkan search query
    let filteredData = data.filter((item) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        item.nama.toLowerCase().includes(searchLower) ||
        item.nik.toLowerCase().includes(searchLower) ||
        item.alamat.toLowerCase().includes(searchLower) ||
        item.blokRumah.toLowerCase().includes(searchLower)
      );
    });

    // Sort data
    if (sortConfig.key) {
      filteredData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }

    return filteredData;
  }, [data, searchQuery, sortConfig]);

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <ChevronUpIcon className="w-4 h-4 text-gray-400" />;
    }
    return sortConfig.direction === "ascending" ? (
      <ChevronUpIcon className="w-4 h-4 text-blue-500" />
    ) : (
      <ChevronDownIcon className="w-4 h-4 text-blue-500" />
    );
  };

  return (
    <>
      <title>Data Warga RT50</title>
      <div className="bg-gray-100 p-5 rounded-lg">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <span className="text-dashboard-primary">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
              className="text-2xl font-bold"
            >
              Data Warga RT50
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeInOut" }}
              className="text-sm py-2 text-gray-500"
            >
              Silakan cari data warga berdasarkan nama, Nik/Ktp, Alamat rumah,
              atau Blok rumah.
            </motion.p>
          </span>
          <div className="informationDialogue max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeInOut" }}
              className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-all duration-300 ease-in-out mb-6 cursor-pointer"
              onClick={() => setShowDialog(true)}
            >
              <div className="flex items-center gap-3">
                <InformationCircleIcon className="h-6 w-6 text-blue-500" />
                <h3 className="text-md font-regular text-blue-800">
                  Informasi penting
                </h3>
              </div>
              {/* <p className="mt-2 text-xs text-blue-600">Klik untuk melihat.</p> */}
            </motion.div>

            <AnimatePresence>
              {showDialog && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="rounded-md fixed inset-0 bg-black/70 flex items-center justify-center z-50 h-screen"
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
                      {/* <h2 className="text-md md:text-xl font-semibold">
                        Informasi Data Warga RT50
                      </h2> */}
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
                          <UserGroupIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            1. Data Penduduk RT 50
                          </h3>
                          <p className="text-sm text-gray-600 my-2">
                            Data penduduk RT 50 adalah data warga yang terdaftar
                            di RT 50. Data ini digunakan untuk melakukan
                            pencarian data warga berdasarkan Nama, Nik/Ktp,
                            Alamat rumah, atau Blok rumah.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-red-100 rounded-full p-2">
                          <XMarkIcon className="h-5 w-5 text-red-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            2. Data Tidak Ada atau Belum Terdaftar
                          </h3>
                          <p className="text-sm text-gray-600 my-2">
                            Apabila data yang Anda cari tidak ada atau belum
                            terdaftar, silakan hubungi Ketua RT 50 atau
                            Sekretaris RT 50. Ketika sudah terdaftar, silakan
                            melakukan pencarian data warga berdasarkan Nama,
                            Nik/Ktp, Alamat rumah, atau Blok rumah.
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
        <div className="mt-4">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            className="mb-4"
          >
            <input
              type="text"
              placeholder="Cari data warga..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </motion.div>

          {/* Responsive Table Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 1.4, ease: "easeInOut" }}
            className="overflow-x-auto bg-white rounded-lg shadow"
          >
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {["nama", "nik/ktp", "alamat", "Blok Rumah"].map(
                        (header) => (
                          <th
                            key={header}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                            onClick={() => requestSort(header)}
                          >
                            <div className="flex items-center space-x-1">
                              <span>
                                {header.charAt(0).toUpperCase() +
                                  header.slice(1)}
                              </span>
                              {getSortIcon(header)}
                            </div>
                          </th>
                        )
                      )}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredAndSortedData.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.nama}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.nik}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="max-w-xs overflow-hidden text-ellipsis">
                            {item.alamat}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.blokRumah}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              <button
                                onClick={() => setShowModal(true)}
                                className="font-medium hover:bg-dashboard-button-hover transition-all duration-300 ease-in-out cursor-pointer bg-dashboard-button-primary text-white px-4 py-2 rounded-lg"
                              >
                                <span className="flex items-center space-x-2">
                                  <PencilIcon className="w-4 h-4" />
                                  <span className="block">Edit</span>
                                </span>
                              </button>
                            </div>
                            <div className="flex items-center">
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="font-medium hover:bg-red-700 transition-all duration-300 ease-in-out cursor-pointer bg-red-800 text-white px-4 py-2 rounded-lg"
                              >
                                <span className="flex items-center space-x-2">
                                  <TrashIcon className="w-4 h-4" />
                                  <span className="block">Hapus</span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Mobile View (Card Layout) */}
          {/* <div className="md:hidden mt-4">
            {filteredAndSortedData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow mb-4 p-4"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Nama
                    </span>
                    <span className="text-sm text-gray-900">{item.nama}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      NIK
                    </span>
                    <span className="text-sm text-gray-900">{item.nik}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Alamat
                    </span>
                    <span className="text-sm text-gray-900">{item.alamat}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Telepon
                    </span>
                    <span className="text-sm text-gray-900">
                      {item.telepon}
                    </span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full text-blue-600 hover:text-blue-900 font-medium text-sm"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
            className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center">
              <span className="text-sm text-gray-700">
                Menampilkan {filteredAndSortedData.length} dari {data.length}{" "}
                data
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 md:text-sm text-xs cursor-pointer">
                Prev
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 md:text-sm text-xs cursor-pointer">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 md:text-sm text-xs cursor-pointer">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 md:text-sm text-xs cursor-pointer">
                3
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 md:text-sm text-xs cursor-pointer">
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 transition-opacity bg-black/50 bg-opacity-75"
              />

              {/* Modal Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative  inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left transition-all bg-white shadow-xl rounded-2xl justify-center align-middle translate-y-0 md:translate-y-80"
              >
                <div className="mt-2">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Edit Data Warga
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nama
                      </label>
                      <input
                        type="text"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        NIK
                      </label>
                      <input
                        name="nik"
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        required
                        className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Alamat
                      </label>
                      <textarea
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        rows="3"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Telepon
                      </label>
                      <input
                        name="telepon"
                        type="number"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        required
                        className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-800 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        value={formData.telepon}
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

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 cursor-pointer"
                  >
                    Simpan
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserData;
