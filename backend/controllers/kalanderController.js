import Kalander, { deleteKalander } from "../models/Kalander.js";

export const getAll = async (req, res) => {
  try {
    const kalander = await Kalander.find();
    res.json(kalander);
  } catch (error) {
    res.status(200);
  }
};

export const create = async (req, res) => {
  const createKalander = new Kalander(req.body);
  try {
    const neuKalander = await createKalander.save();
    return res.status(201).json(neuKalander);
  } catch (error) {}
};

export const removeKalander = async (req, res) => {
  try {
    const deletedKalander = await deleteKalander(req.params.id);
    res.send(deletedKalander);
  } catch (error) {
    res.status(500);
  }
};
