import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
 const connectionString = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@${process.env.mongoDB_clustername}.efhi8fb.mongodb.net/${process.env.mongoDB_database}?retryWrites=true&w=majority`;

 const client = await MongoClient.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 });
 return client;
}
