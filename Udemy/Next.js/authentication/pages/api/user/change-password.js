import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { connectToDatabase } from '../../../lib/db';
import { hashPassword, verifyPassword } from '../../../lib/auth';

async function handler(req, res) {
 if (req.method !== 'PATCH') {
  return;
 }
 const session = await getServerSession(req, res, authOptions);

 if (!session) {
  res.status(401).json({ message: 'Not authenticated' });
  return;
 }

 const userEmail = session.user.email;
 const oldPassword = req.body.oldPassword;
 const newPassword = req.body.newPassword;

 const client = await connectToDatabase();
 const userCollection = client.db().collection('users');
 const user = await userCollection.findOne({ email: userEmail });

 if (!user) {
  res.status(401).json({ message: 'User not found' });
  client.close();
  return;
 }
 const currentPassword = user.password;
 const passwordAreEqual = await verifyPassword(oldPassword, currentPassword);

 if (!passwordAreEqual) {
  res.status(422).json({ message: 'Invalid password' });
  client.close();
  return;
 }

 const hashedPassword = await hashPassword(newPassword);

 const result = await userCollection.updateOne({ email: userEmail }, { $set: { password: hashedPassword } });
 res.status(200).json({ message: 'Password updated', result });
 client.close();
}

export default handler;
