import userModel from "../../../DB/Models/User.model.js"
import bcrypt from "bcryptjs";

export const addAdmin = async (req, res) => {
  const { userName, email, password } = req.body;

  const existingUser = await userModel.findOne({ email });
  if (existingUser) return res.status(400).json({ message: "Email already exists" });

  const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUND));
  const newAdmin = await userModel.create({
    userName,
    email,
    password: hashedPassword,
    role: "admin",
    status: "active",
    confirmEmail: true
  });

  return res.status(201).json({ message: "Admin added", admin: newAdmin });
};

export const toggleStatus = async (req, res) => {
  const { id } = req.params;

  const admin = await userModel.findById(id);
  if (!admin || admin.role !== 'admin') return res.status(404).json({ message: "Admin not found" });

  admin.status = admin.status === 'active' ? 'not_active' : 'active';
  await admin.save();

  return res.status(200).json({ message: "Status updated", status: admin.status });
};

export const getAllAdmins = async (req, res) => {
  const admins = await userModel.find({ role: "admin" });
  return res.status(200).json({ admins });
};

export const deleteAdmin = async (req, res) => {
  try {
    const admin = await userModel.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    await userModel.findByIdAndDelete(req.params.id);

    res.json({ message: 'Admin deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const {  email, role, userName } = req.body;

    const admin = await userModel.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    admin.email = email || admin.email;
    admin.role = role || admin.role;
    admin.userName = userName || admin.userName;

    await admin.save();

    res.json({ message: 'Admin updated successfully', admin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


