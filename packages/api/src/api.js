import express from 'express';
import routes from './routes';
import middleware from './middleware';

const appPort = process.env.API_PORT || 8081;

const app = express();

app.use([ middleware, routes ]);

app.listen(appPort, () => {
    console.log(`Server runnign on Port ${appPort}`);
});