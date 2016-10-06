#!/home/pi/.nvm/versions/node/v4.6.0/bin/node
var pn532 = require('pn532');
var SerialPort = require('serialport');

var serialPort = new SerialPort('/dev/ttyAMA0', { baudrate: 115200 });
var rfid = new pn532.PN532(serialPort);
rfid.on('ready', function() {
    console.log('Listening for a tag scan...');
    rfid.on('tag', function(tag) {
        console.log('tag:', tag.uid);
	if (tag.uid[1] === 'e') {
    		console.log('you are cool');
		console.log('you get coffee');
	}
	else if (tag.uid[1] === 'd') {
		console.log('you are not cool');
	}
	else {
		console.log('you are dead');
	}
    });
});
//console.log(JSON.stringify(rfid, null, 2));
console.log('end');
