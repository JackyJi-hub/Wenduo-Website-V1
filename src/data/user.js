const INFO = {
	main: {
		title: "Wenduo Ji",
		name: "Wenduo Ji",
		email: "jacky.ji12345@gmail.com",
		logo: "../icons/app-icon.png",
	},

	socials: {
		// twitter: "https://twitter.com/",
		github: "https://github.com/JackyJi-hub",
		linkedin: "https://www.linkedin.com/in/jacky-ji/",
		// instagram: "https://instagram.com/",
		// stackoverflow: "https://stackoverflow.com/",
		// facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Hello, my name is Wenduo Ji",
		description:
			"I'm a third-year undergraduate student studying at the University of Toronto, specializing in Computer Science. I am driven and enthusiastic about expanding my expertise in software development and ready to embrace challenges to strive for growth in my journey within the field!",
	},

	about: {
		title: "I'm Wenduo, eager to venture into the world of computer science, where curiosity converges with innovation.",
		description:
			"I'm currently a third-year student studying at the University of Toronto specializing in the field of Computer Science and minoring in the field of music and culture. ",
        description_2:
			"To me, software development is more than a craft—it's a gateway to turning abstract ideas into practical solutions for others to benefit from. From an early fascination with technology to now being a third-year computer science student at UofT, my journey has been filled with exciting projects and incredible connections. As I delve deeper into the boundless realm of computer science, my aim is to leverage my skills as a means to unravel endless possibilities and overcome challenges with each new endeavor."
	},

	works: {
		title: "My work experiences",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Galaxy Runner Vol. 1",
			description:
				"A fast paced mobile game powered by Unity and C#. Navigate through intricate levels and overcoming obstacles in this immersive and dynamic gaming experience.",
			logo: process.env.PUBLIC_URL + "/icons/app-icon.png",
			linkText: "View Project",
			link: "https://play.google.com/store/apps/details?id=com.littlemountainstudio.galaxyrunner",
		},

        {
			title: "Corrupt Image Pixel Repair",
			description:
				"A Python application that utilizes machine learning RBF Regression to help restore corrupted pixels within an image",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

        {
			title: "Image Compression Program",
			description:
				"A Python application employing clustering machine learning techniques to effectively compress images, reducing their overall size.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

        {
			title: "Memorandum Website",
			description:
				"A web application designed using React and MongoDB to help users store and organize memorandums effortlessly.",
			logo: process.env.PUBLIC_URL + "/icons/react.png",
			linkText: "View Project",
			link: "https://github.com/JackyJi-hub/Memo-Website/tree/master",
		},

		{
			title: "Event Scheduling Application",
			description:
				"An Android application used to help organize venues and schedule sporting events.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/Aarin06/CSCB07_Project",
		},

		{
			title: "3D Object Transformation",
			description:
				"A Java application that enabling users to manipulate mesh objects expressed in OBJ, PLY, and OFF file formats.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/JackyJi-hub/3D-Object-Transformation",
		},

		{
			title: "Christmas Delivery",
			description:
				"A festive score-based PC game developed for the 32-bit Holiday Jam hosted on itch.io.",
			logo: process.env.PUBLIC_URL + "/icons/cookie-icon.png",
			linkText: "View Project",
			link: "https://popcorncaptain.itch.io/christmasdelivery",
		},

        {
			title: "Personal Portfolio",
			description:
				"A personal portfolio web application designed to highlight my expertise and experiences.",
			logo: process.env.PUBLIC_URL + "/icons/react.png",
			linkText: "View Project",
			link: "https://github.com/JackyJi-hub/Wenduo-Website",
		},
	],
};

export default INFO;
