'use strict';

const RabbitmqInfo = require('spread-common/libs/model/rabbitmq/rabbitmq-info');
const RabbitmqManager = require('spread-common/libs/util/rabbitmq/rabbitmq-manager');
const ResourceConsumer = require('./libs/core/consumer/resource.consumer');

const rabbitmqInfo = new RabbitmqInfo('localhost', 5672, 'spread');
const rabbitmqManager = new RabbitmqManager(rabbitmqInfo);

// Register consumers
rabbitmqManager.addConsumer(new ResourceConsumer());