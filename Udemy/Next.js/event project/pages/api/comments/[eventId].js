import { connectDB, getAllDocuments, insertDocument } from '../../../helpers/db-util';

async function handler(req, res) {
 const eventId = req.query.eventId;
 let client;

 try {
  client = await connectDB();
 } catch (e) {
  res.status(500).json({ message: 'Connecting to the DB failed' });
  return;
 }

 if (req.method === 'POST') {
  const { email, name, text } = req.body;

  if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
   res.status(422).json({ message: 'Invalid input' });
   return;
  }

  const newComment = {
   email,
   name,
   text,
   eventId,
  };

  try {
   const result = await insertDocument(client, 'comments', newComment);
   console.log(result);
   res.status(201).json({ message: 'ok', comment: newComment });
  } catch (e) {
   res.status(500).json({ message: 'Inserting comment failed' });
  }
 }

 if (req.method === 'GET') {
  try {
   const documents = await getAllDocuments(client, 'comments');
   res.status(200).json({ comments: documents });
  } catch (e) {
   res.status(500).json({ message: 'Getting comments failed' });
  }
 }

 client.close();
}

export default handler;
