import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import supabase from "../../../Supabase";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError("");

      // Fetch images from Supabase table
      const { data, error } = await supabase
        .from("upload")
        .select("image, description, instagram_user")
        .order("id", { ascending: false });

      if (error) {
        console.error("Error fetching images:", error.message);
        setError("Failed to load images. Please try again.");
      } else {
        setImages(data || []);
      }

      setLoading(false);
    };

    fetchImages();
  }, []);

  const submit = (e) => {
    e.preventDefault();
    navigate("/upload");
  };

  return (
    <div className="container mt-2">
      <div className="sticky-header d-flex justify-content-between p-3">
        <h2 className="text-center mb-0">Ghibli Image Gallery</h2>
        <button className="btn btn-primary" onClick={submit}>
          Add Image
        </button>
      </div>

      {loading && <p className="text-center">Loading images...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row mt-2">
        {images.map((img, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card shadow-sm">
              <img
                src={img.image}
                alt={img.description}
                className="card-img-top"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h3 className="card-text">{img.description}</h3>
                <a
                  href={`https://instagram.com/${img.instagram_user}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" fs-5"
                >
                  {img.instagram_user}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
