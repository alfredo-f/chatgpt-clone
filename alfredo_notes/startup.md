# No need to remove everything

```

docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
docker network rm $(docker network ls -q)

```

# Build again and up

```

cd C:\Users\a.fomitchenko\PycharmProjects\chatgpt-clone

# docker-compose down

docker build --target=node-api -t node-api .

docker-compose up

```
