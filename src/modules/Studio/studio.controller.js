
import Studio from "../../../DB/Models/Studio.model.js";

export const createStudio = async (req, res) => {
    try {
      const studio = new Studio({
        ...req.body,
        owner: req.id
      });
      await studio.save();
      res.status(201).json({ message: "Studio created successfully", studio });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

export const getAllStudios = async (req, res) => {
  try {
    const studios = await Studio.find().populate('owner', 'userName email');
    res.json(studios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getStudioById = async (req, res) => {
  try {
    const studio = await Studio.findById(req.params.id).populate('owner', 'userName email');
    if (!studio) return res.status(404).json({ message: "Studio not found" });
    res.json(studio);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateStudio = async (req, res) => {
  try {
    const studio = await Studio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!studio) return res.status(404).json({ message: "Studio not found" });
    res.json({ message: "Studio updated successfully", studio });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteStudio = async (req, res) => {
  try {
    const studio = await Studio.findByIdAndDelete(req.params.id);
    if (!studio) return res.status(404).json({ message: "Studio not found" });
    res.json({ message: "Studio deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

