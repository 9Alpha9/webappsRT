export const MetaData = {
  title: {
    default: "Website Resmi RT 50",
    template: "%s | RT 50",
  },
  description: "Website Resmi RT 50 – Profil, Agenda & Berita Warga",
  keywords: ["RT50", "RT 50", "agenda warga", "berita RT"],
  authors: [{ name: "Ketua RT 50", url: "https://rt50.example.com" }],
  openGraph: {
    title: "RT 50",
    description: "Website Resmi RT 50 – Profil, Agenda & Berita Warga",
    url: "https://rt50.example.com",
    siteName: "RT 50",
    images: [
      {
        url: "https://rt50.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RT 50 Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RT 50",
    description: "Website Resmi RT 50 – Profil, Agenda & Berita Warga",
    images: ["https://rt50.example.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};
