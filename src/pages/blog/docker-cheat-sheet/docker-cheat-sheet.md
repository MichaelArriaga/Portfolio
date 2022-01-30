---
slug: '/blog/simple-docker-cheat-sheet-for-dockerized-rails-apps'
path: '/blog/simple-docker-cheat-sheet-for-dockerized-rails-apps'
date: '2020-09-28'
title: 'Simple Docker Cheat Sheet For Dockerized Rails Apps'
readtime: '15 min read'
tags: 'Docker, Rails'
---

| container commands                                                                                                                                             |                                                                                                                                                                                                                                                         effect |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `docker ps`                                                                                                                                                    |                                                                                                                                                                                                                                   shows all running containers |
| `docker ps -a`                                                                                                                                                 |                                                                                                                                                                                                                          shows all containers (running or not) |
| `docker stop <id> or <name>`                                                                                                                                   |                                                                                                                                                                                                                                              stops a container |
| `docker rm <id> or <name>`                                                                                                                                     |                                                                                                                                                                                                              removes a stopped or exited container permanently |
| `docker exec <container_name> or <container_id> *my_command`\*                                                                                                 |                                                                                                                                                                                                       runs a command inside an instance of a running container |
| `docker attach <container_name> or <container_id>`                                                                                                             |                                                                                                                                                                                         attach to a container that's running the background (access the shell) |
| `docker container prune`                                                                                                                                       |                                                                                                                                                                                                                                  remove all stopped containers |
| `docker container run -it -p 127.0.0.1:3000:3000 --link pg -e POSTGRES_HOST=pg -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=secret my_username/rails_app:v1` | runs a new container that with interactive shell `-it` that links the localhost port `127.0.0.1:3000:3000` to localhost:3000 on our machine to a postgres container `--link` and environment variables used by database.yml with the `-e POSTGRES_HOST=pg` etc |
| `docker exec -it <container_name> <command>`                                                                                                                   |                                                                                                                                                                    attaches to an instance of a running container and runs command opening STDIN interactivity |

| image commands                              |                                                                                  effect |
| :------------------------------------------ | --------------------------------------------------------------------------------------: |
| `docker images`                             |                                                                        shows all images |
| `docker rmi <image_id> or <name>`           |                                                                        removes an image |
| `docker run <image_name>`                   |               runs a container based on an image (if not on system it will download it) |
| docker run -d <image_name>                  | runs a container from the image in the background (no shell or output console is shown) |
| `docker pull <image_name>`                  |                                         downloads an image but does not run a container |
| `docker run -it <image_name>`               |                                    opens container with STDIN prompt based off an image |
| `docker run -p 3000:3000 <image_name>`      |                            opens a container with the ip address accessible by the host |
| `docker run --name myname image:1.13-image` |                                    run a container based on an image and give it a name |

| volume commands                                                                                                                                       |                                                                                                                                                                                                         effect |
| :---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `docker volume ls`                                                                                                                                    |                                                                                                                                                                                           list current volumes |
| `docker volume rm <volume_name>`                                                                                                                      |                                                                                                                                                                                                remove a volume |
| `docker container run --name pg -d -v ws-pg-data:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=secret postgres:10.6-alpine` | runs a `pg` container in detached mode `-d` and creates a volume called ws-pg-data `-v` outside of the container that is mounted to it and environment variables are passed to the container as well with `-e` |

| docker-compose commands                | effect                                                                                                         |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| docker-compose up                      | uses the docker-compose.yml file in the current directory to start services (can be run in detached mode `-d`) |
| docker-compose ps                      | see current running containers built from the docker-compose.yml file                                          |
| docker-compose logs                    | see the logs from both running compose containers                                                              |
| docker-compose up -d --build           |                                                                                                                |
| docker-compose attach <container_name> | Get into container session STDIN and have the ability type commands in the container (works well for byebug)   |
|                                        |                                                                                                                |

**remove unused dangling images, containers, volumes and networks**
`docker system prune`
`docker system prune --volumes` : removes all volumes
`docker system prune -a` will remove all unused images (not just dangling images)

**remove unused or stale containers**

`docker container rm <container_id>`
`docker container prune`

**run command line in image**
`docker container run -it my_username/cowsay:v1 bash`
