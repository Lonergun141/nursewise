import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';

export default async function Header() {
	const { userId } = await auth();

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
			<div className="container mx-auto flex h-14 items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="text-xl font-semibold tracking-tight hover:opacity-80">
					Nurse<span className='text-pink-400'>Wise</span>
				</Link>

				 <div className="hidden md:flex items-center gap-8 text-sm">
					<Link href="/features" className="hover:text-pink-400">
						Features
					</Link>
					<Link href="/pricing" className="hover:text-pink-400">
						Premium
					</Link>
					<Link href="/about" className="hover:text-pink-400">
						About
					</Link>
				</div> 

				<div>
					{userId ? (
						<div>
							<UserButton showName/>
						</div>
					) : (
						<div className="flex items-center gap-4">
							<Link
								href="/sign-in"
								className="hidden md:inline-flex h-9 px-4 items-center justify-center rounded-md bg-gray-50 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100">
								Sign In
							</Link>
							<Link
								href="/sign-up"
								className="inline-flex h-9 px-4 items-center justify-center rounded-md bg-pink-400 text-sm font-medium text-white shadow transition-colors hover:bg-gray-800">
								Sign Up
							</Link>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
