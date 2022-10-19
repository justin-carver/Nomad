import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Box, Button, Divider, Group, Input, Space, Stack, Text } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useIdle } from '@mantine/hooks';
import { IconArrowLeft, IconHash, IconPhoto, IconSend, IconUpload, IconX } from '@tabler/icons';

import RichText from '../components/RichText';
import {
	getDraftsObject,
	getFromLocalStorage,
	saveDraftsObject,
	saveToLocalStorage,
} from '../lib/LocalStorage';
import styles from '../styles/NewPost.module.css';

interface DraftInterface {
	title: string;
	author: string;
	lastEdited: Date;
	content: string;
}

const sayings = [
	'Tell the world about your new project!',
	'Unleash your creativity upon the world!',
	'Talk about your beloved hobby!',
	'Share your memories with your audience!',
	'Capture the minds of millions!',
];

const NewPost = (props: any) => {
	const [saying, setSaying] = useState('Upload Media');
	const idle = useIdle(3000);

	// Post State
	const [titleValue, setTitleValue] = useState('');
	const [altTextValue, setAltTextValue] = useState('');
	const [image, setImage] = useState(''); // URL for image after upload, base64 encoded
	const [rteValue, onChange] = useState(getDraftsObject()?.replaceAll('"', ''));

	useEffect(() => {
		setSaying(sayings[Math.floor(Math.random() * sayings.length)]);
	}, []);

	// For the moment, drafts are saved to local storage.
	// This should definitely be stored in an available db table.
	useEffect(() => {
		if (idle && (!getDraftsObject() || getDraftsObject() !== '')) {
			saveDraftsObject(rteValue?.trim());
		}
	});

	// * DEBUGGING REMOVE BEFORE PROD :D
	useEffect(() => {
		idle ? console.log(getFromLocalStorage('drafts')) : 0;
	}, [idle]);

	const insertPostIntoDB = async () => {
		await fetch('/api/blog/createPost');
	};

	return (
		<Box>
			<Head>
				<title>New Post</title>
			</Head>
			<Group className={styles['NewPost']} position={'center'} align={'start'}>
				<Stack className={styles['NewPost__stack']} spacing={0}>
					<Link href={'/dashboard'}>
						<a>
							<Group className={styles['NewPost__dashboard']} spacing={10}>
								<IconArrowLeft size={20} />
								<Text size={'md'}>Dashboard</Text>
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
						variant={'unstyled'}
					/>
					<Divider size={'xs'} mb={10} />
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
					<Text size={'sm'}>last edited: {new Date().toString()}</Text>
					<RichText
						value={rteValue as string}
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
						color={'dark.1'}
						leftIcon={<IconSend />}
						onSubmit={() => insertPostIntoDB()}>
						Submit Post
					</Button>
				</Stack>
			</Group>
		</Box>
	);
};

export default NewPost;
