import re

input_file = "rockyou.txt"
output_file = "rockyou_mod.dic"

def starts_with_number(s):
    return re.match(r"^\d", s)

def modify_password(password):
    if starts_with_number(password):
        return None
    elif password:
        return password[0].upper() + password[1:] + "0"
    else:
        return password

with open(input_file, "r", encoding="latin-1") as input_file, open(output_file, "w") as output_file:
    modified_passwords = []
    total_passwords = 0

    for line in input_file:
        password = line.strip()
        total_passwords += 1

        modified_password = modify_password(password)

        if modified_password is not None:
            modified_passwords.append(modified_password)

    output_file.write("\n".join(modified_passwords))

print(f"Total de contraseñas en el diccionario modificado: {len(modified_passwords)}")