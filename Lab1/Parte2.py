import sys
import time
import random
from scapy.all import *

def generate_random_bytes(length):
    return bytes([random.randint(0, 255) for _ in range(length)])

def send_icmp_packets(message):
    target_ip = "172.16.32.16"
    identifier = os.getpid() & 0xFFFF  # Identificador coherente con ping en Ubuntu
    sequence_number = 1  # Número de secuencia inicial
    
    for i, char in enumerate(message):
        payload = bytes([ord(char)]) + b'\x00'*10 + generate_random_bytes(37)
        icmp_packet = IP(dst=target_ip) / ICMP(id=identifier, seq=sequence_number) / Raw(load=payload)
        send(icmp_packet)
        
        sequence_number += 1  # Incrementar el número de secuencia
        time.sleep(0.5)  # Esperar un poco entre paquetes

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Uso: python script.py <mensaje>")
        sys.exit(1)

    message = sys.argv[1]
    send_icmp_packets(message)