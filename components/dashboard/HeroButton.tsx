import { motion, useReducedMotion } from 'framer-motion';

import { UnstyledButton, Box, Group, Stack, Text } from '@mantine/core';
import { IconWriting, TablerIcon } from '@tabler/icons';

import styles from '../../styles/components/HeroButton.module.css';

interface HeroButtonProps {
	icon?: TablerIcon;
	reducedMotion?: boolean;
	subtitle?: string;
	title?: string;
	onClick?: void;
}

const HeroButton: React.FC<HeroButtonProps> = (props: any) => {
	const reducedMotion = useReducedMotion();
	return (
		<motion.div
			initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 1.05 }}
			animate={{ opacity: 1, scale: 1.0 }}
			whileHover={{
				scale: reducedMotion ? 1 : 1.03,
				transition: { duration: 0.15 },
				boxShadow: `-1px 6px 23px 0px rgba(var(--mantine-color-violet-5), 0.7))`,
			}}
			whileTap={{ scale: reducedMotion ? 1 : 1.01 }}
			onClick={props.onClick}>
			<Box className={styles['HeroButton__wrapper']}>
				<Stack>
					<UnstyledButton className={styles['HeroButton']}>
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
					</UnstyledButton>
				</Stack>
			</Box>
		</motion.div>
	);
};

export default HeroButton;
