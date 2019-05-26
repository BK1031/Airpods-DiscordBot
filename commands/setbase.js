const fs = require('fs');

module.exports = {
	name: 'setbase',
	description: 'Store a new base location',
	execute(message, args) {
        console.log(args);
        if (args.length != 3) {
            console.error('Invalid args');
            message.channel.send('Invalid arguments provided');
            return;
        }
        console.log('Valid args');
        const newBase = {
          "name": args[0],
          "x-coord": args[1],
          "y-coord": args[2]
        };
        fs.readFile('./models/bases.json', (err, data) => {  
          if (err) throw err;
          let bases = JSON.parse(data);
          bases.push(newBase);
          fs.writeFile("./models/bases.json", JSON.stringify(bases), function(err) {
            if (err) throw err;
            console.log(`Base "${newBase.name}" was appended to file!`);
            message.channel.send(`Successfully added new base "${newBase.name}" at ${newBase["x-coord"]}, ${newBase["y-coord"]}`);
          });
      });
    }
};