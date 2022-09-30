import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import FullPageLoader from './FullPageLoader';

export default function PrivateRoute({
	protectedRoutes,
	children,
}: {
	protectedRoutes: string[];
	children: any;
}) {
	const Router = useRouter();
	const { status } = useSession();

	const pathIsProtected = protectedRoutes.indexOf(Router.pathname) !== -1;

	useEffect(() => {
		if (status !== 'loading' && status !== 'authenticated' && pathIsProtected) {
			Router.push('/login');
		}
	}, [status, pathIsProtected, Router]);

	if ((status === 'loading' || status !== 'authenticated') && pathIsProtected) {
		return <FullPageLoader />;
	}

	return children;
}
