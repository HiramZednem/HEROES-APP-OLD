# HeroesApp

If you want to try this app, you need to install [json-server](https://www.npmjs.com/package/json-server)  and run the follow commands


## Instructions

### Backend

Run `cd backend` to navigate to the folder where the db is ubicated.

Run `json-server --watch db.json` to start the json server.

Now if you go to `http://localhost:3000/usuarios`, you'll get 
```
[
  {
    "id": 1,
    "usuario": "John Doe",
    "email": "john.due@gmail.com"
  }
]
```

**If you have problems following this instructions please  [json-server](https://www.npmjs.com/package/json-server)**

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

