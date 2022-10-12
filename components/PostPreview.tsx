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
	Tooltip,
	useMantineTheme,
} from '@mantine/core';
import { IconBookmark, IconSettings, IconPencilPlus, IconWriting } from '@tabler/icons';

import styles from '../styles/components/PostPreview.module.css';

interface ArticleCardProps {
	image: string;
	link: string;
	title: string;
	description: string;
	author: {
		name: string;
		image: string;
	};
	lastEdited: string;
	tags?: string[];
	draft?: boolean;
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
				{props.tags?.map((tag, index) => {
					return (
						<Badge
							key={index}
							variant={'outline'}
							className={styles['PostPreview__tag']}
							color={'violet.4'}
							size="md">
							{tag}
						</Badge>
					);
				})}
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
					<Tooltip
						label={'Post Settings'}
						position={'bottom'}
						color={'violet.7'}
						offset={5}
						m={12}
						arrowSize={6}
						withArrow>
						<ActionIcon className={styles['PostPreview__action']}>
							<IconSettings size={16} color={theme.colors.dark[1]} />
						</ActionIcon>
					</Tooltip>
					<ActionIcon className={styles['PostPreview__action']}>
						<IconBookmark size={16} color={theme.colors.yellow[4]} />
					</ActionIcon>
					<ActionIcon className={styles['PostPreview__action']}>
						<IconPencilPlus size={16} />
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
