import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

export default async function Header() {
	const { userId } = await auth();

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
			<div className="container mx-auto flex h-16 items-center justify-between px-6">
				{/* Logo */}
				<Link href="/" className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
					Nurse<span className="text-pink-500">Wise</span>
				</Link>

				{/* Navigation Links */}
				<div className="hidden md:flex items-center gap-8 text-sm font-medium">
					<Link href="/features" className="text-gray-700 hover:text-pink-500 transition-colors">
						Features
					</Link>
					<Link href="/pricing" className="text-gray-700 hover:text-pink-500 transition-colors">
						Premium
					</Link>
					<Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors">
						About
					</Link>
				</div>

				{/* Auth Buttons */}
				<div>
					{userId ? (
						<div className="flex items-center gap-4">
							<UserButton afterSignOutUrl="/" showName />
						</div>
					) : (
						<div className="flex items-center gap-4">
							<Link
								href="/sign-in"
								className="hidden md:inline-flex h-10 px-6 items-center justify-center rounded-md bg-gray-50 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100">
								Sign In
							</Link>
							<Link
								href="/sign-up"
								className="inline-flex h-10 px-6 items-center justify-center rounded-md bg-pink-500 text-sm font-medium text-white shadow transition-colors hover:bg-pink-600">
								Sign Up
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}