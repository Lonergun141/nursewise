import React from 'react';

export default function Page() {
	return (
		<div className="ml-64 p-6 flex flex-col">
			<div className="flex w-full">
				<section className="container">
					<div className=" bg-pink-400 h-72 rounded-3xl shadow-md p-6">
						<p>ads here</p>
					</div>
				</section>
			</div>

			<section className="container grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
				{[{ title: 'Drug Study' }, { title: 'Drug Study' }, { title: 'Drug Study' }].map(
					(item, index) => (
						<div
							key={index}
							// onClick={}
							className="bg-white h-[50vh] rounded-2xl shadow-md p-6 flex items-center justify-center cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:bg-pink-500">
							<p className="text-black text-xl font-semibold">{item.title}</p>
						</div>
					)
				)}
			</section>
		</div>
	);
}
