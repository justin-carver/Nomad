import { FormEvent, FormEventHandler, useState } from 'react';
import { Text, Center, Container, Stack, Input, Box, Divider, Button, Space, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconUser, IconKey, IconLogin } from '@tabler/icons';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import styles from '../styles/login.module.css';
import { redirect } from 'next/dist/server/api-utils';

const Login = () => {
	const [userInfo, setUserInfo] = useState({} as { username: string; password: string });

	const form = useForm({
		initialValues: {
			username: '',
			password: '',
			rememberMe: false,
		},

		// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
		// This is only preliminary sanitization. You must complete your own additional auth!
		validate: {
			username: (value) => (/^\S+$/.test(value) ? null : 'Invalid Username'),
		},
	});

	const loginHandler: FormEventHandler<HTMLFormElement> = async (e: FormEvent) => {
		e ? e.preventDefault() : null;
		const res = await signIn('credentials', {
			username: userInfo.username,
			password: userInfo.password,
			redirect: false,
		});
		console.log(res);
	};

	return (
		<Center className={styles['Login']}>
			<Container className={styles['Login__container']}>
				<Stack>
					<Text size={'xl'} align={'center'}>
						Welcome Back! 👋
					</Text>
					<Text size={'sm'} align={'center'}>
						Please sign in with your account information below.
					</Text>
					<Stack className={styles['Login__formWrapper']} spacing={10}>
						<form className={'Login__form'} onSubmit={loginHandler}>
							<Input.Wrapper
								className={styles['Login__form--username']}
								label={'Username'}
								onChange={(e: any) => {
									setUserInfo((prev) => Object.assign(prev, { username: e.target.value }));
								}}
								error={''}>
								<Input
									icon={<IconUser size={16} />}
									type={'text'}
									placeholder={'nomad'}
									{...form.getInputProps('username')}
									required
								/>
							</Input.Wrapper>
							<Input.Wrapper
								className={styles['Login__form--password']}
								label={'Password'}
								onChange={(e: any) => {
									setUserInfo((prev) => Object.assign(prev, { password: e.target.value }));
								}}
								error={''}>
								<Input
									icon={<IconKey size={16} />}
									type={'password'}
									placeholder={'TraVe13r'}
									{...form.getInputProps('password')}
									required
								/>
							</Input.Wrapper>
							<Space />
							<Button className={styles['Login__form--loginButton']} type={'submit'} variant="outline">
								<IconLogin size={18} />
								&nbsp;Login
							</Button>
							<Space />
							<Checkbox
								onChange={(e: any) => {
									setUserInfo((prev) => Object.assign(prev, { rememberMe: e.target.checked }));
								}}
								className={styles['Login__form--rememberMe']}
								label={`Remember me for ${30} days`}
								{...form.getInputProps('rememberMe', { type: 'checkbox' })}
							/>
						</form>
						<Space />
						<Divider />
						<Stack spacing={0}>
							<Text size={'sm'} align={'center'}>
								<a href={'#'}>Forgot password?</a>
							</Text>
							<Text size={'sm'} align={'center'}>
								<a href={'#'}>Sign out</a>
							</Text>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Center>
	);
};

export default Login;
