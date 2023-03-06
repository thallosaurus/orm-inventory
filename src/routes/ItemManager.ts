import express, { Express } from 'express';
import { UpdateRequest } from '../api';
import Item from '../models/Item';

export default (app: Express) => {
    let route = express.Router();

    route.use(express.json());

    route.get("/", async (req, res) => {
        let items = await Item.findAll();

        res.send(items);
    });

    //get specified item
    route.get("/:id", async (req, res) => {
        let item = await Item.findByPk(req.params.id);
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
    route.post("/", async (req: ItemRequest, res) => {
        let item = await Item.create({
            name: req.body.name,
            ean: req.body.ean
        });

        res.send(item);
    });

    //modify specified item
    route.put("/:id", async (req: UpdateRequest<ItemRequestBody>, res) => {
        let item = await Item.findByPk(req.params.id);
        if (item) {
            item.set(req.body.key, req.body.value);
            item.save();
            res.status(200).send(item);
        } else {
            res.status(404).send({
                type: "error",
                msg: `Couldn't set property, Item with ID ${req.params.id} not found`
            });
        }
    });

    app.use("/things", route);
}

interface ItemRequest extends express.Request {
    body: ItemRequestBody;
}

export interface ItemRequestBody {
    name: string,
    ean: number,
    id: null | number
}