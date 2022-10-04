import { motion } from 'framer-motion';

import { Button, Group, Stack, Text } from '@mantine/core';
import { IconWriting, TablerIcon } from '@tabler/icons';

import styles from '../../styles/components/HeroButton.module.css';

interface HeroButtonProps {
	icon?: TablerIcon;
	title?: string;
	subtitle?: string;
}

const HeroButton: React.FC<HeroButtonProps> = (props: any) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 1.1 }}
			animate={{ opacity: 1, scale: 1.0 }}
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 1.01 }}>
			<Stack>
				<Button className={styles['HeroButton']} unstyled>
					<Group align={'center'}>
						{props.icon ? props.icon : <IconWriting size={48} />}
						<Stack spacing={5}>
							<Text size={'xl'} align={'left'}>
								{props.title ? props.title : 'Create New Post'}
							</Text>
							<Text
								className={styles['HeroButton__subtitle']}
								size={'sm'}
								align={'left'}>
								{props.subtitle
									? props.subtitle
									: 'Inspire others! Create a new post to start your journey!'}
							</Text>
						</Stack>
					</Group>
				</Button>
			</Stack>
		</motion.div>
	);
};

export default HeroButton;
