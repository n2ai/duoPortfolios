import React from "react";

const menuItem = [
	{
		name: "Home",
		link: "#",
	},
	{
		name: "About",
		link: "#",
	},
	{
		name: "Projects",
		link: "#",
	},
];


const NavBar:React.FC = ()=>{
    return(
		<nav className="bg-gray-800">
			<div className="sm:container items-center justify-around flex h-16 mx-auto sm:px-16">
				<div>
					<img
						className="h-8 w-8 rounded-full"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
				<div className="flex gap-5 sm:gap-14 text-white">
					{ menuItem.map((item) => {
						return (
							<a href={item.link} className="p-2 rounded-md text-slate-400 hover:bg-gray-500 hover:text-slate-200 transition-all duration-200" aria-current="page">{ item.name }</a>
						)
					})}
					{/* <a href="#" className="p-2 rounded-md text-slate-400 hover:bg-gray-500 hover:text-slate-200 transition-all duration-200" aria-current="page">Home</a>
					<a href="#" className="p-2 rounded-md text-slate-400 hover:bg-gray-500 hover:text-slate-200 transition-all duration-200">About</a>
					<a href="#" className="p-2 rounded-md text-slate-400 hover:bg-gray-500 hover:text-slate-200 transition-all duration-200">Projects</a> */}
				</div>
			</div>
			{/* <div className="flex h-16 justify-center items-center gap-x-[10%] md:gap-x-[20%] text-white">
				<img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
				<div>
					<a href="#" aria-current="page">Home</a>
					<a href="#">About</a>
					<a href="#">Projects</a>
				</div>
				
			</div> */}
			{/* <div className="sm:px-6 md:mx-3 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					
					<div className="sm:ml-6 sm:block">
						<div className="flex space-x-4">
							<a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
							<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
							<a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
						</div>
					</div>
					</div>
				</div>
			</div> */}

			
		</nav>
    )
}

export default NavBar