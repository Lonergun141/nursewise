export default function Landing() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
			{/* Hero Section */}
			<section className="container mx-auto px-6 py-20 text-center">
				<h1 className="text-5xl font-bold text-pink-400 mb-6">
					Your AI-Powered Nursing Assistant
				</h1>
				<p className="text-gray-600 text-xl mb-8">
					Revolutionizing healthcare with intelligent, real-time support for nurses and
					caregivers.
				</p>
				<div className="space-x-4">
					<button className="bg-pink-400 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition duration-300">
						Get Started
					</button>
					<button className="bg-transparent border border-pink-400 text-pink-400 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300">
						Learn More
					</button>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="bg-white py-20">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center text-blue-900 mb-16">Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-blue-50 p-8 rounded-lg shadow-sm text-center">
							<h3 className="text-xl font-semibold text-blue-900 mb-4">
								ambot
							</h3>
							<p className="text-gray-600">
								ambot
							</p>
						</div>
						<div className="bg-blue-50 p-8 rounded-lg shadow-sm text-center">
							<h3 className="text-xl font-semibold text-blue-900 mb-4">
								ambot
							</h3>
							<p className="text-gray-600">
								ambot
							</p>
						</div>
						<div className="bg-blue-50 p-8 rounded-lg shadow-sm text-center">
							<h3 className="text-xl font-semibold text-blue-900 mb-4">
								ambot
							</h3>
							<p className="text-gray-600">
								ambot
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-pink-400 py-20">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-white mb-6">
						Ready to Transform Healthcare?
					</h2>
					<p className="text-gray-200 mb-8">
						Join thousands of nurses and caregivers using NurseAI to enhance patient care.
					</p>
					<button className="bg-white text-pink-400 px-8 py-3 rounded-lg hover:bg-pink-400 transition duration-300">
						Sign Up Now
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-white py-6">
				<div className="container mx-auto px-6 text-center">
					<p className="text-gray-600">© 2025 NurseAI. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
