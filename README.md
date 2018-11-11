# Corporation-Pop-Spotify

## Backend

- NestJS
- Jest
- Axios

Runs by default on http://localhost:3000 , Swagger is available on http://localhost:3000/swagger.

Note: Please provide a `.env` configuration file containing `SPOTIFY_CLIENT_ID=id` and `SPOTIFY_CLIENT_SECRET=secret`, or instead, pass them via environment variables.

### Development Mode

```sh
npm install
npm run start:dev
```

### Production Mode

```sh
npm install --production
npm run start:prod
```

## Frontend

- Angular
- Ant Design

Runs by default on http://localhost:4200.

### Development Mode

```sh
npm install
npm run start
```

### Production Mode

```sh
npm install --production
npm run build
```
