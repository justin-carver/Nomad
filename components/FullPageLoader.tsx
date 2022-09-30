import { Container, Loader, Center } from '@mantine/core';
import styles from '../styles/FullPageLoader.module.css';

export default function FullPageLoader() {
	return (
		<Center className={styles['FullPageLoader']}>
			<Container className={styles['FullPageLoader__loader']}>
				<Loader size="xl" variant="bars" color={'gray'} />
			</Container>
		</Center>
	);
}
