#!/bin/bash

python manage.py makemigrations && \
python manage.py migrate && \
bash ./bin/create-admin-user.sh && \
python manage.py collectstatic --noinput && \
bash ./bin/server-start.sh
