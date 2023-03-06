import express, { Express } from 'express';
import { UpdateRequest } from '../api';
import Location from '../models/Location';

export default (app: Express) => {
    let route = express.Router();

    route.use(express.json());

    //get specified item
    route.get("/:id", async (req, res) => {
        let item = await Location.findByPk(req.params.id);
        if (!item) {
            //res.send(new Error("*#9900#"));
            res.status(404).send({
                type: "error",
                msg: `Item with ID ${req.params.id} not found`
            });
        } else {
            res.send(item);
        }
    });

    //create new item
    route.post("/", async (req: LocationRequest, res) => {
        let item = await Location.create({
            name: req.body.name,
        });

        res.send(item);
    });

    //modify specified item
    route.put("/:id", async (req: UpdateRequest<LocationRequestBody>, res) => {
        let item = await Location.findByPk(req.params.id);
        if (item) {
            item.set(req.body.key, req.body.value);
            item.save();
            res.status(200).send(item);
        } else {
            res.status(404).send({
                type: "error",
                msg: `Couldn't set property ${req.body.key} of ID ${req.params.id}. Item with ID ${req.params.id} not found`
            });
        }
    });

    app.use("/location", route);
}

interface LocationRequest extends express.Request {
    body: LocationRequestBody;
}

interface LocationRequestBody {
    name: string,
    //ean: number
}