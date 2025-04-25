"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const TermsAndCondition = () => {
  const sections = [
    {
      title: "Pendahulu",
      content:
        "Selamat datang di website resmi RT 50, Kelurahan Sidokare, Perumahan Pondok Sidokare Indah. Situs ini dikelola oleh Karang Taruna RT 50 dan Ketua RT 50 untuk memberikan kemudahan akses informasi serta layanan pengajuan surat secara daring kepada warga. Dengan mengakses atau menggunakan situs ini, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku.",
    },
    {
      title: "Tujuan Website",
      content: "Website ini bertujuan untuk:",
      list: [
        "Menyediakan informasi resmi seputar kegiatan RT 50.",
        "Memfasilitasi pengajuan surat-surat seperti surat pengantar, surat kematian, surat keterangan tidak mampu, dan lain-lain.",
        "Menjadi pusat dokumentasi digital RT 50 (berita, agenda, laporan, dll).",
      ],
    },
    {
      title: "Hak dan Kewajiban Pengguna",
      list: [
        "Pengguna wajib memberikan data yang benar dan dapat dipertanggungjawabkan saat mengajukan layanan surat menyurat.",
        "Pengguna bertanggung jawab penuh atas informasi yang diunggah melalui formulir atau fitur interaktif di situs ini.",
        "Pengguna dilarang menggunakan situs ini untuk tindakan yang melanggar hukum, merugikan pihak lain, atau menyebarkan informasi palsu.",
      ],
    },
    {
      title: "Hak dan Kewajiban Pengelola (Karang Taruna & Ketua RT)",

      list: [
        "Pengelola berhak melakukan pembaruan, perbaikan, atau penutupan sementara/permanen situs kapan saja jika diperlukan.",
        "Pengelola akan menjaga kerahasiaan data pribadi pengguna sesuai dengan standar keamanan yang wajar dan tidak akan membagikan data kepada pihak ketiga tanpa izin.",
        "Pengelola tidak bertanggung jawab atas kerugian yang timbul akibat kesalahan teknis di luar kendali kami.",
      ],
    },
    {
      title: "Kebijakan Privasi",
      content:
        "Data pribadi yang dikumpulkan, seperti nama, NIK, dan kontak, hanya digunakan untuk keperluan verifikasi dan pengolahan surat. Data tidak akan disebarluaskan tanpa persetujuan tertulis dari pemilik data.",
    },
    {
      title: "Perubahan Ketentuan",
      content:
        "Syarat dan ketentuan ini dapat berubah sewaktu-waktu. Perubahan akan diumumkan melalui website. Disarankan bagi pengguna untuk memeriksa halaman ini secara berkala.",
    },
    {
      title: "Hukum yang Berlaku",
      content:
        "Ketentuan ini tunduk dan ditafsirkan berdasarkan hukum yang berlaku di wilayah Republik Indonesia.",
    },
    {
      title: "Kontak",
      content: "Untuk pertanyaan atau masukan, silakan hubungi:",
      list: [
        "Email: -.",
        "Telepon: -.",
        "Alamat: Jl. Sekolahan, RT 50 RW 14, Kelurahan Sidokare, Kecamatan Sidokare, Kabupaten Sidoarjo, Jawa Timur, 61214.",
        "Pengelolah: Karang Taruna RT50 dan Ketua RT50.",
      ],
    },
  ];

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        duration: 1.5,
        delay: 0.8,
        ease: [1, 0.06, 0.22, 0.83],
      }}
    >
      <div className={styles.content}>
        <span className={styles.contentTitle}>
          Syarat dan Ketentuan (Terms and Conditions)
        </span>
        {/* <div className={styles.contentIntroTermsAndcondition}>
          <span>
            <strong>
              RT50 RW14 - Kelurahan Sidokare, Perumahan Pondok Sidokare Indah.
            </strong>{" "}
            Kami sangat menghargai privasi Anda selama atau aktif dalam
            penggunaan situs atau website RT ini. Website ini (domain website)
            dikelola oleh Karang Taruna{" "}
            <strong>RT 50 RW 14 dan Ketua RT</strong>, dan digunakan untuk
            memfasilitasi pengajuan surat-surat administratif secara online,
            seperti Surat untuk Keterangan Kematian, Surat untuk Keterangan
            Tidak Mampu, Surat untuk Kepentingan di Bidang Usaha, dan pengurusan
            surat lainnya. Data yang anda berikan akan kami simpan kedalam
            sistem kami yang ada di Database aplikasi ini.
            <span className={styles.contentIntroTermsAndconditionList}>
              <p>
                Berikut adalah informasi yang kami kumpulkan untuk menunjang
                keberhasilan dalam pengumpulan data anda yang selanjutnya kami
                akan menggunakan data anda untuk kepentingan yang telah disebut
                diatas, dan kami akan menjaga keamanan data anda:
              </p>
            </span>
          </span>
        </div> */}
        {sections.map((section, index) => (
          <div key={index} className={styles.contentItem}>
            <h2 className={styles.contentItemTitle}>
              {index + 1}. {section.title}
            </h2>
            <p className={styles.contentItemContent}>{section.content}</p>
            {section.list && (
              <div className={styles.listItems}>
                <ul className={styles.contentItemList}>
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <p className={styles.contentItemSection}>{section.content2}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TermsAndCondition;
