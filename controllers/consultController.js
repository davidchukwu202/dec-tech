import Consult from '../models/Consult.js';

export const createConsult = async (req, res) => {
  try {
    const consult = new Consult(req.body);
    const saved = await consult.save();
    res.json(saved);
  } catch (error) {
    console.error('Consult not saved', error.message);
  }
};

export const getAllConsults = async (req, res) => {
  try {
    const consults = await Consult.find();
    res.json(consults);
  } catch (error) {
    console.error('No Consult found', error.message);
  }
};
