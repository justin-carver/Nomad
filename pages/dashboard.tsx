import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Group, Text, Avatar, Container, Stack, Box, Title, Divider } from '@mantine/core';
import styles from '../styles/Dashboard.module.css';
import PostPreview from '../components/PostPreview';
import Head from 'next/head';

// This gets called on every request
export async function getServerSideProps() {
	// // Fetch data from external API
	// const res = await fetch(`https://.../data`);
	// const data = await res.json();

	// Pass data to the page via props
	return { props: {} };
}

const Dashboard: NextPage = () => {
	const { status } = useSession();
	const Router = useRouter();

	if (status === 'unauthenticated') {
		Router.push('/');
	}

	return (
		<Box>
			<Head>
				<title>Dashboard</title>
			</Head>
			<Stack className={styles['Dashboard__headerWrapper']}>
				<Container className={styles['Dashboard__navbar']}>
					<Group position="apart">
						<Group spacing={'xl'}>
							<Text size={'md'}>Posts</Text>
							<Text size={'md'}>Drafts</Text>
							<Text size={'md'}>Reports</Text>
						</Group>
						<Avatar color="cyan" radius="xl">
							JC
						</Avatar>
					</Group>
				</Container>
			</Stack>
			<Container className={styles['Dashboard__drafts']}>
				<Stack className={styles['Dashboard__drafts--header']}>
					<Title order={2}>Recent Drafts 📝</Title>
					<Divider />
				</Stack>
				<Group className={styles['Dashboard__previewPosts']} spacing={20}>
					<PostPreview
						title="Creating a Blog CMS Using Next.js and PostgreSQL"
						author={{ name: 'John Doe', image: 'https://i.pravatar.cc/300' }}
						description={
							'This is where the description of the article will go. This can be captured using the first couple of sentences pulled from the post or as a new thing.'
						}
						image={
							'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
						}
						link={'/'}
					/>
					<PostPreview
						title="Creating a Blog CMS Using Next.js and PostgreSQL"
						author={{ name: 'John Doe', image: 'https://i.pravatar.cc/300' }}
						description={
							'This is where the description of the article will go. This can be captured using the first couple of sentences pulled from the post or as a new thing.'
						}
						image={
							'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
						}
						link={'/'}
					/>
					<PostPreview
						title="Creating a Blog CMS Using Next.js and PostgreSQL"
						author={{ name: 'John Doe', image: 'https://i.pravatar.cc/300' }}
						description={
							'This is where the description of the article will go. This can be captured using the first couple of sentences pulled from the post or as a new thing.'
						}
						image={
							'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
						}
						link={'/'}
					/>
				</Group>
			</Container>
		</Box>
	);
};

export default Dashboard;
