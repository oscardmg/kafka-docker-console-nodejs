

```
docker-compose -f compose.yml  up -d
```

```
docker exec -it kafka /bin/sh
```

```
# cd opt
# ls
kafka  kafka_2.13-2.8.1  overrides
# cd kafka_2.13-2.8.1
# cd bin
```

```
./kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic quickstart
```

```
./kafka-console-producer.sh --broker-list localhost:9092 --topic quickstart
```

```
./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic quickstart --from-beginning
```

Utilizar aplicacion offset explorer para ver los mensajes
