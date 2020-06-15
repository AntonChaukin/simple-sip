let sip = require('sip');
const digest = require('sip/digest');

class Sip {
    constructor(origin, service) {
        if(!origin || !origin.username) {
            throw new Error('Originator username is missing')
        }
        if(!origin || !origin.password) {
            throw new Error('Originator password is missing')
        }
        this.origin = origin.username;
        this.service = service;
        this.auth = origin;
    }
}

module.exports = Sip;