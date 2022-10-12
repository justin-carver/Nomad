import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { ActionIcon, Avatar, Group, Menu, Text } from '@mantine/core';
import {
	IconArrowsLeftRight,
	IconChevronDown,
	IconLogout,
	IconMessageCircle,
	IconPhoto,
	IconSearch,
	IconSettings,
} from '@tabler/icons';

import styles from '../../styles/Dashboard.module.css';

const DashboardProfile = () => {
	const { data: session } = useSession();
	const [username, setUsername] = useState('');

	useEffect(() => setUsername(session?.user?.name!), [session?.user]);

	return (
		<Menu shadow="md" width={300} offset={20} position={'left-start'} withArrow>
			<Menu.Target>
				<ActionIcon
					size={'sm'}
					variant={'transparent'}
					className={styles['Dashboard__profile--avatarButton']}>
					<Avatar
						className={styles['Dashboard__profile--avatarImg']}
						size={48}
						color={'cyan'}
						radius={'xl'}
						src={'https://github.com/justin-carver.png'}></Avatar>
				</ActionIcon>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Label>{`signed in as ${username}`}</Menu.Label>
				<Menu.Item icon={<IconMessageCircle size={14} />}>Create New Post</Menu.Item>
				<Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
				<Menu.Item
					icon={<IconSearch size={14} />}
					rightSection={
						<Text size="xs" color="dimmed">
							⌘K
						</Text>
					}>
					Search
				</Menu.Item>
				<Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
				<Menu.Divider />
				<Menu.Item color="red" icon={<IconLogout size={14} />} onClick={() => signOut()}>
					Sign Out
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);
};

export default DashboardProfile;
