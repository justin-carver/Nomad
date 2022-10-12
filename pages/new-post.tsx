import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button, Box, Divider, Group, Input, Space, Stack, Text } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useIdle } from '@mantine/hooks';
import { IconArrowLeft, IconHash, IconPhoto, IconUpload, IconX, IconSend } from '@tabler/icons';

import RichText from '../components/RichText';
import styles from '../styles/NewPost.module.css';

const sayings = [
	'Tell the world about your new project!',
	'Unleash your creativity upon the world!',
	'Talk about your beloved hobby!',
	'Share your memories with your audience!',
];

const NewPost = (props: any) => {
	const [saying, setSaying] = useState('Upload Media');
	const [documentTitle, setDocumentTitle] = useState('New Post');
	const [value, onChange] = useState('');

	useEffect(() => {
		setSaying(sayings[Math.floor(Math.random() * sayings.length)]);
	}, []);
	return (
		<Box>
			<Head>
				<title>New Post</title>
			</Head>
			<Group className={styles['NewPost']} position={'center'}>
				<Stack className={styles['NewPost__stack']} spacing={0}>
					<Link href={'/dashboard'}>
						<a>
							<Group className={styles['NewPost__dashboard']}>
								<IconArrowLeft size={20} />
								<Text>Dashboard</Text>
							</Group>
						</a>
					</Link>
					<Space h={60} />
					<Input
						className={styles['NewPost__title']}
						icon={<IconHash className={styles['NewPost__titleIcon']} />}
						iconWidth={42}
						size={'xl'}
						placeholder={'Title of the Blog Post'}
						onChange={(e: any) => setDocumentTitle(e.target?.value)}
						variant={'unstyled'}
					/>
					<Divider size={'xs'} mb={10} />
					<Text size={'sm'}>last edited: {new Date().toString()}</Text>
					<Space h={20} />
					{/*  <!-- DROPZONE -->  */}
					<Dropzone
						onDrop={(files) => console.log('accepted files', files)}
						onReject={(files) => console.log('rejected files', files)}
						maxSize={3 * 1024 ** 2}
						accept={IMAGE_MIME_TYPE}
						{...props}>
						<Group
							position="center"
							spacing="xl"
							style={{ minHeight: 160, pointerEvents: 'none' }}>
							<Dropzone.Accept>
								<IconUpload size={50} stroke={1.5} />
							</Dropzone.Accept>
							<Dropzone.Reject>
								<IconX size={50} stroke={1.5} />
							</Dropzone.Reject>
							<Dropzone.Idle>
								<IconPhoto size={50} stroke={1.5} />
							</Dropzone.Idle>
							<div>
								<Text size="xl" inline>
									{saying}
								</Text>
								<Text size="sm" color="dimmed" inline mt={7}>
									Attach as many files as you like, each file should not exceed
									5mb
								</Text>
							</div>
						</Group>
					</Dropzone>
					{/*  <!-- END DROPZONE -->  */}
					<Space h={10} />
					<Input
						className={styles['NewPost__altText']}
						icon={<Text size={'sm'}>Alt Text</Text>}
						iconWidth={60}
						size={'sm'}
					/>
					<Space h={20} />
					<Divider size={'xs'} mb={10} />
					<RichText
						value={value}
						onChange={onChange}
						className={styles['NewPost__rte']}
						sticky
						id="rte"
						sx={() => ({
							'.ql-editor': {
								minHeight: '300px',
							},
						})}
					/>
					<Space h={20} />
					<Button
						type={'submit'}
						size={'md'}
						radius={'md'}
						variant={'outline'}
						color={'violet'}
						leftIcon={<IconSend />}>
						Submit Post
					</Button>
				</Stack>
			</Group>
		</Box>
	);
};

export default NewPost;
