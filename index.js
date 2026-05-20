const EventEmitter = require('events');

class Sales extends EventEmitter {
	constructor(){
		super();
	}
}
const myEmitter = new Sales();

myEmitter.on('newSales',()=> console.log('There was a new sales'));


myEmitter.emit('newSales');