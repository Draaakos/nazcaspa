deploy:
	docker build -t "drakosddos/1c082d075cd441bfb7065ac34e423a2b:v$(version)" .
	docker push "drakosddos/1c082d075cd441bfb7065ac34e423a2b:v$(version)"


# db-create:
# 	python manage.py migrate
# 	$(MAKE) create-admin-user


# db-migrate:
# 	python manage.py makemigrations web
# 	python manage.py makemigrations auction
# 	python manage.py migrate


# create-admin-user:
# 	python manage.py createsuperuser \
# 		--no-input \
# 		--username=admin \
# 		--email=admin@mailinator.com
# 	python manage.py changepassword admin


build-front:
	export NODE_ENV=production; \
	sh ./bin/copy-assets.sh && \
	./node_modules/.bin/stylus --compress ./front/css/*-page.styl --out ./static/css/. && \
	./node_modules/.bin/webpack --progress
