import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

// This gets called on every request
export async function getServerSideProps() {
	// // Fetch data from external API
	// const res = await fetch(`https://.../data`);
	// const data = await res.json();

	// Pass data to the page via props
	return { props: {} };
}

const Dashboard: NextPage = () => {
	const { data: session, status } = useSession();
	// useEffect(() => {

	// }, [status]);
	// return <></>;
	if (status === 'unauthenticated') {
		return <p>You are unable to view this page. Sign in another way!</p>;
	} else {
		return <p>You have acceussfully authenticated if you can read this section!</p>;
	}
};

export default Dashboard;
