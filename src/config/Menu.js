export const menus = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "About",

		link: "/about",
	},

	{
		head: "FII Activities",
		subMenu: true,
		subLinks: [
			{
				name: "Activities",
				link: "/activities",
			},
			{
				name: "Chart",
				link: "/chart",
			},
			{
				name: "Trading Activities",
				link: "/trading-activities",
			},
		],
	},
	{
		head: "Index futures",
		subMenu: true,
		subLinks: [
			{
				name: "Category",
				link: "/category",
			},
			{
				name: "History",
				link: "/history",
			},
			{
				name: "Daily Change",
				link: "/daily-change",
			},
		],
	},
	{
		name: "Contact",

		link: "/contact",
	},
];
