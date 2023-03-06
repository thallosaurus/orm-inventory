import express, { NextFunction } from 'express';
//import { init } from './database';

import ItemManager from './routes/ItemManager';
import LocationManager from './routes/LocationManager';

let app = express();

//init database
//init();

ItemManager(app);
LocationManager(app);

app.listen(8080, () => {
    console.log("Listening on port 8080");
});

export interface UpdateRequest<T> extends express.Request {
    body: {
        key: keyof T;
        value: string;
    }
}