'use strict'
 
var tg = require('telegram-node-bot')('615385115:AAGAIEj5W3ra_1yj6_sn0AjGib-Hzyr5Jac')
 
tg.router.
    when(['ping'], 'PingController')
     
tg.controller('PingController', ($) => {
	tg.for('ping', () => {
		console.log($);
		$.sendMessage('pong')
	})
}) 
