import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			type: 'credentials',
			credentials: {},
			async authorize(credentials, req) {
				const user = {
					username: req.body?.username,
					password: req.body?.password,
				};
				if (user.username === process.env.ADMIN_USERNAME && user.password === process.env.ADMIN_PASSWORD) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
};

export default NextAuth(authOptions);
