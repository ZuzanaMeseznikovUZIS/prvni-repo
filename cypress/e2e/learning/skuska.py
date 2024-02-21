import os
import json

def get_all_addresses(main_directory):
    addresses = []
    for root, dirs, files in os.walk(main_directory):
        for file in files:
            if file.endswith(".txt"):  # Adjust the file extension as needed
                file_path = os.path.join(root, file)
                with open(file_path, "r") as f:
                    address = f.read().strip()  # Assuming each address is in a separate line
                    addresses.append(address)

    return addresses

main_address = "https://www.nzip.cz"  # Replace with your actual main directory
all_addresses = get_all_addresses(main_address)

with open("addresses.json", "w") as json_file:
    json.dump(all_addresses, json_file, indent=4)

print(f"JSON file 'addresses.json' created with {len(all_addresses)} addresses.")