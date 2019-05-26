const fs = require('fs');

module.exports = {
	name: 'delbase',
	description: 'Delete an existing base location',
	execute(message, args) {
        console.log(args);
        if (args.length != 1) {
            console.error('Invalid args');
            message.channel.send('Invalid arguments provided');
            return;
        }
        console.log('Valid args');
        const delIndex = args[0];
        fs.readFile('./models/bases.json', (err, data) => {  
          if (err) throw err;
          let bases = JSON.parse(data);
          const oldBase = bases[delIndex];
          bases.splice(delIndex, 1);
          fs.writeFile("./models/bases.json", JSON.stringify(bases), function(err) {
            if (err) throw err;
            console.log(`Base "${oldBase.name}" was deleted!`);
            message.channel.send(`Successfully deleted base "${oldBase.name}"`);
          });
      });
    }
};