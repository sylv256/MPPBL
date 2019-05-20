//MPPBL Alpha v1.2.1(Multiplayer Piano Bot Library Alpha v1.2.1) By: ๖ۣۜTehc
	///Variables
	//* If you want to include a prefix, bot_name, or any variable in a string(prefix, bot_name, room_id, or any text surrounded in either ``, '', or "" with a var [Variable Name] = '[Text]' before the variable), type ${[Variable Name]} where you want to put the variable. Don't forget to change [Variable Name] in ${[Variable Name]} to the name of the variable you want to include!*//
	let prefix = `[Prefix]`;
	let bot_name = `[Bot Name]`;
	let room_id = `[Room Name]`;
	let commands = {};

	///Functions
	//* You can use setName('Name') to set the name of the bot. *//
	const setName = function(name) {
		MPP.client.sendArray([{m: "userset", set: {name: name}}]);
	};
	//* kickban('id', /*milliseconds*/3600000) Bans the player for the amount of milliseconds specified. *//
	const kickban = function(id, ms) {
	    MPP.client.sendArray([{m: "kickban", _id: id, ms: ms}]);
	};
	//* setRoom('id') Sets the room of the bot to the specified room name(id) *//
	const setRoom = function(id) {
		MPP.client.setChannel(id);
	};
	//* sendMsg('message') Sends a message. *//
	const sendMsg = function(msg) {
		MPP.chat.send(msg);
	};
	//* receiveMsg('message', 'username'(optional), 'id'(optional), '_id'(optional), 'hexColor'(optional)) Shows a message in chat(client-side only).
	const receiveMsg = function(msg, username = null, id = null, _id = null, hexColor = null) {
		MPP.chat.receive({a: msg, p: {name: username, id: id, _id: _id, color: hexColor}});
	};
	//* createCommand('name', function(){/*Code*/}) Creates a new command with the given name and function. *//
	const createCommand = function(cmd, func) {
		setTimeout(() => {
			commands[cmd.name] = {
				name: cmd.name,
				run: func,
				desc: cmd.desc || cmd.name
			};
		}, 500);
	};

	//Command Code(DO NOT TAMPER/EDIT THIS)
	MPP.client.on('a', (msg) => {
		Object.keys(commands).forEach((cmd, i) => {
			if (msg.a.toLowerCase().startsWith(prefix.toLowerCase()+cmd.toLowerCase())) {
				commands[cmd].run(msg.a.split(' ').splice(1, msg.a.split(' ').length).join(' '), msg.p);
			}
		});
	});
//***********************************************//
