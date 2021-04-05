#!/bin/bash

gunicorn -c bin/gunicorn.config.py nazcaspa.wsgi:application
