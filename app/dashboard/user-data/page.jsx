"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  TrashIcon,
  PencilIcon,
  InformationCircleIcon,
  XMarkIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/solid";

import { motion, AnimatePresence } from "framer-motion";

const UserData = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
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
      telepon: "081234567890",
      dasaWisma: "Dasa Wisma 1",
    },
    {
      id: 2,
      nama: "Jane Smith",
      nik: "6543210987654321",
      alamat: "Jl. Sample No. 456",
      telepon: "087654321098",
      dasaWisma: "Dasa Wisma 2",
    },
    {
      id: 3,
      nama: "Alice Johnson",
      nik: "9876543210987654",
      alamat: "Jl. Test No. 789",
      telepon: "089876543210",
      dasaWisma: "Dasa Wisma 3",
    },
    {
      id: 4,
      nama: "Bob Wilson",
      nik: "4567890123456789",
      alamat: "Jl. Demo No. 321",
      telepon: "082345678901",
      dasaWisma: "Dasa Wisma 3",
    },
    {
      id: 5,
      nama: "Carol Brown",
      nik: "7890123456789012",
      alamat: "Jl. Sample No. 654",
      telepon: "085678901234",
      dasaWisma: "Dasa Wisma 1",
    },
    {
      id: 6,
      nama: "David Lee",
      nik: "2345678901234567",
      alamat: "Jl. Test No. 987",
      telepon: "088901234567",
      dasaWisma: "Dasa Wisma 3",
    },
    {
      id: 7,
      nama: "Eve Taylor",
      nik: "5678901234567890",
      alamat: "Jl. Demo No. 147",
      telepon: "083456789012",
      dasaWisma: "Dasa Wisma 2",
    },
    {
      id: 8,
      nama: "Frank Miller",
      nik: "8901234567890123",
      alamat: "Jl. Sample No. 258",
      telepon: "086789012345",
      dasaWisma: "Dasa Wisma 1",
    },
    {
      id: 9,
      nama: "Grace White",
      nik: "3456789012345678",
      alamat: "Jl. Test No. 369",
      telepon: "081234567890",
      dasaWisma: "Dasa Wisma 2",
    },
    {
      id: 10,
      nama: "Henry Clark",
      nik: "6789012345678901",
      alamat: "Jl. Demo No. 741",
      telepon: "084567890123",
      dasaWisma: "Dasa Wisma 3",
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
        item.telepon.toLowerCase().includes(searchLower) ||
        item.dasaWisma.toLowerCase().includes(searchLower)
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

  // Hitung total halaman
  const totalPages = Math.ceil(filteredAndSortedData.length / entriesPerPage);

  // Dapatkan data untuk halaman saat ini
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    return filteredAndSortedData.slice(startIndex, endIndex);
  }, [filteredAndSortedData, currentPage, entriesPerPage]);

  // Reset halaman saat mengubah entries per page atau search query
  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage, searchQuery]);

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
              className="mt-2 md:text-xs lg:text-md text-xs text-gray-500 font-light md:max-w-md"
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
                <h3 className="text-xs font-semibold text-blue-800 whitespace-nowrap">
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
          {/* Search and Entries Container */}
          <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Search Bar */}
            <div className="w-full sm:w-1/3 relative overflow-hidden rounded-lg">
              <input
                type="text"
                placeholder="Cari data warga..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-14 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-0 top-0 h-full flex items-center justify-center bg-dashboard-primary-color p-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-white" />
              </div>
            </div>

            {/* Entries Per Page */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Tampilkan</span>
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(Number(e.target.value));
                }}
                className="px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[10, 25, 50, 100].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <span className="text-sm text-gray-600">entries</span>
            </div>
          </div>
          {/* Responsive Table Container */}
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {[
                        "No",
                        "nama",
                        "nik/ktp",
                        "alamat",
                        "telepon",
                        "Dasa Wisma",
                      ].map((header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 whitespace-nowrap"
                          onClick={() => requestSort(header)}
                        >
                          <div className="flex items-center space-x-1">
                            <span>
                              {header.charAt(0).toUpperCase() + header.slice(1)}
                            </span>
                            {getSortIcon(header)}
                          </div>
                        </th>
                      ))}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedData.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-black/5 transition-all duration-700 ease-in-out"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.id}.
                        </td>
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
                          {item.telepon}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.dasaWisma}
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
          </div>

          {/* Pagination */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-700">
                Menampilkan{" "}
                {filteredAndSortedData.length > 0
                  ? (currentPage - 1) * entriesPerPage + 1
                  : 0}{" "}
                sampai{" "}
                {Math.min(
                  currentPage * entriesPerPage,
                  filteredAndSortedData.length
                )}{" "}
                dari {filteredAndSortedData.length} data
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1 || totalPages === 0}
                className={`px-3 py-1 rounded-md  ${
                  currentPage === 1 || totalPages === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md cursor-pointer"
                } text-sm`}
              >
                Sebelumnya
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? "bg-dashboard-button-primary text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  } text-sm cursor-pointer`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages || totalPages === 0}
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages || totalPages === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md cursor-pointer"
                } text-sm`}
              >
                Selanjutnya
              </button>
            </div>
          </div>
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
