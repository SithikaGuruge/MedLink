import {db} from '../db.js';

export const getServiceProvider = async (req, res) => {
    try {
        const serviceProvider = await db.collection("ServiceProvider").find({}).toArray();
        res.status(200).json(serviceProvider);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };