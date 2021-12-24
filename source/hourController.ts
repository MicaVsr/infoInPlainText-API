import { Request, Response } from 'express';
import {convertTZ, parseTimezoneToUse} from "./utils";

const getHour = (req: Request, res: Response) => {
    let reqTimeZone: string = req.params.timeZone;
    let timeZone = reqTimeZone ? parseTimezoneToUse(reqTimeZone) : 'Europe/London';

    let now = new Date();
    let convertedTime = convertTZ(now, timeZone);

    let strHour = convertedTime.getHours() + ':' + convertedTime.getMinutes();

    let response = `${strHour}`;
    return res.status(200).json(response);
};

export default { getHour };