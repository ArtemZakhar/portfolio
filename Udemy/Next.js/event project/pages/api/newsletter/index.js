import { connectDB, insertDocument } from '../../../helpers/db-util';

async function handler(req, res) {
 if (req.method === 'POST') {
  const userEmail = req.body.email;

  if (!userEmail || !userEmail.includes('@')) {
   res.status(422).json({ message: 'Envalid email address' });
   return;
  }

  let client;

  try {
   client = await connectDB();
  } catch (e) {
   res.status(500).json({ message: 'Connecting to the DB failed' });
   return;
  }

  try {
   await insertDocument(client, 'emails', { email: userEmail });
   client.close();
  } catch (e) {
   res.status(500).json({ message: 'Inserting data failed' });
   return;
  }

  res.status(201).json({ message: 'ok', data: userEmail });
 }
}

export default handler;
