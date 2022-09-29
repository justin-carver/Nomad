import { SessionProvider } from 'next-auth/react';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider>
			<MantineProvider theme={{ colorScheme: 'dark' }} withCSSVariables withGlobalStyles withNormalizeCSS>
				<Component {...pageProps} />
			</MantineProvider>
		</SessionProvider>
	);
}

export default App;
