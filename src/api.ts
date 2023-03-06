import express, { NextFunction } from 'express';
import cors from 'cors';
//import { init } from './database';

import ItemManager from './routes/ItemManager';
import LocationManager from './routes/LocationManager';
import Item from './models/Item';

let app = express();

app.use(cors())

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