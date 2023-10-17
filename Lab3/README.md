# Lab3

Su informante quiere entregarle la contraseña de acceso a una red, pero desconfía de todo medio para entregársela (aún no llega al capítulo del curso en donde aprende a comunicar una password sin que nadie más la pueda interceptar).
Por lo tanto, le entregará un archivo que contiene un desafío de autenticación, que al analizarlo, usted podrá obtener la contraseña que lo permite resolver.
Como nadie puede ver a su informante (es informante y debe mantener el anonimato), él se comunicará con usted a través de la redes inalámbricas y de una forma que solo usted, como experto en informática y telecomunicaciones, logrará esclarecer.

## Paso1

Identifique cual es la red inalámbrica que está utilizando su informante para enviarle información. Obtenga la contraseña de esa red utilizando el ataque por defecto de aircrack-ng, indicando el tiempo requerido para esto. Descifre el contenido transmitido sobre ella y descargue de Internet el archivo que su informante le ha comunicado a través de los paquetes que usted ha descifrado.

## Paso2

Descargue el diccionario de [Rockyou](https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt) (utilizado ampliamente en el mundo del pentesting). Haga un script que para cada string contenido en el diccionario, reemplace la primera letra por su letra en capital y agregue un cero al final de la password. 
Todos los strings que comiencen con número toca eliminarlos del diccionario. Indique la cantidad de contraseñas que contiene el diccionario modificado debe llamarse rockyou_mod.dic
A continuación un ejemplo de cómo se modifican las 10 primeras líneas del diccionario original.

## Paso3

A partir del archivo que descargó de Internet, obtenga la password asociada a la generación de dicho archivo. Obtenga la llave mediante un ataque por fuerza bruta. 
Para esto deberá utilizar tres herramientas distintas para lograr obtener la password del archivo: [hashcat](https://github.com/hashcat/hashcat), [aircrack-ng](https://github.com/aircrack-ng/aircrack-ng), [pycrack](https://github.com/nogilnick/PyCrack). Esta última, permite entender paso a paso de qué forma se calcula la contraseña a partir de los valores contenidos en el handshake, por lo que deberá agregar dichos valores al código para obtener la password a partir de ellos y de rockyou_mod.dic. Antes de ejecutar esta herramienta deberá deshabilitar la función RunTest().
Al calcular la password con hashcat utilice dos técnicas: una donde el resultado se guarda en el potfile y otra donde se deshabilita el potfile.
Indique qué información retorna cada una de las 2 técnicas, identificando claramente cada campo.

Recuerde guiarse por la rúbrica y utilizar el formato de informe cuyo código fuente está [acá](https://udp.instructure.com/courses/24641/files/3035244?wrap=1)
