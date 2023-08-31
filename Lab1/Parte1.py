import sys

def cifrar_cesar(texto, corrimiento):
    resultado = []

    for caracter in texto:
        if caracter.isalpha():
            if caracter.isupper():
                codigo = ord('A')
            else:
                codigo = ord('a')

            indice_original = ord(caracter) - codigo
            indice_cifrado = (indice_original + corrimiento) % 26
            caracter_cifrado = chr(indice_cifrado + codigo)
            resultado.append(caracter_cifrado)
        else:
            resultado.append(caracter)

    return ''.join(resultado)

if len(sys.argv) != 3:
    print("Uso: python programa.py <texto> <corrimiento>")
    sys.exit(1)

texto_a_cifrar = sys.argv[1]
corrimiento = int(sys.argv[2])

texto_cifrado = cifrar_cesar(texto_a_cifrar, corrimiento)
print(texto_cifrado)