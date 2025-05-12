import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const upload = multer(); // store files in memory

app.use(cors());

// Accept multiple files with different field names
app.post(
  "/api/send-email",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "file2", maxCount: 1 },
    { name: "file3", maxCount: 1 },
    { name: "file4", maxCount: 1 },
  ]),
  async (req, res) => {
    const { name, email, message } = req.body;
    const { file, file2, file3, file4 } = req.files;

    // Validate all fields and files
    if (!name || !email || !message || !file || !file2 || !file3 || !file4) {
      return res.status(400).send("All fields and files are required.");
    }

    // Build attachments array for nodemailer
    const attachments = [file[0], file2[0], file3[0], file4[0]].map((f) => ({
      filename: f.originalname,
      content: f.buffer,
    }));

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ralphchiweshe@gmail.com",
        pass: "ypti vwsh kbvl iupy",
      },
    });

    const mailOptions = {
      from: "ralphchiweshe@gmail.com",
      replyTo: email,
      to: "chiwesheralph@gmail.com",
      subject: `New listing from ${name}`,
      text: message,
      attachments,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Failed to send email.");
    }
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
