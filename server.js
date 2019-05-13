'use strict';

const RabbitmqConsumerInfo = require('spread-common/libs/model/rabbitmq/rabbitmq-consumer-info');
const RabbitmqConsumer = require('spread-common/libs/util/rabbitmq/rabbitmq-consumer');
const ResourceConsumer = require('./libs/core/consumer/resource.consumer');

const rabbitmqConsumerInfo = new RabbitmqConsumerInfo('localhost', 5672, 'spread');
const rabbitmqConsumer = new RabbitmqConsumer(rabbitmqConsumerInfo);

const resourceConsumer = new ResourceConsumer();

setTimeout(() => {
    rabbitmqConsumer.setConsumer(resourceConsumer);
}, 2000);