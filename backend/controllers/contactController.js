// backend/controllers/contactController.js
import Contact from "../models/contactModel.js";

export const saveContact = async (req, res) => {
  try {
    const { name, email, message, agree } = req.body;

    if (!name || !email || !message || !agree) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({
      name,
      email,
      message,
      agree,
    });

    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
