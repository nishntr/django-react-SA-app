# django-react-SA-app

A sentiment analysis web app based on a Bert model. I used django framework for backend, react for frontend and postgresql for database.

**For Postgres Server**

Follow [this](https://gist.github.com/gwangjinkim/f13bf596fefa7db7d31c22efd1627c7a) for quick postgres installation
```
> pg_ctl -D localdb -l log_db start 
```
**For Django Server**
``` 
> cd backend/django
> python manage.py runserver
```
**For React Server**
```
> cd frontend/react_app
> npm start
```
then visit *localhost:3000*, or just *localhost* if running using docker
