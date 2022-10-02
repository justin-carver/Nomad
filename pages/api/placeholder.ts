const placeholderPosts = () => {
	return {
		posts: [
			{
				title: 'Understanding Next.js Dynamic Routes',
				description:
					'Next.js dynamic routes are some of the best things about the framework. It enables instant creation of new pages automatically, with little to no user input on manually creating pages.',
				postDate: new Date(),
				imageUrl:
					'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
				likes: 300,
				lastEdited: new Date(),
			},
			{
				title: 'Relational PostgreSQL vs. NoSQL Databases',
				description:
					'Postgres is actually not that bad, and is something that I strive to learn every chance I get. Coming from a history of NoSQL databases, relational comparisons can be confusing, but still the industry standard.',
				postDate: new Date(),
				imageUrl:
					'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
				likes: 300,
			},
		],
	};
};

export default placeholderPosts;
