import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Container from '@mui/material/Container';

import Main from '../layouts/main';
import styles from './css/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Products & Users Management",
	description: "A simple CRUD app for managing products and users",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={metadata.description!} />
				<title>{metadata.title?.toString()}</title>
				<link rel="stylesheet" href={styles} />
			</Head>
			<body className={inter.className}>
				<Main>
					<Container>
						{children}
					</Container>
				</Main>
			</body>
		</html>
	);
}
