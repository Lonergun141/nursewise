import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

export default async function Header() {
	const { userId } = await auth();

	if (userId) {
		// Sidebar layout for signed-in users
		return (
			<div className="flex">
				{/* Sidebar */}
				<div className="fixed top-0 left-0 z-50 h-full w-64 border-r bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 flex flex-col">
					{/* Logo */}
					<div className="flex h-16 items-center justify-between px-6 ">
						<Link
							href="/"
							className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
							Nurse<span className="text-pink-500">Wise</span>
						</Link>
					</div>

					{/* Navigation Links */}
					<div className="flex-1 px-6 py-4 flex flex-col gap-2">
						<Link
							href="/ask-nurseai"
							className="w-full text-center text-white bg-pink-500 py-2 px-4 rounded-md hover:bg-pink-600 transition-colors">
							Ask NurseAI
						</Link>
						<Link
							href="/dashboard"
							className="text-gray-700 hover:bg-gray-100 hover:text-pink-500 transition-colors py-2 px-3 rounded-md">
							Dashboard
						</Link>
						<Link
							href="/projects"
							className="text-gray-700 hover:bg-gray-100 hover:text-pink-500 transition-colors py-2 px-3 rounded-md">
							My Projects
						</Link>
					</div>

					{/* Profile Section at the Bottom */}
					<div className="px-6 py-4">
						<div className="flex items-center w-full">
							<UserButton showName />
						</div>
					</div>
				</div>
			</div>
		);
	}

	// Top navbar layout for non-signed-in users
	return (
		<nav className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
			<div className="container mx-auto flex h-16 items-center justify-between px-6">
				{/* Logo */}
				<Link
					href="/"
					className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
					Nurse<span className="text-pink-500">Wise</span>
				</Link>

				{/* Auth Buttons */}
				<div className="flex items-center gap-4">
					{/* Navigation Links */}
					<Link
						href="/pricing"
						className="text-gray-700 hover:text-pink-500 transition-colors">
						Premium
					</Link>
					<Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors">
						About
					</Link>
					<Link
						href="/sign-in"
						className="hidden md:inline-flex h-10 px-6 items-center justify-center rounded-md bg-transparent border border-pink-500 text-pink-500 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100">
						Sign In
					</Link>
					<Link
						href="/sign-up"
						className="inline-flex h-10 px-6 items-center justify-center rounded-md bg-pink-500 text-sm font-medium text-white shadow transition-colors hover:bg-pink-600">
						Sign Up
					</Link>
				</div>
			</div>
		</nav>
	);
}
