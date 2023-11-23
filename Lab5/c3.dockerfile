FROM ubuntu:14.10

RUN sed -i 's/archive/old-releases/g' /etc/apt/sources.list
RUN sed '/^deb.*security.ubuntu.com/s/^/#/' /etc/apt/sources.list 

RUN apt update && apt install -y sudo net-tools openssh-client