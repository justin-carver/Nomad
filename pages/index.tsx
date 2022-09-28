import { Stack, Text } from '@mantine/core';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<Stack className={styles['Home']}>
			<Text size={'xl'} className={styles['Home__title']}>
				Blog Post Title
			</Text>
		</Stack>
	);
};

export default Home;
