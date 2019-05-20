# MPPBL Alpha v1.0
## <a href="https://github.com/TehcJS/MPPBL/blob/master/mppbl.js">Copy And Paste This Into Your Javascript Console</a>
### A Multiplayer Piano Bot Library.
#### *Note*: The library is not complete yet so there will be many missing features. The library will be completed when MPPBL 1.0 is released.<br>
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
