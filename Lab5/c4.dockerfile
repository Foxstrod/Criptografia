FROM ubuntu:20.10

RUN sed -i 's/archive/old-releases/g' /etc/apt/sources.list
RUN sed -i '/^deb.*security.ubuntu.com/s/^/#/' /etc/apt/sources.list 

RUN apt update && apt install -y sudo net-tools openssh-client

# Crear usuario test con contraseña test
RUN useradd -m -s /bin/bash test && echo "test:test" | chpasswd

# Instalar servidor SSH
RUN apt-get install -y openssh-server

# Exponer el puerto 22 para SSH (puedes cambiarlo según tus necesidades)
EXPOSE 22

# Iniciar el servidor SSH al arrancar el contenedor
CMD ["/usr/sbin/sshd", "-D"]