import json

def get_file_contents(path):
    file = open(path, 'r')
    contents = file.read()
    file.close()
    return contents

def parse_json_contents(path):
    return json.loads(get_file_contents(path))
