import { db } from "../db.js";
import { ObjectId } from "mongodb";

export const getDoctors = async (req, res) => {
    try {
      const serviceProviderId = req.params.id;
      const serviceProvider = await db
        .collection("Doctors")
        .find({ Service_ProviderID: serviceProviderId })
        .toArray();
      
      res.status(200).json(serviceProvider);
      console.log(serviceProvider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
export const getDoctorByID = async (req, res) => {
    try {
      const doctorId = req.params.id;
      const objectId = new ObjectId(doctorId);
      const doctor = await db
        .collection("Doctors")
        .findOne({ _id: objectId });
      res.status(200).json(doctor);
      console.log(doctor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
