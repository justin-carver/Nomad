import {
	IconChevronDown,
	IconSettings,
	IconPhoto,
	IconMessageCircle,
	IconArrowsLeftRight,
	IconSearch,
	IconLogout,
} from '@tabler/icons';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Group, Avatar, ActionIcon, Menu, Text } from '@mantine/core';
import styles from '../../styles/Dashboard.module.css';

const DashboardProfile = () => {
	const { data: session } = useSession();
	const [username, setUsername] = useState('');

	useEffect(() => setUsername(session?.user?.name!), [session?.user]);

	return (
		<Menu shadow="md" width={200} offset={20} position={'bottom-end'} withArrow>
			<Menu.Target>
				<ActionIcon size={'sm'} variant={'transparent'}>
					<Avatar
						className={styles['Dashboard__profile--avatar']}
						color={'cyan'}
						radius={'xl'}>
						NM
					</Avatar>
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
