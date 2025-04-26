export const GA_MEASUREMENT_ID = "G-HQ5F1WHF0Y"; // Ganti dengan ID Google Analytics Anda

// Fungsi untuk mengirim pageview
export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Fungsi untuk mengirim event
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
