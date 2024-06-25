import {db} from '../db.js';

export const getServiceProvider = async (req, res) => {
    try {
        const users = await db.collection("ServiceProvider").find({}).toArray();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };