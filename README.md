# MPPBL Alpha v1.1
### A Multiplayer Piano Bot Library.
#### *Note*: The library is not complete yet so there will be many missing features. The library will be completed when MPPBL 1.0 is released.<br>
***
# How to Use
## First:
### Copy and paste <a href="https://raw.githubusercontent.com/TehcJS/MPPBL/master/copypaste.js">this</a> into your javascript console
## Second:
### Copy and paste the example code or bot code that you wish to use into the javascript console(Use <a href="https://raw.githubusercontent.com/TehcJS/MPPBL/master/example.js">this</a> example script to help make bot code, then insert it into your javascript console).
# Quick Documentation
***
## Variables
### You can change the "room_name", "bot_name", or "prefix" variable in the beginning of the code to whatever string you'd like.
***
## createCommand({ name: 'command_name'(optional), description(or desc; optional): 'command_description' }, function(args, user) { /* Command Code */ /* Example: */ MPP.chat.send(\`Hello ${user.name}!\`); });
### Creates a new command with the given name and function(DO NOT PUT SPACES IN THE COMMAND NAME).
### *Note*: Do not use the command name as the first argument in createdCommand(/*First Argument*/), as that is now deprecated. Use the object shown above.
#### The args argument is the part of the message after the command(e.g. The args of "$test testing 123" would be "123 testing").
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
