import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ghibliBanner from "../../assets/anime1.jpg";
import supabase from "../../../Supabase";

const UploadLandingpage = () => {
  const [form, setForm] = useState({
    image: null,
    description: "",
    instagram_user: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: files ? files[0] : value,
    }));
  };

  // for supabase bucket
  const uploadImage = async (file) => {
    try {
      setLoading(true);
      setError("");

      const filePath = `uploads/${Date.now()}_${file.name}`;

      const { data, error } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (error) throw error;

      const { data: publicData, error: urlError } = supabase.storage
        .from("images")
        .getPublicUrl(filePath);

      if (urlError) throw urlError;

      return publicData.publicUrl;
    } catch (err) {
      console.error("Upload Error:", err.message);
      setError("Failed to upload image. Please try again.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.image) {
      setError("Please select an image.");
      return;
    }

    const imageUrl = await uploadImage(form.image);
    if (!imageUrl) {
      setError("Image upload failed.");
      return;
    }

    const { data, error } = await supabase
      .from("upload")
      .insert([
        {
          image: imageUrl,
          description: form.description,
          instagram_user: form.instagram_user || null, // ✅ Save as null if empty
        },
      ]);

    if (error) {
      console.error("Database Insert Error:", error);
      setError(error.message || "Something went wrong.");
    } else {
      console.log("Upload successful!", data);
      setForm({ image: null, description: "", instagram_user: "" });

      // Redirect to gallery
      navigate("/gallery");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ghibliBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
      ></div>

      <div
        className="col-md-4 p-2 rounded shadow"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          zIndex: 1,
        }}
      >
        <form className="p-4 rounded" onSubmit={submit}>
          <h3 className="text-center">Add your Ghibli image</h3>

          <div className="form-group">
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleChange}
              name="image"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Add a description..."
              className="form-control my-2"
              value={form.description}
              onChange={handleChange}
              name="description"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Instagram username (optional)"
              className="form-control my-2"
              value={form.instagram_user}
              onChange={handleChange}
              name="instagram_user"
            />
          </div>

          {error && <p className="text-danger">{error}</p>}

          <button
            className="w-100 mt-1 rounded p-2 btn btn-primary"
            type="submit"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadLandingpage;
