<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/justin-carver/Nomad">
    <img src="https://i.imgur.com/gE8itPl.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Nomad</h3>

  <p align="center">
    A lightweight, customizable, single author blogging CMS<br />built on Next.js, postgreSQL, and the Mantine component library.
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://blog.justincarver.work">💻 View Demo</a>
    ·
    <a href="https://github.com/justin-carver/Nomad/issues">🐛 Report Bug</a>
    ·
    <a href="https://github.com/justin-carver/Nomad/issues">🧩 Request Feature</a>
  </p>
</div>

- [About The Project](#about-the-project)
- [Screenshots](#screenshots)
  - [Login Screen](#login-screen)
- [Core Stack](#core-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [FAQ](#faq)
- [Project / Fork Ideas](#project--fork-ideas)
- [Special Thanks](#special-thanks)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Nomad is a lightweight, customizable, single author blogging system built on `Next.js`, the `Mantine` component library, and `Framer Motion`. The core post database systems is built off `postgreSQL` with a `prisma` adapter, while using `next-auth` credentials alongside `encrypted JWTs` to handle administrative operations within the CMS.

**What does 'single author' mean?** Nowadays, most CMS are designed with the complexity of introducing collaborators or enterprise level components and ideas; with in some cases, multiple authors attached to multiple newsletters. While this is great for small to large teams, there is a barrier of unnecessary configuration if you are a solo developer or a community leader. This project is for someone who is learning React or Next.js, or maybe someone who just wants a quick blog set up in a few clicks.

The purpose of this project is to help beginners understand systems design within full stack application for a blog that supports one author. Nomad is simple and intuitive, yet teaches basic DevOps concepts and full stack fundamentals. This repo will serve as a teaching point to those looking to learn:

-   SEO / Marketing
-   Database Management
    -   PostgreSQL
    -   Prisma
-   Full Stack Development
    -   API Management
    -   React Component Design
    -   Next.js / Mantine
-   Authentication & Authorization

This application is still in a beta phase, so I apologize for any inconvenience or downtime! At it's current state, there should be no threat between upgrading versions.

## Screenshots

Please note, the project's designs, colors, and typography choices are not final are subject to change. Some instances throughout the project may not not reflect design consistency and are constantly being improved during this stage of development.

### Login Screen

![Login Screen](https://i.imgur.com/ujevGSZ.png)

## Core Stack

[![Next][next.js]][next-url]
[![React][react.js]][react-url]

<!-- postgreSQL -->
<!-- mantine -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

List of features available within this CMS. Some features may not be present currently, but if listed, are on the planned route of completion before first release:

-   Full In-tool SEO Management
-   Post Editing / Saving / Scheduling / Drafts
-   Rich Text Editor (based on [Quill](https://quilljs.com/))
-   Dashboard / Reports / Analytics
-   Responsive Design / Mobile Friendly
-   Login Rate Limiting / IP Banning
-   Single Author Account / Encrypted JWTs
-   SSG & SSR (For maximum SEO optimization mixed with performance)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
    ```sh
    git clone https://github.com/justin-carver/Nomad.git
    ```
2. Install yarn packages
    ```sh
    yarn install
    ```
3. Create and configure your `.env.local` file, which contains many fields for Nomad to function.
    ```js
    ADMIN_USERNAME = nomad
    ADMIN_PASSWORD = N0m4d4Lyfe
    NEXTAUTH_API = http://localhost:3000/
    NEXTAUTH_SECRET = noj345hoipdufpio345opi345/i4j5oui345o=
    ```
4. Create database tables in the `postgreSQL` client and spin up the databases using the correct schema information.
5. Run `yarn dev` while developing or `next build` before pushing to production!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To create a post, simply start the server, navigate to `/login`, and sign in with the information provided in the `.env.local` file containing your `ADMIN_USERNAME` and `ADMIN_PASSWORD` fields. Once signed in, if not redirected, navigate to `/dashboard` to view your options and either create a new post or edit a draft.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

-   [x] Add Changelog
-   [x] Add back to top links
-   [ ] Add Additional Templates w/ Examples

See the [open issues](https://github.com/justin-carver/Nomad/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. PRs will be reviewed when available!

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

All I ask is that the PR be meaningful to the project in some capacity, and simply not renaming/moving files or type additions. PRs that increase the scope or complexity of the final product generally will **not** be accepted, unless discussed prior.

> **Remember:** the goal of this CMS is to be simple and suffice the bare necessities for managing a blog by a single author. Bells and whistles can be forked. :^)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ -->

## FAQ

**1. Why is the credentials provider used instead of something like Github or OAuth?**

Since this project is focused on being lightweight, easy to understand, and only support one author for blogs, the easiest route was to use the credential provider. The local .env file is safely stored on the server and cannot be accessed by any clients, while providing a great way to validate author information without having to host multiple database tables. `Next-Auth` also generates encrypted JWTs along with every session that is used to validate connection attempts.

I would **not** use only a password-based system for any important, scalable authentication methods. Since this blog's needs are simple, this was the easiest way. As well, when using a password, a complex, lengthy password is preferred. You can go as far as encrypting it before transit, but HTTPS **should** be enabled by default on the server.

**2. Can I just use this like it is? Is there a lot of setup?**

There is not a lot of setup to get this going, and you definitely can use this CMS 'out of the box' after cloning/forking the repo. Once downloaded, either start the server using `yarn dev` or `yarn start` after making sure to run `yarn install` to install/upgrade your dependencies, and verifying your local postgreSQL database, and `.env.local` files are created and setup properly. Once configured, follow the steps in the [usage](#usage) category above to begin posting.

If you are using something like Vercel, you can fork the repo and begin the process of configuring the front end. You will still have to manually configure a `postgresql` database, but that's where the fun begins. :)

**3. What about Database Management?**

Since this project is built on the premise of a single author, there is thankfully not very much that is needed to manage the database once spun up. After the tables are created, and blogs can successfully be created and deleted, the database can be left alone and will perform great as needed. With a single author, there is not a big need for connection pooling, key rotation, or much else that you would find in a larger organization. **Though keep in mind, it is still _very_ important to monitor security, performance, connection attempts, backups, etc.**

<!-- Project Ideas -->

## Project / Fork Ideas

Here are some great ideas that will make this project even more interesting, and may serve as a unique talking point for your resume!

1. Add multi-user authentication to the CMS. ([RBAC?](https://en.wikipedia.org/wiki/Role-based_access_control))
2. Use webhooks to post somewhere else automatically when you create a blog post.
3. Implement a comment system. Maybe even throw in an upvote system.
4. Design and build a component that shows how many viewers are reading a post in real-time.
5. Extend the Next.js REST API to authenticate and create posts from anywhere.
6. Convert the relational database into a NoSQL solution like MongoDB or Cassandra.
7. Create and import custom components into the Quill editor and toolbar.
8. Design a "Featured Story/Post" section on the front page.
9. Create a notification system using [socket.io](https://socket.io/) to get live alerts of people liking or sharing posts.

<!-- SPECIAL THANKS -->

## Special Thanks

Big thanks to the libraries/frameworks below for helping make this little project of mine a reality:

-   [Mantine Component Library](https://mantine.dev/)
-   [DataTable Component (icflorescu)](https://github.com/icflorescu/mantine-datatable)
-   [PostgreSQL](https://www.postgresql.org/)
-   [Next.js](https://nextjs.org/)
-   [Framer Motion](https://www.framer.com/motion/)

<!-- LICENSE -->

## License

Distributed under the GPLv3 License. See `LICENSE.txt` for more information. Please refer to the license for redistribution or any other promotional aspects.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

**Justin Carver** - *https://justincarver.work!*

[( 💻 Check out Nomad in action on my own blog!)](https://blog.justincarver.work)

If you are having an issue, please open up a bug report within GitHub so that it can be tracked and worked on in a timely manner.

---

_If you're looking for a full stack React / Next.js developer, and willing to employ remotely, [**hire me!**](https://justincarver.work) 👋_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
