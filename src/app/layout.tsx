import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Header from '@/components/navigators/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider
    appearance={{
      variables: { colorPrimary: "#212121" },
      elements: {
        formButtonPrimary:
          "bg-black border border-black border-solid hover:bg-white hover:text-black",
        socialButtonsBlockButton:
          "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
        socialButtonsBlockButtonText: "font-semibold",
        formButtonReset:
          "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
        membersPageInviteButton:
          "bg-black border border-black border-solid hover:bg-white hover:text-black",
        card: "bg-[#fafafa]",
      },
    }}
    >
			<html lang="en">
				<body>
					<Header />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
