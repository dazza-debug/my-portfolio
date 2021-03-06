//All svgs found at https://www.svgrepo.com/
const bioData = [
	{
		"name": "HTML logo",
		"url": process.env.PUBLIC_URL + '/Logos/html-svgrepo-com.svg'
	},
	{
		"name": "CSS logo",
		"url": process.env.PUBLIC_URL + '/Logos/css-svgrepo-com.svg'
	},
	{
		"name": "JS logo",
		"url": process.env.PUBLIC_URL + '/Logos/javascript-svgrepo-com.svg'
	},
	{
		"name": "React logo",
		"url": process.env.PUBLIC_URL + '/Logos/react-svgrepo-com.svg'
	},	
	{
		"name": "Redux logo",
		"url": process.env.PUBLIC_URL + '/Logos/redux-svgrepo-com.svg'
	},
	{
		"name": "TypeScript logo",
		"url": process.env.PUBLIC_URL + '/Logos/typescript-svgrepo-com.svg'
	},
	{
		"name": "Docker logo",
		"url": process.env.PUBLIC_URL + '/Logos/docker-svgrepo-com.svg'
	},
	{
		"name": "Jest logo",
		"url": process.env.PUBLIC_URL + '/Logos/jest-svgrepo-com.svg'
	},
	{
		"name": "Redis logo",
		"url": process.env.PUBLIC_URL + '/Logos/redis-svgrepo-com.svg'
	},
	{
		"name": "PostgreSQL logo",
		"url": process.env.PUBLIC_URL + '/Logos/postgresql-svgrepo-com.svg'
	},
	{
		"name": "C# logo",
		"url": process.env.PUBLIC_URL + '/Logos/nextjs-svgrepo-com.svg'
	},
	{
		"name": "Git logo",
		"url": process.env.PUBLIC_URL + '/Logos/git-icon-svgrepo-com.svg'
	}
];

const milestone = [
	{
		"milestone": `Completed "Complete C# Unity Developer 2D" (Udemy)`,
		"complete": true
	},
	{
		"milestone": `Completed "Certificate III in information, digital media and technology" course (TAFE)`,
		"complete": true
	},
	{
		"milestone": `Completed "The Complete Web Developer Zero to Mastery" course (Udemy)`,
		"complete": true
	},
	{
		"milestone": `Completed project "H M Movie Motors"`,
		"complete": false
	},
	{
		"milestone": `Completed "The Complete Junior to Senior Web Developer Roadmap" course (Udemy)`,
		"complete": true
	},
	{
		"milestone": `Completed project "Finnerty Automotive"`,
		"complete": true
	}
]

module.exports = {
	bioData,
	milestone
}