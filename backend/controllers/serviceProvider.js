import { db } from "../db.js";
import { ObjectId } from "mongodb";

export const getServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await db
      .collection("ServiceProvider")
      .find({})
      .toArray();
    res.status(200).json(serviceProvider);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getServiceProviderbyID = async (req, res) => {
  try {
    const serviceProviderId = req.params.id;
    const objectId = new ObjectId(serviceProviderId);
    const serviceProvider = await db
      .collection("ServiceProvider")
      .findOne({ _id: objectId });
    res.status(200).json(serviceProvider);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
