"use client";

import { motion } from "framer-motion";
import ConstructionIMG from "../public/assets/img/construction_sushi_scallops_AI.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div
        data-page="not-found"
        className="flex flex-col items-center justify-center overflow-hidden scrollbar-hide"
      >
        <Image
          quality={100}
          objectFit="cover"
          src={ConstructionIMG}
          alt="Construction"
          className="w-screen h-screen object-cover overflow-hidden"
        />
        <div className="absolute flex flex-col items-center justify-center w-full h-full  bg-black/50  overflow-hidden z-10">
          <div className="flex flex-row items-center justify-center relative overflow-hidden opacity-60">
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [0, -22, 0] }}
              transition={{
                duration: 3.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white xl:text-[18rem] text-[10rem] font-bold mb-4 block"
            >
              4
            </motion.span>
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [0, -22, 0] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white xl:text-[15rem] text-[10rem] font-bold mb-4 block"
            >
              0
            </motion.span>
            <motion.span
              initial={{ y: 0 }}
              animate={{ y: [0, -22, 0] }}
              transition={{
                duration: 3.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white xl:text-[18rem] text-[10rem] font-bold mb-4 block"
            >
              4
            </motion.span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="xl:text-4xl text-xl font-bold mb-4">
              Oops! Halaman tidak ditemukan
            </h1>
            <p className="xl:text-lg text-md mb-8">
              Sepertinya kamu tersesat, ayo kembali ke beranda.
            </p>
            <a
              href="/"
              className="text-white bg-dashboard-button-primary hover:bg-dashboard-button-hover transition-all duration-300 ease-in-out px-6 py-3 rounded-full xl:text-md text-xs"
            >
              Kembali ke Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
