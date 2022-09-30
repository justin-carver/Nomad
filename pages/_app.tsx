import { SessionProvider } from 'next-auth/react';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import PrivateRoute from '../components/PrivateRoute';

function App({ Component, pageProps }: AppProps) {
	// Any routes that need to be protected or hidden will go here.
	const protectedRoutes = ['/dashboard'];

	return (
		<SessionProvider>
			<PrivateRoute protectedRoutes={protectedRoutes}>
				<MantineProvider theme={{ colorScheme: 'dark' }} withCSSVariables withGlobalStyles withNormalizeCSS>
					<Component {...pageProps} />
				</MantineProvider>
			</PrivateRoute>
		</SessionProvider>
	);
}

export default App;
