import { FormEvent, FormEventHandler, useState, useRef } from 'react';
import {
	Text,
	Center,
	Container,
	Stack,
	Input,
	Group,
	Divider,
	Button,
	Space,
	Checkbox,
} from '@mantine/core';
import { IconUser, IconKey, IconLogin, IconBrandGithub } from '@tabler/icons';
import { useSession, signIn, signOut } from 'next-auth/react';
import Router from 'next/router';
import FullPageLoader from '../components/FullPageLoader';
import styles from '../styles/Login.module.css';
import Head from 'next/head';

export const getServerSideProps = () => {
	return { props: {} };
};

const Login = () => {
	const { data: session, status } = useSession();
	const [userInfo, setUserInfo] = useState({} as { username: string; password: string });
	const errorRef = useRef(null);

	const loginHandler: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
		e ? e.preventDefault() : null;

		const res = await signIn('credentials', {
			username: userInfo.username,
			password: userInfo.password,
			redirect: false,
		});

		if (res?.status !== 200) {
			errorRef.current
				? ((errorRef.current as HTMLElement).innerHTML =
						"Sorry! That didn't seem to work, please try again.")
				: '';
		} else {
			errorRef.current ? ((errorRef.current as HTMLElement).innerHTML = '') : '';
			Router.push('/dashboard');
		}
	};

	if (status === 'loading') {
		return <FullPageLoader />;
	}

	return (
		<Center className={styles['Login']}>
			<Head>
				<title>Login</title>
			</Head>
			<Container className={styles['Login__container']}>
				<Stack>
					<Text size={'xl'} align={'center'}>
						Welcome Back! 👋
					</Text>
					<Text size={'sm'} align={'center'}>
						Please sign in with your account information below.
					</Text>
					<Text
						size={'xs'}
						align={'center'}
						color={'red'}
						ref={errorRef}
						className={'Login__error'}></Text>
					<Stack className={styles['Login__formWrapper']} spacing={10}>
						<form className={'Login__form'} onSubmit={loginHandler}>
							<Input.Wrapper
								className={styles['Login__form--username']}
								label={'Username'}
								onChange={(e: any) => {
									setUserInfo((prev) =>
										Object.assign(prev, { username: e.target.value })
									);
								}}
								error={''}>
								<Input
									icon={<IconUser size={16} />}
									type={'text'}
									placeholder={'nomad'}
									required
								/>
							</Input.Wrapper>
							<Input.Wrapper
								className={styles['Login__form--password']}
								label={'Password'}
								onChange={(e: any) => {
									setUserInfo((prev) =>
										Object.assign(prev, { password: e.target.value })
									);
								}}>
								<Input
									icon={<IconKey size={16} />}
									type={'password'}
									placeholder={'TraVe13r'}
									required
								/>
							</Input.Wrapper>
							<Space />
							<Button
								className={styles['Login__form--loginButton']}
								type={'submit'}
								variant="outline"
								fullWidth>
								<IconLogin size={18} />
								&nbsp;Login
							</Button>
							<Space />
							<Checkbox
								onChange={(e: any) => {
									setUserInfo((prev) =>
										Object.assign(prev, { rememberMe: e.target.checked })
									);
								}}
								className={styles['Login__form--rememberMe']}
								label={`Remember me for ${30} days`}
							/>
						</form>
						<Space h={5} />
						<Divider />
						<Stack spacing={5}>
							<Button variant="subtle" fullWidth onClick={() => signOut()}>
								Sign out
							</Button>
							<Text size={'xs'} color={'dark.3'} align={'center'}>
								{`currently signed in as: ${session?.user?.name}`}
							</Text>
							<Container>
								<a href="https://github.com/justin-carver/Nomad">
									<Group spacing={4} className={styles['Login__github']}>
										<Text size={10} color={'dark.4'} align={'center'}>
											Made with Nomad!
										</Text>
										<IconBrandGithub
											size={18}
											style={{ color: 'var(--mantine-color-dark-4)' }}
										/>
									</Group>
								</a>
							</Container>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Center>
	);
};

export default Login;
