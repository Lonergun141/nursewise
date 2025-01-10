import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="flex items-center justify-center">
				<SignUp />
			</div>
		</div>
	);
}
