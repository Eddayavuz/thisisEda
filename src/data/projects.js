// Projects data.
// Note: Here we are getting data from a js file.

const projects = [
	{
		id: 1,
		title: 'WooCommerce Website',
		category: 'Wordpress',
		img: require('@/assets/images/dscott-woocommerce.jpg'),
		url: "https://dscottphotography.com/",
		sourceUrl: ""
	},
	{
		id: 2,
		title: 'Terrarium',
		category: 'Web Application',
		img: require('@/assets/images/terrarium.jpg'),
		url: "https://eddayavuz.github.io/myTerrarium/",
		sourceUrl: "https://github.com/Eddayavuz/myTerrarium"
	},
	{
		id: 3,
		title: 'Typing Game',
		category: 'Web Application',
		img: require('@/assets/images/typing-game.jpg'),
		url: "https://eddayavuz.github.io/typing-game/",
		sourceUrl: "https://github.com/Eddayavuz/typing-game"
	},
	{
		id: 4,
		title: 'Memory Blaster',
		category: 'Web Application, Vue.Js',
		img: require('@/assets/images/memory-blaster.jpg'),
		url: "https://eddayavuz.github.io/memory-blaster/",
		sourceUrl: "https://github.com/Eddayavuz/memory-blaster"
	},
	{
		id: 4,
		title: 'Leasy - Listing App',
		category: 'Mobile Application',
		img: require('@/assets/images/leasy.jpg'),
		sourceUrl: "https://github.com/Eddayavuz/leasy"
		
	},
];

export default projects;
