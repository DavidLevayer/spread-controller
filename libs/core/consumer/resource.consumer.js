'use strict';

const AbstractConsumer = require('./abstract-consumer');

class ResourceConsumer extends AbstractConsumer {

    constructor() {
        super('resource', ['resource.tick']);
    }

    consume(message) {
        console.log('Message '+message+' consumed!')
    }
}

module.exports = ResourceConsumer;