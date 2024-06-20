import express from 'express';
import connectDb from '../db/conn.mjs';
import { ObjectId } from 'mongodb';


const router = express.Router();

// (async () => {
//      const db = await connectDb();
    
//     // Getting all movies
//     router.get('/movies', async (req, res) => {
//       try {
//         const movies = await movies.find({})
//         res.json(movies)
//         ;
//       } catch (err) {
//         res.status(500).json({ message: err.message });
//       }
//     });
  
//   })();
//   export default router;

(async () => {
  try {
      const db = await connectDb();

      // GET all movies
      router.get('/movies', async (req, res) => {
          try {
              const movies = await db.collection('movies').find();
              res.json(movies);
          } catch (err) {
              console.error('Error retrieving movies:', err);
              res.status(500).json({ message: 'Error retrieving movies', error: err.message });
          }
      });

      // POST a new movie
      router.post('/movies', async (req, res) => {
          try {
              const { title, director, year } = req.body;
              
              
              if (!title || !year) {
                  return res.status(400).json({ message: 'Please provide title and year for the movie' });
              }

              const newMovie = {
                  title,
                  year
              };

              const result = await db.collection('embedded_movies').insertOne(newMovie);
              res.status(201).json(result.ops[0]); 
          } catch (err) {
              console.error('Error creating movie:', err);
              res.status(500).json({ message: 'Error creating movie', error: err.message });
          }
      });

  } catch (err) {
      console.error('Error connecting to database:', err);
      res.status(500).json({ message: 'Database connection error', error: err.message });
  }
})();

export default router;