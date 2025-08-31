import express from "express";
import Contact from "../models/contactModel.js";


const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Log the data received from frontend
    console.log("📥 Incoming Data:", req.body);

    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();

    // Log the saved document
    console.log("✅ Saved in DB:", savedContact);

    res.status(201).json({ message: "Contact saved successfully!", savedContact });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({ error: "Failed to save contact" });
  }
});

export default router;
