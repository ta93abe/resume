module.exports =
	{
		content: [
			"./src/pages/**/*.{js,ts,jsx,tsx}",
			"./src/components/**/*.{js,ts,jsx,tsx}",
		],
		theme: { extend: { fontFamily: { dotGothic: ["DotGothic16"] } } },
		daisyui: {
			themes: [
				{
					ta93abe: {
						"primary": "#7B20CA",
						"secondary": "#5B1564",
						"accent": "#a3e635",
						"neutral": "#D63D3D",
						"base-100": "#FFFFFF",
						"info": "#7dd3fc",
						"success": "#4ade80",
						"warning": "#fde047",
						"error": "#e11d48",
					},
				},
			],
		},
		plugins: [require("daisyui")],
	};
