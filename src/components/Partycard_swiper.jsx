import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const cardBackgroundColors = [
  "#f0f8ff", "#faebd7", "#f5f5dc", "#ffe4e1", "#e6e6fa",
  "#f0ffff", "#f5f5f5", "#fff0f5", "#fffaf0", "#e0ffff"
];

const translations = [
  { lang: "en", partyName: "KPM", slogan: "KARSHIKA PRAJA MARG", joinButton: "Join the Party" },
  { lang: "as", partyName: "কে পি এম", slogan: "কৃষক প্ৰজা মাৰ্গ", joinButton: "পাৰ্টিত যোগ দিন" },
  { lang: "bn", partyName: "কে পি এম", slogan: "কৃষক প্ৰজা মাৰ্গ", joinButton: "পাটিত যোগ দিন" },
  { lang: "gu", partyName: "કે પી એમ", slogan: "કૃષક પ્રજા માર્ગ", joinButton: "પાર્ટીમાં જોડાઓ" },
  { lang: "kn", partyName: "ಕೆ ಪಿ ಎಂ", slogan: "ಕೃಷಿಕ ಪ್ರಜಾ ಮಾರ್ಗ", joinButton: "ಪಾರ್ಟಿಗೆ ಸೇರಿ" },
  { lang: "ml", partyName: "കെ പി എം", slogan: "കർഷക പ്രജാ മാർഗ്", joinButton: "പാർട്ടിയിൽ ചേരൂ" },
  { lang: "mr", partyName: "के पी एम", slogan: "कृषक प्रजा मार्ग", joinButton: "पार्टीमध्ये सामील व्हा" },
  { lang: "ne", partyName: "के पी एम", slogan: "कृषक प्रजाका मार्ग", joinButton: "पार्टीमा सामेल हुनुहोस्" },
  { lang: "or", partyName: "କେ ପି ଏମ", slogan: "କୃଷକ ପ୍ରଜା ମାର୍ଗ", joinButton: "ପାର୍ଟିକୁ ଯୋଗ ଦିଅ" },
  { lang: "pa", partyName: "ਕੇ ਪੀ ਐਮ", slogan: "ਕ੍ਰਿਸ਼ਕ ਪ੍ਰਜਾ ਮਾਰਗ", joinButton: "ਪਾਰਟੀ ਵਿਚ ਸ਼ਾਮਲ ਹੋਵੋ" },
  { lang: "ta", partyName: "கே பி எம்", slogan: "கிருஷி பிரஜா பாதை", joinButton: "பார்ட்டியில் சேருங்கள்" },
  { lang: "te", partyName: "కె పి ఎం", slogan: "కర్ష్క ప్రజా మార్గం", joinButton: "పార్టీలో చేరండి" }
];

function Partycard_swiper() {
  return (
    <Swiper
      spaceBetween={30}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      loop={true}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        320: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }}
    >
      {translations.map((item, i) => (
        <SwiperSlide key={i} className="card-slide">
          <div
            className="card shadow-lg border-0 h-100 text-center"
            style={{
              background: `linear-gradient(to right, ${cardBackgroundColors[i % cardBackgroundColors.length]}, #ffffff)`,
              borderRadius: "15px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              padding: "20px"
            }}
          >
            <div className="card-body d-flex flex-column align-items-center justify-content-between">
              {/* Party Name inside a Circular Badge */}
              <div
                className="mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#007bff",
                  color: "white",
                  fontSize: "22px",
                  fontWeight: "bold",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textTransform: "uppercase"
                }}
              >
                {item.partyName}
              </div>

              <h5 className="card-subtitle fs-5 text-muted">{item.slogan}</h5>
              
              <a
                href="/join"
                className="btn btn-primary btn-lg mt-3 px-4"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  transition: "background 0.3s ease"
                }}
              >
                {item.joinButton}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Partycard_swiper;
