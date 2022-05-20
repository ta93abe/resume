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
						"primary": "#9333ea",
						"secondary": "#c026d3",
						"accent": "#a3e635",
						"neutral": "#110E0E",
						"base-100": "#171212",
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
