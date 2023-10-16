import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '../../../lib/db';
import { verifyPassword } from '../../../lib/auth';

export const authOptions = {
 secret: 'thequickbrownfox',
 session: {
  strategy: 'jwt',
  maxAge: 30 * 24 * 60 * 60,
 },
 providers: [
  CredentialsProvider({
   name: 'credentials',
   credentials: {
    email: { label: 'email', type: 'email', placeholder: 'Please enter an email' },
    password: { label: 'password', type: 'password', placeholder: 'Please enter a password' },
   },
   authorize: async (credentials) => {
    const client = await connectToDatabase();

    const usersCollection = client.db().collection('users');

    const user = await usersCollection.findOne({ email: credentials.email });

    if (!user) {
     client.close();
     return null;
    }

    const isValid = await verifyPassword(credentials.password, user.password);

    if (!isValid) {
     client.close();
     throw new Error('Could not log you in');
    }

    client.close();
    console.log(user);
    console.log(isValid);

    return {
     email: user.email,
    };
   },
  }),
 ],
};

export default NextAuth(authOptions);
