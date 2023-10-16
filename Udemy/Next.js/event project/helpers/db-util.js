import { MongoClient } from 'mongodb';

export async function connectDB() {
 const client = await MongoClient.connect('mongodb+srv://');

 return client;
}

export async function insertDocument(client, collection, document) {
 const db = client.db();
 const result = await db.collection(collection).insertOne(document);
 return result;
}

export async function getAllDocuments(client, collection) {
 const db = client.db();
 const documents = await db.collection(collection).find().sort({ _id: -1 }).toArray();
 return documents;
}
