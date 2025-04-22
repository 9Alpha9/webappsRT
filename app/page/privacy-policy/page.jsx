"use client";

import { motion } from "framer-motion";
import styles from "./styles.module.scss";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Informasi yang kami kumpulkan",
      content:
        "Kami dapat mengumpulkan informasi pribadi berikut saat Anda menggunakan layanan:",
      list: [
        "Nama Lengkap.",
        "NIK (Nomor Induk Kependudukan).",
        "Nomor Telepon.",
        "Tanggal Lahir.",
        "Jenis Kelamin.",
        "Alamat tinggal saat ini.",
        "Foto KTP.",
        "Foto KK.",
        "Data Keluarga.",
        "Data Pekerjaan.",
        "Dokumen Pendukung (misalnya: scan KTP, scan KK, surat rumah sakit, dan lain-lain).",
      ],
      content2:
        "Kami tidak akan mengumpulkan informasi pribadi lainnya, kecuali jika Anda memberikan persetujuan secara eksplisit untuk itu dan kami akan menjaga keamanan data anda.",
    },
    {
      title: "Tujuan Penggunaan Data",
      content:
        "Data yang Anda kirim ke dalam aplikasi website ini hanya digunakan untuk keperluan seperti:",
      list: [
        "Memproses pengajuan surat yang sedang Bapak/Ibu/ Saudara/i ajukan.",
        "Dokumentasi dan administrasi internal RT.",
        "Pelaporan ke kelurahan atau instansi terkait (jika diperlukan).",
      ],
    },
    {
      title: "Keamanan Data",
      content:
        "Data yang diberikan oleh Bapak/Ibu/ Saudara/i dalam website ini sangat dijaga untuk keamanannya:",
      list: [
        "Data yang diberikan disimpan kedalam sistem yang sangat aman dan rahasia.",
        "Akses ke data hanya diberikan kepada pihak yang berhak dan berwenang dan akses hanya terbatas didalam ruang lingkup wilayah RT 50 saja.",
        "Backup data dilakukan secara berkala untuk menjaga keamanan data.",
      ],
    },
    {
      title: "Hak Pemilikan Data",
      content:
        "Bapak/Ibu/ Saudara/i memiliki hak untuk meminta ke pengelolah website ini untuk menghapus data pribadi yang telah disimpan dalam sistem dan juga berhak untuk:",
      list: [
        "Melihat dan memeriksa data pribadi yang Bapak/Ibu/ Saudara/i kirimkan.",
        "Meminta koreksi data jika terdapat kesalahan.",
        "Mengajukan penghapusan data setelah proses administrasi selesai.",
      ],
    },
    {
      title: "Perubahan Kebijakan Privasi",
      content:
        "Kebijakan ini bisa berubah sewaktu-waktu. Pembaruan akan diumumkan melalui website resmi RT.",
    },
    {
      title: "Kontak",
      content:
        "Jika Bapak/Ibu/ Saudara/i memiliki pertanyaan atau komentar tentang kebijakan privasi ini, silakan hubungi kami melalui:",
      list: [
        "Email: -.",
        "Telepon: -.",
        "Alamat: Jl. Sekolahan, RT 50 RW 14, Kelurahan Sidokare, Kecamatan Sidokare, Kabupaten Sidoarjo, Jawa Timur, 61214.",
        "Pengelolah: Karang Taruna RT50 dan Ketua RT50.",
      ],
    },
    {
      title: "Penutup",
      content:
        "Terima kasih telah membaca kebijakan privasi ini. Kami berharap kebijakan ini dapat membantu Bapak/Ibu/ Saudara/i memahami bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Bapak/Ibu/ Saudara/i.",
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
        <span className={styles.contentTitle}>Privacy Policy</span>
        <div className={styles.contentIntroPrivacy}>
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
            <span className={styles.contentIntroPrivacyList}>
              <p>
                Berikut adalah informasi yang kami kumpulkan untuk menunjang
                keberhasilan dalam pengumpulan data anda yang selanjutnya kami
                akan menggunakan data anda untuk kepentingan yang telah disebut
                diatas, dan kami akan menjaga keamanan data anda:
              </p>
            </span>
          </span>
        </div>
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

export default PrivacyPolicy;
