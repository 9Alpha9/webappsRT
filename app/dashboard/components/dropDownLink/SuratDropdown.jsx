"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const SuratDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSurat, setSelectedSurat] = useState("Pilih Jenis Surat");

  const jenisSurat = ["Surat Kematian", "Surat Keterangan Kurang Mampu"];

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="text-gray-700">{selectedSurat}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {jenisSurat.map((surat, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedSurat(surat);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
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
