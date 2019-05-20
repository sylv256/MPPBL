# MPPBL Alpha v1.0
### A Multiplayer Piano Bot Library.<br>
***
# Quick Documentation
***
## Variables
### You can change the "room_name", "bot_name", or "prefix" variable in the beginning of the code to whatever string you'd like.
***
## createCommand('command_name', function(args, user) { /* Command Code */ /* Example: */ MPP.chat.send("Hello World!"); });
### Creates a new command with the given name and function(DO NOT PUT SPACES IN THE COMMAND NAME)
***
## setName('name');
### Sets the name of the bot.
***
## setRoom('room');
### Sets the room.
***
## kickban('player id', milliseconds);
### Kickbans the player for the amount of milliseconds with the given player id.
***
## sendMsg('msg');
### Sends a message.
***
## receiveMsg('message', 'username'(optional), 'id'(optional), '_id'(optional), 'hexColor'(optional))
### Shows a message in chat(client-side only).
***
