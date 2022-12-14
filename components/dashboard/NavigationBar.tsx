import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Box, createStyles, Navbar, Stack, Tooltip, UnstyledButton } from '@mantine/core';
import {
	IconCalendarStats,
	IconDeviceDesktopAnalytics,
	IconFingerprint,
	IconGauge,
	IconHome2,
	IconLogout,
	IconSettings,
	IconUser,
	TablerIcon,
} from '@tabler/icons';

import styles from '../../styles/components/NavigationBar.module.css';
import DashboardProfile from './DashboardProfile';
import SettingsModal from './SettingsModal';

interface NavbarLinkProps {
	icon: TablerIcon;
	label: string;
	active?: boolean;
	onClick?(): void;
}

const NavbarLink = ({ icon: Icon, label, onClick }: NavbarLinkProps) => {
	return (
		<Tooltip
			className={styles['NavigationBar__tooltip']}
			label={label}
			position="right"
			offset={30}
			transitionDuration={0}
			color={'dark.5'}>
			<UnstyledButton onClick={onClick} className={styles['NavigationBar__button']}>
				<Icon stroke={1.5} size={28} />
			</UnstyledButton>
		</Tooltip>
	);
};

const mockdata = [
	{ icon: IconHome2, label: 'Home' },
	{ icon: IconGauge, label: 'Dashboard' },
	{ icon: IconDeviceDesktopAnalytics, label: 'Reports' },
	{ icon: IconCalendarStats, label: 'Tags' },
	{ icon: IconFingerprint, label: 'Security' },
];

const NavigationBar = () => {
	const [active, setActive] = useState(2);
	const [settingsModal, setSettingsModal] = useState(false);

	const links = mockdata.map((link, index) => (
		<NavbarLink {...link} key={link.label} active={true} onClick={() => setActive(index)} />
	));

	return (
		<Box>
			<Box className={styles['NavigationBar__wrapper']}>
				<Navbar className={styles['NavigationBar']} width={{ base: 80 }} p="md">
					<Navbar.Section grow>
						<Stack spacing={15} align={'center'}>
							<DashboardProfile />
							{links}
						</Stack>
					</Navbar.Section>
					<Navbar.Section>
						<Stack justify={'center'} spacing={15} align={'center'}>
							<NavbarLink
								icon={IconSettings}
								label="Settings"
								onClick={() => setSettingsModal(true)}
							/>
							<NavbarLink
								icon={IconLogout}
								label="Logout"
								onClick={() => signOut()}
							/>
						</Stack>
					</Navbar.Section>
				</Navbar>
			</Box>
			<Box className={styles['NavigationBar__shadowHelper']}></Box>
			<SettingsModal opened={settingsModal} setOpened={setSettingsModal} />
		</Box>
	);
};

export default NavigationBar;
