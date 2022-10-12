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
			authorize: async (credentials, req) => {
				const user: any = {
					name: req.body?.username,
					password: req.body?.password,
				};
				if (
					user.name === process.env.ADMIN_USERNAME &&
					user.password === process.env.ADMIN_PASSWORD
				) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		jwt: async ({ token, user, account }) => {
			if (account && user) {
				return {
					accessToken: account.access_token,
					accessTokenExpires: Date.now() + (account.expires_at || 200) * 1000,
					refreshToken: account.refresh_token,
					user,
				};
			}

			// ! Important to refresh tokens!
			if (Date.now() < (token as any).accessTokenExpires) {
				return token;
			}

			// Access token has expired, try to update it
			// return refreshAccessToken(token);
			return token;
		},
		session: async ({ session, token }) => {
			(session as any).user = token.user;
			session.accessToken = token.accessToken;
			session.error = token.error;
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/login',
	},
};

export default NextAuth(authOptions);
