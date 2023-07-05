// connect kafka with node.js
import { Consumer, KafkaClient, Producer } from 'kafka-node';

const client = new KafkaClient({ kafkaHost: 'localhost:9092' });

client.on('connect', () => {
  console.log('Kafka client connected');
});

client.on('error', (err) => {
  console.log('error', err);
});

const kafka_topic = 'quickstart';

const consumer = new Consumer(client, [{ topic: kafka_topic}]);

consumer.on('message', (message) => {
  console.log(message);
});


// crear productor

const producer = new Producer(client);

producer.on('ready', () => {
  console.log('Kafka Producer is connected and ready.');

  const message = 'Hello Kafka';
  

  setInterval(() => {
    producer.send([{ topic: kafka_topic, messages: message }], (err, result) => {
      console.log('Message sent: ', result);
    });
  }, 5000);

});



