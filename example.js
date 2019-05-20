prefix = '&';
bot_name = 'MPP Bot';
room_name = 'lobby';

createCommand('help', (args, user) => {
	let cmdList = [];
	Object.keys(commands).forEach((cmd, i) => {
		cmdList.push(commands[cmd]);
	});
	sendMsg(`Commands: ${cmdList.join(', ')}`);
});

createCommand('js', (args, user) => {
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

createCommand('hi', (args, user) => {
	sendMsg(`Hi ${user.name}!`);
});
