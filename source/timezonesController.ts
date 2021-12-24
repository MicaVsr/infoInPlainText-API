import { Request, Response } from 'express';
import timezones from 'timezones-list';
import {parseTimezoneToShow} from "./utils";

const getTimezones = (req: Request, res: Response) => {
    let timeZones = timezones.map(t => parseTimezoneToShow(t.tzCode));

    return res.status(200).send(timeZones);
};

export default { getTimezones };