const placeholderPosts = () => {
	return {
		posts: [
			{
				title: 'Understanding Next.js Dynamic Routes',
				description:
					'Next.js dynamic routes is one of the best things about the framework. It enables instant creation of new pages automatically, with little to no manual labor on part of the developer to update new routes.',
				postDate: new Date(),
				imageUrl:
					'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
				likes: 300,
				lastEdited: new Date(),
				tags: ['Next.js', 'Full Stack', 'Front End'],
			},
			{
				title: 'Relational PostgreSQL vs. NoSQL Databases',
				description:
					'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.',
				postDate: new Date(),
				imageUrl:
					'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
				likes: 300,
				lastEdited: new Date(),
				tags: ['Back End', 'PostgreSQL', 'Databases'],
			},
		],
	};
};

export default placeholderPosts;
