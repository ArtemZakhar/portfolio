import { MongoClient } from 'mongodb';

async function handler(req, res) {
 if (req.method === 'POST') {
  const { email, name, message } = req.body;

  if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
   res.status(422).json({ message: 'Invalid input' });
   return;
  }

  const newMessage = {
   email,
   name,
   message,
  };

  let client;

  const connectionString = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@${process.env.mongoDB_clustername}.efhi8fb.mongodb.net/${process.env.mongoDB_database}?retryWrites=true&w=majority`;

  try {
   client = await MongoClient.connect(connectionString);
  } catch (e) {
   res.status(500).json({ message: "Couldn't connect to server" });
  }

  const db = client.db();

  let result;
  try {
   result = await db.collection('messages').insertOne(newMessage);
  } catch (e) {
   client.close();
   res.status(500).json({ message: 'Smth goes wrong, I was doing my best' });
   returb;
  }
  client.close();
  res.status(201).json({ message: 'ok', data: result });
 }
}

export default handler;
