## Up and Run
### Using Docker
> install docker and docker-compose or docker desktop
> `docker compose up -d --build`

### Without Using Docker
#### Server
> `cd server`
> `source myenv/bin/activate`
> `pip install django django-cors-headers djangorestframework`
> `cd oberserver`
> `python manage.py makemigration`
> `python manage.py migrate`
> `python manage.py runserver`

#### Client
##### Run in Development Mode
> `cd client`
> `npm start`

##### Build the App for Production
> `cd client`
> `npm run build`
> `cd build`
> `npx serve` 

