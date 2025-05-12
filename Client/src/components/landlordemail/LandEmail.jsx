import React, { useState, useRef } from "react";
import "./landemail.scss";
import { orange } from "@mui/material/colors";
import Button from "@mui/material/Button";

function EmailWithAttachment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
    file2: null,
    file3: null,
    file4: null,
  });
  const [status, setStatus] = useState("");
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("file", form.file);
    formData.append("file2", form.file2);
    formData.append("file3", form.file3);
    formData.append("file4", form.file4);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setForm({
          name: "",
          email: "",
          message: "",
          file: null,
          file2: null,
          file3: null,
          file4: null,
        });
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("Error sending email.");
      console.error(error);
    }
  };

  return (
    <form
      className="landlord"
      onSubmit={handleSubmit}
      style={{ maxWidth: 400, margin: "auto" }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: 10 }}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: 10 }}
      />
      <textarea
        name="message"
        placeholder="Tell us about your house, its features, location and your contact details"
        value={form.message}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: 10 }}
      />

      <h5 style={{ color: "orange" }}>
        please insert pictures of your house, <br />
        show toilets,
        <br /> bathrooms,
        <br /> rooms and <br /> kitchen
      </h5>
      <input
        className="img"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleChange}
        required
        style={{ marginBottom: 10 }}
        ref={fileInputRef}
      />
      <input
        className="image"
        type="file"
        name="file2"
        accept="image/*"
        onChange={handleChange}
        required
        style={{ marginBottom: 20 }}
        ref={fileInputRef}
      />
      <input
        className="image"
        type="file"
        name="file3"
        accept="image/*"
        onChange={handleChange}
        required
        style={{ marginBottom: 30 }}
        ref={fileInputRef}
      />
      <input
        className="image"
        type="file"
        name="file4"
        accept="image/*"
        onChange={handleChange}
        required
        style={{ marginBottom: 40 }}
        ref={fileInputRef}
      />
      <Button
        style={{ border: "1px solid orange", width: "155px" }}
        type="submit"
      >
        Send Email
      </Button>
      <p
        style={{
          color:
            status === "Failed to send email." ||
            status === "Error sending email."
              ? "red"
              : status === "Email sent successfully!"
              ? "green"
              : "inherit",
        }}
      >
        {" "}
        {status}
      </p>
    </form>
  );
}

export default EmailWithAttachment;
