"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SuratDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSurat, setSelectedSurat] = useState("Pilih Jenis Surat");

  const jenisSurat = [
    "Surat Kematian",
    "Surat Keterangan Kurang Mampu",
    "Surat Keterangan Usaha",
    "Surat Keterangan Belum Menikah",
    "Surat Keterangan Pindah",
  ];

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-sm bg-slate-600 border border-gray-300 rounded-lg hover:bg-slate-700 focus:outline-none"
      >
        <span className="text-gray-700">{selectedSurat}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-slate-400 border border-gray-300 rounded-lg shadow-lg">
          {jenisSurat.map((surat, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedSurat(surat);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-slate-400 first:rounded-t-lg last:rounded-b-lg"
            >
              {surat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuratDropdown;
