#!/bin/bash

function create_user {
python << END
#!/bin/env python
import os
import sys

try:
    os.system("python manage.py createsuperuser --no-input --username=admin --email=admin@mailinator.com")
except CommandError as err:
    sys.stdout.write(err)
    sys.exit(0)
END
}

create_user
