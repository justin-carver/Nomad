import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';

import {
	Box,
	Button,
	CSSObject,
	Divider,
	Group,
	MediaQuery,
	ScrollArea,
	Space,
	Stack,
	Text,
	Title,
} from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconWriting } from '@tabler/icons';

import DataTableComponent from '../components/dashboard/DataTableComponent';
import HeroButton from '../components/dashboard/HeroButton';
import NavigationBar from '../components/dashboard/NavigationBar';
import PostPreview from '../components/PostPreview';
import styles from '../styles/Dashboard.module.css';
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
	const session = useSession();
	return (
		<Box className={styles['Dashboard']}>
			<Head>
				<title>{`Dashboard | ${session.data?.user?.name}`}</title>
			</Head>
			<Group
				className={styles['Dashboard__wrapper']}
				align={'flex-start'}
				position={'center'}
				spacing={0}>
				<NavigationBar />
				<Stack className={styles['Dashboard__mainArea']}>
					<Stack className={styles['Dashboard__drafts']}>
						<Title className={styles['Dashboard__title']} order={1}>
							{`Welcome, ${session.data?.user?.name}`}!
						</Title>
						<Group className={styles['Dashboard__hero']}>
							<Link href={'/new-post'}>
								<a>
									<HeroButton />
								</a>
							</Link>
						</Group>
						<Stack className={styles['Dashboard__drafts--header']}>
							<Title className={styles['Dashboard__title']} order={2}>
								Recent Drafts 📝
							</Title>
						</Stack>
						<AnimatePresence>
							<motion.div variants={container} animate={'visible'}>
								<Group className={styles['Dashboard__previewPosts']} spacing={30}>
									{props.posts.map((post: any) => {
										return (
											<motion.div
												whileHover={{
													scale: 1.02,
													transition: { duration: 0.15 },
												}}
												whileTap={{ scale: 1.01 }}
												key={randomId()}
												variants={item}>
												<PostPreview
													draft // enables the 'draft last edited' section.
													title={post.title}
													author={{
														name: props.authorInfo.name,
														image: props.authorInfo.image,
													}}
													tags={post.tags}
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
							<Space />
							<Divider label={'Post Management'} labelProps={{ color: 'dimmed' }} />
							<Stack>
								<Title className={styles['Dashboard__title']} order={2}>
									Published Posts 📤
								</Title>
								<DataTableComponent />
							</Stack>
						</AnimatePresence>
					</Stack>
				</Stack>
			</Group>
		</Box>
	);
};

export default Dashboard;
