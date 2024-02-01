// Projects data.
// Note: Here we are getting data from a js file.

const projects = [
	{
		id: 1,
		title: 'Terrarium',
		category: 'Web Application',
		img: require('@/assets/images/terrarium.jpg'),
		url: "https://eddayavuz.github.io/myTerrarium/",
		sourceUrl: "https://github.com/Eddayavuz/myTerrarium"
	},
	{
		id: 2,
		title: 'Typing Game',
		category: 'Web Application',
		img: require('@/assets/images/typing-game.jpg'),
		url: "https://eddayavuz.github.io/typing-game/",
		sourceUrl: "https://github.com/Eddayavuz/typing-game"
	},
	{
		id: 3,
		title: 'Memory Blaster',
		category: 'Web Application, Vue.js',
		img: require('@/assets/images/memory-blaster.jpg'),
		url: "https://eddayavuz.github.io/memory-blaster/",
		sourceUrl: "https://github.com/Eddayavuz/memory-blaster"
	},
	{
		id: 4,
		title: 'Leasy - Listing App',
		category: 'Mobile Application, iOS',
		img: require('@/assets/images/leasy.jpg'),
		sourceUrl: "https://github.com/Eddayavuz/leasy"
		
	},
	{
		id: 5,
		title: 'Pupstagram',
		category: 'Web Application, Vue.js',
		img: require('@/assets/images/pupstagram.png'),
		url: "https://vuepupstagram.netlify.app",
		sourceUrl: "https://github.com/Eddayavuz/pupstagram"
		
	},
];

export default projects;
