import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider theme={{ colorScheme: 'dark' }} withCSSVariables withGlobalStyles withNormalizeCSS>
			<Component {...pageProps} />
		</MantineProvider>
	);
}

export default App;
