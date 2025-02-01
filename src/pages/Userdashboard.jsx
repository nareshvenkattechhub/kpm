import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook, FaTwitter, FaWhatsapp, FaDownload, FaShare } from "react-icons/fa";

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [showShare, setShowShare] = useState(false);
  const cardRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "membership_card.png";
      link.click();
    });
  };

  return (
    <div className="container my-5">
      <div className="row text-white text-center mb-4">
        <div className="col-md-4">
          <div className="p-4 rounded bg-danger shadow-lg">
            <h4 className="fs-1">Dash Board</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded bg-info shadow-lg">
            <h4 className="fs-1">Contribute</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded bg-success shadow-lg">
            <h4 className="fs-1">Membership</h4>
          </div>
        </div>
      </div>

      <div className="row mt-5 align-items-center">
        <div className="col-lg-4 d-flex flex-column align-items-center">
          <label className="mb-2 fw-bold">Upload Image</label>
          <input type="file" className="form-control btn btn-warning" accept="image/*" onChange={handleImageUpload} />
        </div>

        <div className="col-lg-8 d-flex justify-content-center">
          <div ref={cardRef} className="card border-0 shadow-lg" style={{ width: "130mm", height: "80mm", fontSize: "14px", borderRadius: "10px", padding: "8px" }}>
            {!showShare ? (
              <>
                <div className="card-header text-center text-white py-2" style={{ background: "#6c757d" }}>
                  <h5 className="mb-0 fs-2">KPM Membership</h5>
                </div>
                <div className="card-body d-flex align-items-center p-3">
                  <div className="me-3">
                    <img src={image || "kpm.png"} alt="Member" className="rounded border" style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid #ccc" }} />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="mb-2 fw-bold text-dark fs-3"><span className="text-primary">Name:</span> John Doe</p>
                    <p className="mb-2 fw-bold text-dark fs-3"><span className="text-primary">Pincode:</span> 123456</p>
                    <p className="mb-0 fw-bold text-dark fs-3"><span className="text-primary">Member ID:</span> 78910</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="d-flex justify-content-around align-items-center py-4">
                <FaFacebook size={40} color="#4267B2" />
                <FaTwitter size={40} color="#1DA1F2" />
                <FaWhatsapp size={40} color="#25D366" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary mx-2" onClick={() => setShowShare(!showShare)}>
          <FaShare /> {showShare ? "Back to Card" : "Share"}
        </button>
        <button className="btn btn-success mx-2" onClick={handleDownload}>
          <FaDownload /> Download
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
