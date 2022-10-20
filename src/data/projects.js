// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'WooCommerce Website',
		category: 'Wordpress',
		img: require('@/assets/images/dscott-woocommerce.jpg'),
	},
	{
		id: 2,
		title: 'Terrarium',
		category: 'Web Application',
		img: require('@/assets/images/terrarium.jpg'),
	},
	{
		id: 3,
		title: 'Typing Game',
		category: 'Web Application',
		img: require('@/assets/images/typing-game.jpg'),
	},
	{
		id: 4,
		title: 'Memory Blaster',
		category: 'Web Application, Vue.Js',
		img: require('@/assets/images/memory-blaster.jpg'),
	},
	{
		id: 4,
		title: 'Leasy - Listing App',
		category: 'Mobile Application',
		img: require('@/assets/images/leasy.jpg'),
	},
];

export default projects;
