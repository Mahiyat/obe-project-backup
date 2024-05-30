## Up and Run
### Using Docker
> install docker and docker-compose or docker desktop
> `docker compose up -d --build`

### Without Using Docker
#### Server
> `cd server`<br>
> `source myenv/bin/activate`<br>
> `pip install django django-cors-headers djangorestframework`<br>
> `cd oberserver`<br>
> `python manage.py makemigration`<br>
> `python manage.py migrate`<br>
> `python manage.py runserver`<br>

#### Client
##### Run in Development Mode
> `cd client`<br>
> `npm start`<br>

##### Build the App for Production
> `cd client`<br>
> `npm run build`<br>
> `cd build`<br>
> `npx serve`<br>

Note that this project has an AI feature (Add comments button in the result statistics enables the feature). Locally setup ollama and pull llama3 model for using this feature.

