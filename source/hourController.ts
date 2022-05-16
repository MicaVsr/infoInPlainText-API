import { Request, Response } from 'express';
import {convertTZ, parseTimezoneToUse} from "./utils";

const getHour = (req: Request, res: Response) => {
    let reqTimeZone: string = req.params.timeZone;
    let timeZone = reqTimeZone ? parseTimezoneToUse(reqTimeZone) : 'Europe/London';

    let now = new Date();
    let convertedTime = convertTZ(now, timeZone);

    let minutes = convertedTime.getMinutes() < 10 ? `0${convertedTime.getMinutes()}` : convertedTime.getMinutes();
    let strHour = convertedTime.getHours() + ':' + minutes;

    let response = `${strHour}`;
    return res.status(200).send(response);
};

export default { getHour };
