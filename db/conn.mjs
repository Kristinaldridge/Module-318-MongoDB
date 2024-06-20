// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";
// dotenv.config();

// const client = new MongoClient(process.env.ATLAS_URI);

// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// let db = conn.db("sample_mflix");// replaced with my database name

// export default db;


// import { MongoClient } from 'mongodb';
// import dotenv from "dotenv";

// dotenv.config();
// const connectionString = process.env.ATLAS_URI || '';  //this is the issue & 24

// const client = new MongoClient(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// let db;


// async function connectDb() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB Atlas');
//     db = client.db('sample_mflix'); 
//     return db;
//   } catch (err) {
//     console.error('Failed to connect to MongoDB Atlas', err);
//     throw err;
//   }
// }
// export default connectDb;



import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://kristinaldridge202:qBw7mYYkACJI3DaJ@cluster0.5gywmem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//z8lqrNVXrC77Tei7

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDb() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("sample_mflix").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
      console.error('Error connecting to MongoDB:', err);
  }}

//   } finally {
//     // Ensures that the client will close when you finish/error
//    // await client.close();
//  // }

export default connectDb;
