export default function Landing() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
			{/* Hero Section */}
			<section className="container mx-auto px-6 py-32 text-center">
				<h1 className="text-6xl font-bold text-pink-500 mb-6 leading-tight">
					Your AI-Powered Nursing Assistant
				</h1>
				<p className="text-gray-600 text-xl mb-10 max-w-2xl mx-auto">
					Revolutionizing healthcare with intelligent, real-time support for nurses and
					caregivers. Enhance patient care with cutting-edge AI technology.
				</p>
				<div className="space-x-4">
					<button className="bg-pink-500 text-white px-10 py-4 rounded-lg hover:bg-pink-600 transition duration-300 transform hover:scale-105">
						Get Started
					</button>
					<button className="bg-transparent border border-pink-500 text-pink-500 px-10 py-4 rounded-lg hover:bg-pink-50 transition duration-300 transform hover:scale-105">
						Learn More
					</button>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="bg-white py-24">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl font-bold text-center text-blue-900 mb-16">Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						<div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-2xl font-semibold text-blue-900 mb-4">
								ambot
							</h3>
							<p className="text-gray-600">
								ambot
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-2xl font-semibold text-blue-900 mb-4">
							ambot
							</h3>
							<p className="text-gray-600">
								abot
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
							<h3 className="text-2xl font-semibold text-blue-900 mb-4">
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
			<section className="bg-pink-500 py-24">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Ready to Transform Healthcare?
					</h2>
					<p className="text-gray-100 text-xl mb-10 max-w-2xl mx-auto">
						Join thousands of nurses and caregivers using NurseAI to enhance patient care and
						streamline workflows.
					</p>
					<button className="bg-white text-pink-500 px-12 py-4 rounded-lg hover:bg-pink-50 transition duration-300 transform hover:scale-105">
						Sign Up Now
					</button>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-white py-8">
				<div className="container mx-auto px-6 text-center">
					<p className="text-gray-600">© 2025 NurseAI. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
