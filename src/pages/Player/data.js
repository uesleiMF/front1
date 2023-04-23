import { v4 as uuidv4 } from "uuid";


function chillHop() {
	return [
		{
			name: "Deus deeee Detalhes",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Aso",
			audio: "https://www.zummy.com.ng/Tag2/datas//Deus%20De%20Detalhes.mp3",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "BONDADE DE DEUS",
			cover:"./images/9.webp",
			artist: "ISAIAS SAAD ",
			audio: './music/Bondade de Deus(2).mp3',
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "O TEMPO NÃO PODE APAGAR",
			cover:"./images/8.webp",
			artist: "Cassiane",
			audio: './music/a.mp3',
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "HEY PAY",
			cover:
				"./images/1.webp",
			artist: "Isadora Pompeo",
			audio: './music/i.mp3',
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Reflection",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "sim",
			audio: './music/Eu e minha casa.mp3',
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Under the City Stars",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
