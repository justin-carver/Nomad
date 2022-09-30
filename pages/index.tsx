import { Center, Stack, Text } from '@mantine/core';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

export const getServerSideProps = () => {
	return { props: {} };
};

const Home: NextPage = () => {
	return (
		<Stack className={styles['Home']}>
			<Center>
				<Text size={'xl'} className={styles['Home__title']}>
					Welcome to Nomad Blog!
				</Text>
			</Center>
		</Stack>
	);
};

export default Home;
