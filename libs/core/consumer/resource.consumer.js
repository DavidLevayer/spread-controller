'use strict';

const AbstractConsumer = require('spread-common/libs/core/consumer/abstract-consumer');

class ResourceConsumer extends AbstractConsumer {

    constructor() {
        super('resource', ['resource.tick']);
    }

    consume(message) {
        console.log('Message '+message+' consumed!')
    }
}

module.exports = ResourceConsumer;