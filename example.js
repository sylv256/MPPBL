//MPPBL(Multiplayer Piano Bot Library) By: ๖ۣۜTehc
	var blob = new Blob(["https://pastebin.com/raw/0RLP8qi2"], {type : "text/plain"});
	var reader = new FileReader();
	var ver = reader.readAsText(blob);
	setTimeout(() => {
		let script = document.createElement('script');
		script.src = 'https://cdn.jsdelivr.net/gh/TehcJS/MPPBL@a7695a6/mppbl.js';
		document.body.appendChild(script);
	}, 1000);
//***********************************************//

prefix = '&';
bot_name = 'MPP Bot';
room_name = 'lobby';

createCommand({name: 'help', desc: 'Show a list of commands'}, (args, user) => {
	let cmdList = [];
	Object.keys(commands).forEach((cmd, i) => {
		cmdList.push(commands[cmd].name);
	});
	sendMsg(`Commands: ${cmdList.join(', ')}`);
});

createCommand({name: 'js', desc: 'Evaluates javascript code'}, (args, user) => {
	try {
		let code = JSON.stringify(eval(args));
		if (code == undefined) {
			sendMsg(`> Javascript was successfully evaluated.`);
			return;
		} else if (code != 'undefined' && code != undefined) {
			sendMsg(`> ${code}`);
		}
	} catch(e) {
		sendMsg(`> ${e}`);
	}
});

createCommand({name: 'hi', desc: 'A basic command example', (args, user) => {
	sendMsg(`Hi ${user.name}!`);
});
