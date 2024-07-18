import React from 'react';
import AppBar from './appbar';

interface MainLayoutProps {
	children: React.ReactNode;
}

export default function Main({ children }: MainLayoutProps): JSX.Element {
	return (
		<div>
			<AppBar />
			<main>{children}</main>
		</div>
	);
}