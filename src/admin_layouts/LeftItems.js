import React from 'react';

export const LeftItems = [

	{
		title: "Stock",
		url: "/stock",
		icon: "ico",

	},

	{
		title: "Human",
		url: "/human",
		icon: "ico",
		sub_menu: [
			{
				title: "Administration",
				url: '/administration',
				icon: 'ico'
			},
			{
				title: "Office Stuff",
				url: '/office-stuff',
				icon: 'ico'
			}
		]
	},

	{
		title: "Roles & Permissions",
		url:"roles-permissions",
		icon: 'ico'
	}
	

];