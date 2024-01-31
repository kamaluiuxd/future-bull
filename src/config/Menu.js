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
			{
				name: "Fii Data",
				link: "/fiidata",
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
			{
				name: "Client Type",
				link: "/client-type",
			},
		],
	},
	{
		name: "Contact",

		link: "/contact",
	},
];
