Para este último laboratorio, nuestro informante ya sabe que puede establecer un medio seguro sin un intercambio previo de una contraseña, gracias al protocolo diffie-hellman. El problema es que ahora no sabe si confiar en el equipo con el cual establezca comunicación, ya que las credenciales de usuario pueden haber sido divulgadas por algún soplón.

Para el presente laboratorio deberá:

Crear 4 contenedores en Docker, donde cada uno tendrá el siguiente SO:

Ubuntu 14.10, Ubuntu 16.10, Ubuntu 18.10 y Ubuntu 20.10, a los cuales llamaremos C1,C2,C3,C4/S1 respectivamente.

Para cada uno de ellos, deberá instalar el cliente y servidor openssh disponibles en los repositorios de apt.

En S1 deberá crear el usuario test con contraseña test, para acceder a él desde los otros contenedores por el protocolo ssh.

En total serán 4 escenarios, donde cada uno corresponderá a los siguientes equipos:

C1 -> S1
C2 -> S1
C3 -> S1
C4 -> S1

Paso1.

Para cada uno de los 4 escenarios, solo deberá establecer la conexión y no realizar ningún otro comando que pueda generar tráfico (como muestra la Figura). Deberá capturar el tráfico de red generado y analizar el patrón de tráfico generado por cada cliente. De esta forma podrá obtener una huella digital para cada cliente a partir de su tráfico.

Indique el tamaño de los paquetes del flujo generados por el cliente y el contenido asociado a cada uno de ellos. Luego, indique qué información distinta contiene el escenario siguiente (diff incremental).
El objetivo de esta tarea es identificar claramente los cambios entre las distintas versiones de ssh.

Paso2.

Para poder identificar que el usuario efectivamente es el informante, éste utilizará una versión única de cliente. ¿Con qué cliente SSH se habrá generado el siguiente tráfico?

Replique este tráfico generado en la imagen. Debe generar el tráfico con la misma versión resaltada en azul.

Paso3. 

Para que el informante esté seguro de nuestra identidad, nos pide que el patrón del tráfico de nuestro server también sea modificado, hasta que el Key Exchange Init del server sea menor a 300 bytes.
Indique qué pasos realizó para lograr esto.

El template del informe se puede descargar [acá](https://udp.instructure.com/courses/24641/files/3035266?wrap=1)
