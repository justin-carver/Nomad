import { IconBookmark, IconHeart, IconShare } from '@tabler/icons';
import {
	Card,
	Image,
	Text,
	ActionIcon,
	Badge,
	Group,
	Center,
	Avatar,
	useMantineTheme,
	Divider,
} from '@mantine/core';
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
}

const PostPreview = ({
	className,
	image,
	link,
	title,
	description,
	author,
	...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) => {
	const linkProps = { href: link, target: '_blank', rel: 'noopener noreferrer' };
	const theme = useMantineTheme();

	return (
		<Card withBorder radius="md" shadow={'lg'} className={styles['PostPreview']} {...others}>
			<Card.Section>
				<a {...linkProps}>
					<Image src={image} height={180} alt={'Blog Post Image Alt'} />
				</a>
			</Card.Section>

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
			</Group>
		</Card>
	);
};

export default PostPreview;
