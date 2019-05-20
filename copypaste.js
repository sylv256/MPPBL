//MPPBL(Multiplayer Piano Bot Library) By: ๖ۣۜTehc
	let blob = new Blob(["https://pastebin.com/raw/0RLP8qi2"], {type : "text/plain"});
	let reader = new FileReader();
	let ver = reader.readAsText(blob);
	setTimeout(() => {
		let script = document.createElement('script');
		script.src = 'https://cdn.jsdelivr.net/gh/TehcJS/MPPBL@latest/mppbl.js';
		document.body.appendChild(script);
	}, 1000);
//***********************************************//
