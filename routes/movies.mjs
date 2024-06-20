import express from 'express';
import connectDb from '../db/conn.mjs';
import { ObjectId } from 'mongodb';


const router = express.Router();

// (async () => {
     const db = await connectDb();
    
    // Getting all movies
    router.get('/movies', async (req, res) => {
      try {
        const movies = await movies.find({})
        res.json(movies)
        // res.json({message:"list of movies"})
        ;
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
  
  //})();
  export default router;