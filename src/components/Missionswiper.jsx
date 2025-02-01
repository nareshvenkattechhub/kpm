import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "bootstrap/dist/css/bootstrap.min.css";

const missionData = [
  {
    title: "Food",
    description:
      "Food is to provide complete and balanced nutrition to every Indian i.e. men, women, and children.",
    cardGradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach gradient
    titleGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
    buttonGradient: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise gradient
  },
  {
    title: "Housing",
    description:
      "Ensuring every Indian has access to safe, affordable, and comfortable housing.",
    cardGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    titleGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
    buttonGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
  },
  {
    title: "Education",
    description:
      "Providing quality education and skill development for a stronger future.",
    cardGradient: "linear-gradient(135deg, #4facfe, #00f2fe)", // Blue-Cyan gradient
    titleGradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach gradient
    buttonGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
  },
  {
    title: "Healthcare",
    description:
      "Making healthcare accessible and affordable for all citizens of India.",
    cardGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
    titleGradient: "linear-gradient(135deg, #43e97b, #38f9d7)", // Green-Turquoise gradient
    buttonGradient: "linear-gradient(135deg, #ff7e5f, #feb47b)", // Orange-Peach gradient
  },
  {
    title: "Economic Growth",
    description:
      "Strengthening India's economy through global trade and innovation.",
    cardGradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)", // Pink-Rose gradient
    titleGradient: "linear-gradient(135deg, #667eea, #764ba2)", // Purple-Blue gradient
    buttonGradient: "linear-gradient(135deg, #ff6a00, #ee0979)", // Orange-Red gradient
  },
];

function MissionSwiper() {
  return (
    <section className="container-fluid my-5">
      <h2 className="text-center fw-bold text-warning" style={{ fontSize: "60px", marginBottom: "30px" }}>
        Our Mission
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4},
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="py-4"
      >
        {missionData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="card shadow-lg text-center p-4"
              style={{
                background: item.cardGradient,
                minHeight: "350px", // Reduced card height
                maxHeight: "400px",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="card-body d-flex flex-column">
                {/* Title Section with Gradient */}
                <div
                  className="ms-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "240px",
                    height: "55px",
                    background: item.titleGradient,
                    color: "black",
                    fontSize: "22px",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.title}
                </div>

                {/* Description */}
                <p className="card-text fs-5 text-light" style={{ lineHeight: "40px", fontWeight: "400" }}>
                  {item.description}
                </p>

                {/* Styled Button */}
                <button
                  className="btn btn-light mt-auto fs-5 py-2 px-4"
                  style={{
                    background: item.buttonGradient,
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "25px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "background 0.3s ease, transform 0.3s ease",
                    padding: "12px 30px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MissionSwiper;
