import NextAuth, { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
// TODO: This needs to be setup correctly!
async function refreshAccessToken(token: JWT) {
	try {
		// const url =
		// 	'https://oauth2.googleapis.com/token?' +
		// 	new URLSearchParams({
		// 		client_id: process.env.GOOGLE_CLIENT_ID,
		// 		client_secret: process.env.GOOGLE_CLIENT_SECRET,
		// 		grant_type: 'refresh_token',
		// 		refresh_token: token.refreshToken,
		// 	});

		const response = await fetch('url', {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			method: 'POST',
		});

		const refreshedTokens = await response.json();

		if (!response.ok) {
			throw refreshedTokens;
		}

		return {
			...token,
			accessToken: refreshedTokens.access_token,
			accessTokenExpires: Date.now() + refreshedTokens.expires_at * 1000,
			refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
		};
	} catch (error) {
		console.log(error);

		return {
			...token,
			error: 'RefreshAccessTokenError',
		};
	}
}

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			type: 'credentials',
			credentials: {},
			authorize: async (credentials, req) => {
				const user = {
					username: req.body?.username,
					password: req.body?.password,
				};
				if (
					user.username === process.env.ADMIN_USERNAME &&
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
			console.log({ token, user, account });
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
	pages: {
		signIn: '/login',
	},
};

export default NextAuth(authOptions);
