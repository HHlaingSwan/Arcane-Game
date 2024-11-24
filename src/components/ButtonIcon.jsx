import React from "react";

const ButtonIcon = ({ title, icon, containerClass }) => {
	return (
		<div
			className={`relative group flex justify-center items-center gap-2 uppercase z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}>
			{icon}
			<div className='font-mono'>{title}</div>
		</div>
	);
};

export default ButtonIcon;
