import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Group, Text, Container, Stack, Box, Title, Divider } from '@mantine/core';
import styles from '../styles/Dashboard.module.css';
import PostPreview from '../components/PostPreview';
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';
import DashboardProfile from '../components/dashboard/DashboardProfile';
import { randomId } from '@mantine/hooks';
import placeholderPosts from './api/placeholder';

// framer-motion prarameters
const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const getServerSideProps = async () => {
	// fake API for time being
	return {
		props: {
			// So silly, convert to string then re-parse... debug for now
			posts: JSON.parse(JSON.stringify(placeholderPosts()))['posts'],
			authorInfo: {
				name: 'Justin Carver',
				image: 'https://github.com/justin-carver.png',
			},
		},
	};
};

const Dashboard: NextPage = (props: any) => {
	// useEffect(() => {
	// 	props.posts.map((post: any) => {
	// 		console.log(post);
	// 	});
	// }, []);
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
						<DashboardProfile />
					</Group>
				</Container>
			</Stack>
			<Container className={styles['Dashboard__drafts']}>
				<Stack className={styles['Dashboard__drafts--header']}>
					<Title order={2}>Recent Drafts 📝</Title>
					<Divider />
				</Stack>
				<AnimatePresence>
					<motion.div variants={container} animate={'visible'}>
						<Group className={styles['Dashboard__previewPosts']} spacing={20}>
							{props.posts.map((post: any) => {
								return (
									<motion.div
										key={randomId()}
										variants={item}
										initial={'hidden'}
										animate={'visible'}>
										<PostPreview
											draft // details whether the 'draft last edited' section appears.
											title={post.title}
											author={{
												name: props.authorInfo.name,
												image: props.authorInfo.image,
											}}
											description={post.description}
											image={post.imageUrl}
											lastEdited={post.lastEdited}
											link={'/'}
										/>
									</motion.div>
								);
							})}
						</Group>
					</motion.div>
				</AnimatePresence>
			</Container>
		</Box>
	);
};

export default Dashboard;
