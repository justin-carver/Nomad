import {
	ActionIcon,
	Avatar,
	Badge,
	Card,
	Center,
	Divider,
	Group,
	Image,
	Text,
	useMantineTheme,
} from '@mantine/core';
import { IconBookmark, IconHeart, IconShare, IconWriting } from '@tabler/icons';

import styles from '../styles/components/PostPreview.module.css';

interface ArticleCardProps {
	draft: boolean;
	image: string;
	link: string;
	title: string;
	description: string;
	author: {
		name: string;
		image: string;
	};
	lastEdited: string;
}

const PostPreview = ({
	draft,
	className,
	image,
	link,
	title,
	description,
	author,
	lastEdited,
	...props
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) => {
	const linkProps = { href: link, target: '_blank', rel: 'noopener noreferrer' };
	const theme = useMantineTheme();

	return (
		<Card withBorder radius="md" shadow={'lg'} className={styles['PostPreview']} {...props}>
			<Card.Section>
				<a {...linkProps}>
					<Image src={image} height={180} alt={'Blog Post Image Alt'} />
				</a>
			</Card.Section>

			<Group className={styles['PostPreview__tagGroup']} spacing={'xs'}>
				<Badge className={styles['PostPreview__tag']} color={'red'} radius="sm" size="sm">
					DevOps
				</Badge>
				<Badge className={styles['PostPreview__tag']} color={'green'} radius="sm" size="sm">
					Back End
				</Badge>
				<Badge className={styles['PostPreview__tag']} radius="sm" size="sm">
					Databases
				</Badge>
			</Group>

			<Text
				className={styles['PostPreview__title']}
				weight={500}
				component="a"
				{...linkProps}>
				{title}
			</Text>
			<Text size="sm" color="dimmed" lineClamp={4}>
				{description}
			</Text>

			<Group position="apart" className={styles['PostPreview__footer']}>
				<Center>
					<Avatar src={author.image} size={24} radius="xl" mr="xs" />
					<Text size="sm" inline>
						{author.name}
					</Text>
				</Center>

				<Group spacing={8} mr={0}>
					<ActionIcon className={styles['PostPreview__action']}>
						<IconHeart size={16} color={theme.colors.red[6]} />
					</ActionIcon>
					<ActionIcon className={styles['PostPreview__action']}>
						<IconBookmark size={16} color={theme.colors.yellow[4]} />
					</ActionIcon>
					<ActionIcon className={styles['PostPreview__action']}>
						<IconShare size={16} />
					</ActionIcon>
				</Group>
				{draft && (
					<Group spacing={4}>
						<IconWriting size={18} color={'gray'} />
						<Text size={'xs'} color={'dimmed'}>{`Draft lasted edited: ${new Date(
							lastEdited
						).toLocaleDateString('en-us', {
							weekday: 'long',
							year: 'numeric',
							month: 'short',
							day: 'numeric',
						})}`}</Text>
					</Group>
				)}
			</Group>
		</Card>
	);
};

export default PostPreview;
