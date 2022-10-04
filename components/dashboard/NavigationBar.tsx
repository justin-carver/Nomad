import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Center, createStyles, Navbar, Stack, Tooltip, UnstyledButton } from '@mantine/core';
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

interface NavbarLinkProps {
	icon: TablerIcon;
	label: string;
	active?: boolean;
	onClick?(): void;
}

const useStyles = createStyles((theme) => ({
	link: {
		width: 50,
		height: 50,
		borderRadius: theme.radius.md,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.white,
		opacity: 0.85,

		'&:hover': {
			opacity: 1,
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
				0.1
			),
		},
	},

	active: {
		opacity: 1,
		'&, &:hover': {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
				0.15
			),
		},
	},
}));

const NavbarLink = ({ icon: Icon, label, active, onClick }: NavbarLinkProps) => {
	const { classes, cx } = useStyles();
	return (
		<Tooltip
			className={styles['NavigationBar__tooltip']}
			label={label}
			position="right"
			transitionDuration={0}
			color={'dark.5'}>
			<UnstyledButton
				onClick={onClick}
				className={cx(classes.link, { [classes.active]: active })}>
				<Icon stroke={1.5} size={28} />
			</UnstyledButton>
		</Tooltip>
	);
};

const mockdata = [
	{ icon: IconHome2, label: 'Home' },
	{ icon: IconGauge, label: 'Dashboard' },
	{ icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
	{ icon: IconCalendarStats, label: 'Releases' },
	{ icon: IconUser, label: 'Account' },
	{ icon: IconFingerprint, label: 'Security' },
	{ icon: IconSettings, label: 'Settings' },
];

const NavigationBar = () => {
	const [active, setActive] = useState(2);
	// const Router = useRouter();

	const links = mockdata.map((link, index) => (
		<NavbarLink
			{...link}
			key={link.label}
			active={index === active}
			onClick={() => setActive(index)}
		/>
	));

	return (
		<Navbar
			className={styles['NavigationBar']}
			width={{ base: 80 }}
			p="md"
			sx={(theme) => ({
				backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
					.background,
			})}>
			<Navbar.Section grow>
				<Stack justify="center" spacing={5}>
					<DashboardProfile />
					{links}
				</Stack>
			</Navbar.Section>
			<Navbar.Section>
				<Stack justify="center" spacing={0}>
					<NavbarLink icon={IconSettings} label="Settings" onClick={() => {}} />
					<NavbarLink icon={IconLogout} label="Logout" onClick={() => signOut()} />
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
};

export default NavigationBar;
