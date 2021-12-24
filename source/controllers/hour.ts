import { Request, Response } from 'express';
import {parseTimezoneToUse} from "../utils";

const getHour = (req: Request, res: Response) => {
    let reqTimeZone: string = req.params.timeZone;
    let timeZone = reqTimeZone ? parseTimezoneToUse(reqTimeZone) : 'Europe/London';

    let now = new Date();
    let convertedTime = convertTZ(now, timeZone);

    let strHour = convertedTime.getHours() + ':' + convertedTime.getMinutes();

    let response = `${strHour}`;
    return res.status(200).json(response);
};



function convertTZ(date: Date | string, tzString: string): Date {
    return new Date(
        (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString})
    );
}

export default { getHour };